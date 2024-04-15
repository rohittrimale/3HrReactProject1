import React from "react";

const DeleteButtton = ({ productId, productContext }) => {
  const onDeleteHandler = (productId) => {
    console.log(productId);
    productContext.onDelete(productId);
  };
  return (
    <button onClick={() => onDeleteHandler(productId)}>Delete Product </button>
  );
};

export default DeleteButtton;
