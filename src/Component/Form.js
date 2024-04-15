import React, { useState, useReducer, useContext } from "react";
import InputComponent from "./InputComponent";
import ProductContext from "./store/productContext";

const productIdReducer = (state, action) => {
  if (action.type === "USER_DATA") {
    return { value: action.val, isVaild: action.val.trim().length > 0 };
  }
  return { value: "", isVaild: false };
};

const sellingPriceReducer = (state, action) => {
  if (action.type === "USER_DATA") {
    return { value: action.val, isVaild: action.val.trim().length > 0 };
  }
  return { value: "", isVaild: false };
};

const productNameReducer = (state, action) => {
  if (action.type === "USER_DATA") {
    return { value: action.val, isVaild: action.val.trim().length > 0 };
  }
  return { value: "", isVaild: false };
};

const Form = () => {
  const [isFormVaild, setIsFormVaild] = useState(false);

  const productCtx = useContext(ProductContext);

  const [productIdState, dispatchProductId] = useReducer(productIdReducer, {
    value: "",
    isVaild: false,
  });

  const [sellingPriceState, dispatchSellingprice] = useReducer(
    sellingPriceReducer,
    {
      value: "",
      isVaild: false,
    }
  );

  const [productNameState, dispatchProductName] = useReducer(
    productNameReducer,
    {
      value: "",
      isVaild: false,
    }
  );
  const sumitHandler = (event) => {
    event.preventDefault();

    const productDetails = {
      productId: productIdState.value,
      sellingPrice: sellingPriceState.value,
      productName: productNameState.value,
    };
    productCtx.addProduct(productDetails);
  };
  return (
    <div>
      <form onSubmit={sumitHandler}>
        <div>
          <label htmlFor="productId">Product Id:</label>
          <InputComponent
            id="productId"
            type="number"
            onDispatch={dispatchProductId}
            stateValue={productIdState.value}
          />
        </div>
        <div>
          <label htmlFor="sellingPrice">Selling Price:</label>
          <InputComponent
            id="sellingPrice"
            type="number"
            onDispatch={dispatchSellingprice}
            stateValue={sellingPriceState.value}
          />
        </div>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <InputComponent
            id="productName"
            type="text"
            onDispatch={dispatchProductName}
            stateValue={productNameState.value}
          />
        </div>
        <button type="submit">Add Product </button>
      </form>
    </div>
  );
};

export default Form;
