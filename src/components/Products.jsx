import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { productsData } from "../data/products";

const Products = () => {
  const context = useContext(CarritoContext);
  const { carrito, setCarrito } = context;

  const addProduct = (product) => {
    setCarrito({
      ...carrito,
      products: [...carrito.products, product],
      total: carrito.total + product.price,
    });
  };

  return (
    <div>
      <ul className="list-group">
        {productsData.map((product) => (
          <li className="list-group-item" key={product.id}>
            {product.name} - ${product.price}
            <button
              className="btn btn-primary float-end"
              onClick={() => addProduct(product)}
            >
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
