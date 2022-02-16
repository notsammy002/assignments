import React from "react";
import GroceryInputs from "./GroceryInputs";
import { v4 as uuid } from "uuid";
import GroceryList from "./GroceryList";

const Grocery = () => {
  const [data, setData] = React.useState([]);

  const handleAdd = (title) => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    setData([...data, payload]);
  };

  const handleDelete = (id) => {
    alert("Deleted");
    const newList = data.filter((item) => item.id !== id);

    setData(newList);
  };

  return (
    <div>
      <GroceryInputs sendTitle={handleAdd} />

      {data.map((item) => (
        <GroceryList handleDelete={handleDelete} key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Grocery;
