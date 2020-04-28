import React from "react";

const AddComp = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px ",
      }}
    >
      <button onClick={props.handelAdd} style={{ height: 50 }}>
        Add Todo
      </button>
    </div>
  );
};

export default AddComp;