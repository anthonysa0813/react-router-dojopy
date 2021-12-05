import React, { createContext, useState } from "react";

// 1) crear una instancia a su contexto
export const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [carrito, setCarrito] = useState({
    products: [],
    total: 0,
  });

  const deleteProduct = (id) => {
    const arrayFilter = carrito.products.filter((product) => product.id !== id);
    setCarrito({
      ...carrito,
      products: arrayFilter,
    });
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        deleteProduct,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
