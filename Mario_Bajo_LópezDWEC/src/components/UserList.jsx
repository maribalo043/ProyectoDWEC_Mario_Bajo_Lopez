import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, TableHead, TableRow, TableCell, TableBody,Avatar} from "@mui/material";


export const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/create");
  };
  const recargar=()=>{
    fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }
  useEffect(() => {
    recargar();
  });

  const handleEdit = (userId) => {
    navigate(`/update/${userId}`);
  };

  const handleDelete = (userId) => {
    var info = {
      id: userId,
    };
    
    fetch('https://www.melivecode.com/api/users/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    }).then(recargar)
};
  return (
    <>
      <h1>UserList</h1>
      <Button variant="outlined" color="primary" onClick={handleAdd}>
        Añadir Usuario
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Eliminar</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.fname}</TableCell>
            <TableCell>{user.lname}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>
              <Avatar src={user.avatar} sx={{ width: '40px', height: '40px' }} alt="Imagen Avatar" />
            </TableCell>
            <TableCell>
              <Button variant="outlined" color="error" onClick={() => handleDelete(user.id)}>
                Eliminar
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="outlined" color="primary" onClick={() => handleEdit(user.id)}>
                Editar
              </Button>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
