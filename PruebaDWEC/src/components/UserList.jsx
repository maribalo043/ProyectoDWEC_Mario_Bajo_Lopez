import { useEffect, useState } from "react";
import { UserListPart } from "./UserListPart";
import { useNavigate } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleAdd =()=>{
    navigate("/create");
  };
  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  });
  

  return (
    <>
      <h1>userList</h1>
      <button onClick={handleAdd}>Añadir Usuario</button>
      <table>
        <thead>
          <th>Id</th>
          <th>nombre</th>
          <th>apellido</th>
          <th>username</th>
          <th>avatar</th>
          <th>eliminar</th>
          <th>editar</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserListPart key={user.id} user={user}/>
          ))}
        </tbody>
      </table>
    </>
  );
};
