import { useNavigate } from "react-router-dom";
import { TableRow, TableCell, Button, Avatar } from "@mui/material";

/* eslint-disable react/prop-types */
export const UserListPart = ({ user }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/update/${user.id}`);
  };

  const handleDelete = (idUser) => {
    var data = {
      id: idUser,
    };

    fetch('https://www.melivecode.com/api/users/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    navigate("/usuarios");
  };

  return (
    <TableRow>
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
        <Button variant="outlined" color="primary" onClick={handleEdit}>
          Editar
        </Button>
      </TableCell>
    </TableRow>
  );
};
