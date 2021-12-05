import React, { useContext, useState } from "react";
import { withRouter } from "react-router";
import { CarritoContext } from "../context/CarritoContext";

const Contact = (props) => {
  const [usuario, setUsuario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario.trim()) {
      console.log("No existe el usuario");
      return;
    }

    props.history.push("/");
  };

  const handleChange = (e) => {
    setUsuario(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Crea una cuenta - ({context.hola})</h3>
        <label htmlFor="">Usuario:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Escribe tu usario"
          value={usuario}
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-3" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default withRouter(Contact);
