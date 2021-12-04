import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContainer } from "../componentsCss/styles";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users/";
    getUsers(url);
  }, []);

  const getUsers = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  return (
    <UserContainer>
      <h3>Users:</h3>
      <ul>
        {users.map((user) => (
          <Link to={`/blog/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        ))}
      </ul>
    </UserContainer>
  );
};

export default User;
