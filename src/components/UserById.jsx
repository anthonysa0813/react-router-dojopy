import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserCont } from "../componentsCss/styles";

const UserById = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    company: {
      name: "",
    },
  });
  //quiero que saques el atributo "id"y que lo guardes en un variable también llamada id
  const { id } = useParams();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    setTimeout(() => {
      getUser(url);
    }, 3000);
  }, []);

  const getUser = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(data);
  };

  return (
    <UserCont>
      {user.name ? (
        <>
          <h1>Usuario tal: {id}</h1>
          <strong>Name: {user.name} </strong>
          <strong>Email: {user.email} </strong>
          <strong>Phone: {user.phone} </strong>
          <strong>Company Name: {user.company.name} </strong>
        </>
      ) : (
        <h3>Cargando...</h3>
      )}
    </UserCont>
  );
};

export default UserById;
