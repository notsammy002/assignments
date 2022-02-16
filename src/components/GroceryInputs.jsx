import React from "react";

function GroceryInputs({ sendTitle }) {
  const [title, setTitle] = React.useState("");

  return (
    <div>
      <input
        placeholder="Add Something"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => (sendTitle(title), setTitle(""))}>ADD</button>
    </div>
  );
}

export default GroceryInputs;
