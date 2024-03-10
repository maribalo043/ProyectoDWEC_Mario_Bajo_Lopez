import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const UserCreate = () => {
  const navigate = useNavigate();

  const handleUsers = () => {
    navigate("/usuarios");
  };

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const createUser = () => {
    var data = {
      fname: nombre,
      lname: apellido,
      username: username,
      password: "1234",
      email: email,
      avatar: avatar,
    };
  
    fetch("https://www.melivecode.com/api/users/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      navigate("/");
    
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: "8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ p: 5 }} component="h1" variant="h5">
          Datos del nuevo usuario:
        </Typography>
        <form style={{ width: "100%", marginTop: "3" }} onSubmit={createUser}>
         <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                label="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                autoFocus
              />

              {/* … resto de textfields*/}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                variant="outlined"
                required
                label="Apellido"
                onChange={(e) => setApellido(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="userName"
                variant="outlined"
                required
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="email"
                variant="outlined"
                required
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="avatar"
                variant="outlined"
                required
                label="Avatar"
                onChange={(e) => setAvatar(e.target.value)}
                autoFocus
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
            Crear Usuario
          </Button>
        </form>
      </Container>
      <Button onClick={handleUsers}>Volver</Button>
    </>
  );
};