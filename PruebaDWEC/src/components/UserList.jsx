import { useEffect, useState } from "react";
import { UserListPart } from "./UserListPart";
import { useNavigate } from "react-router-dom";
import { Button, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/create");
  };

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []); // Agregué un arreglo vacío como dependencia para que el efecto se ejecute solo una vez al montar el componente

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
            <UserListPart key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};
