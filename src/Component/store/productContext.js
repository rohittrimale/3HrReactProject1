import React, { useEffect, useState } from "react";

const ProductContext = React.createContext({
  products: [],
  addProduct: (productId, productName, sellingPrice) => {},
  onDelete: () => {},
});

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  let [totalNetWorth, setTotalNetWorth] = useState(0);
  let total = 0;
  const getDatFromLocalStorge = async () => {
    const product = await JSON.parse(localStorage.getItem("productList"));
    if (product !== null) {
      setProducts(product);
    }
  };
  useEffect(() => {
    getDatFromLocalStorge();
  }, []);


  const addProductHandler = (productData) => {
    setProducts((prevProducts) => [...prevProducts, productData]); // Using functional form of setProducts
    const updatedProducts = [...products, productData]; // Updated products array
    localStorage.setItem("productList", JSON.stringify(updatedProducts));
  };

  const onDeleteHandler = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("productList", JSON.stringify(updatedProducts));
  }

  return (
    <ProductContext.Provider
      value={{
        products: products,
        addProduct: addProductHandler,
        onDelete: onDeleteHandler,
        totalNetWorth: totalNetWorth,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
