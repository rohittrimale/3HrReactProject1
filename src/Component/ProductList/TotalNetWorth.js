import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../store/productContext";

const TotalNetWorth = () => {
  const productContext = useContext(ProductContext);
  let [totalNetWorth, setTotalNetWorth] = useState(0);
  useEffect(() => {
    const sum = productContext.products.reduce(
      (acc, curr) => acc + parseFloat(curr.sellingPrice),
      0
    );
    setTotalNetWorth(sum);
  });

  return (
    <div>
      <h2>
        Total value of Worth of product :<span> Rs {totalNetWorth}</span>
      </h2>
    </div>
  );
};

export default TotalNetWorth;
