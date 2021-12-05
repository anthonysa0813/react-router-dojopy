import React from "react";
import Header from "./components/Header";
import User from "./components/User";
import { BlogContainer, HeaderContainer } from "./componentsCss/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserById from "./components/UserById";
import Contact from "./components/Contact";
import Products from "./components/Products";
import CarritoProvider from "./context/CarritoContext";
import Carrito from "./components/Carrito";

const App = () => {
  return (
    <CarritoProvider>
      <Router>
        <BlogContainer>
          <Header />
          <hr />
          <Switch>
            <Route path="/" exact>
              <User />
            </Route>
            <Route path="/blog/:id" exact>
              <UserById />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/admin">
              <h1>Bienvenido a mi blog</h1>
            </Route>
            <Route path="/products">
              <h3>Products:</h3>
              <Products />
            </Route>{" "}
            <Route path="/carrito">
              <Carrito />
            </Route>
          </Switch>
        </BlogContainer>
      </Router>
    </CarritoProvider>
  );
};

export default App;
