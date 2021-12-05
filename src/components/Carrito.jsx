import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Carrito = () => {
  const context = useContext(CarritoContext);
  // destructuración del objeto context
  const { carrito, setCarrito, deleteProduct } = context;
  const { products, total } = carrito;

  /* 
    1. crear una variable llamada carrito
      - const carrito
    2. Darle el valor de context.carrito
      - const carrito = context.carrito {products: [], total: 1242}
  */
  console.log("En el carrito hay: ", carrito);

  return (
    <div>
      <h3>Carrito: ({products.length})</h3>
      <ul className="list-group">
        {products.map((product) => (
          <>
            <li key={product.id} className="list-group-item">
              {product.name} - ${product.price}
              <button
                className="btn btn-danger float-end"
                onClick={() => deleteProduct(product.id)}
              >
                Eliminar de carrito
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;
