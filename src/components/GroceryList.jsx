import React from "react";

const GroceryList = ({ title, id, status, handleDelete }) => {
  return (
    <div>
      <h3>{title}</h3>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default GroceryList;
