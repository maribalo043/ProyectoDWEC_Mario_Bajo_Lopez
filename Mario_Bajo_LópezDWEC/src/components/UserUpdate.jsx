import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";

export const UserUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch(`https://www.melivecode.com/api/users/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setNombre(result.user.fname);
        setApellido(result.user.lname);
        setAvatar(result.user.avatar);
        setUsername(result.user.username);
      });
  }, [id]);

  const updateUser = () => {
    var data = {
      id: id,
      fname: nombre,
      lname: apellido,
      username: username,
      avatar: avatar,
    };

    fetch('https://www.melivecode.com/api/users/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    navigate("/usuarios");
    console.log(data)
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        marginTop: "8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar src={avatar}></Avatar>
      <Typography sx={{ p: 5 }} component="h1" variant="h5">
        Datos del usuario:
      </Typography>
      <form style={{ width: "100%", marginTop: "3" }} onSubmit={updateUser} action="PUT">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              variant="outlined"
              required
              label="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              variant="outlined"
              required
              label="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="username"
              variant="outlined"
              required
              label="Nombre de Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="avatar"
              variant="outlined"
              required
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
        >
          Actualizar Usuario
        </Button>
      </form>
    </Container>
  );
};
