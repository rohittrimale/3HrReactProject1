import React, { useContext } from "react";
import ProductContext from "../store/productContext";
import DeleteButtton from "./DeleteButtton";

const ProductList = () => {
  const productContext = useContext(ProductContext);
  return (
    <div>
      <h1>Product</h1>
      <ul>
        {productContext.products.map((product) => {
          return (
            <li key={product.productId}>
              <div>
                {product.sellingPrice} - {product.productName}{" "}
                <DeleteButtton
                  productId={product.productId}
                  productContext={productContext}
                >
                  Delete Product
                </DeleteButtton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
