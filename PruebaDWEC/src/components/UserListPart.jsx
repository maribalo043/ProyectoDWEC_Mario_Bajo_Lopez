import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const UserListPart = ({ user }) => {
  const navigate = useNavigate();

  const handleEdit =()=>{
    navigate(`/update/${user.id}`);
  };
  const handleDelete = (idUser) => {

    var data = {
      id: idUser,
    }

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
    <>
      <tr>
        <td>{user.id}</td>
        <td>{user.fname}</td>
        <td>{user.lname}</td>
        <td>{user.username}</td>
        <td>
          <img src={user.avatar} style={{ maxWidth: '20%', height: 'auto' }} alt="Imagen Avatar" />
        </td>
        <td><button onClick={() => handleDelete(user.id)}>Eliminar</button></td>
        <td><button onClick={handleEdit}>Editar</button></td>
      </tr>
    </>
  );
};
