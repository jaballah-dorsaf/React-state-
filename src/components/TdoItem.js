import React from "react";

const TdoItem = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "black",
        fontSize: 20,
        letterSpacing: 3,
        padding: "0px 70px 10px 70px",
        marginBottom: 8,
        backgroundColor: "white",
      }}
    >
      {props.el}
      <div style={{ display: "flex" }}>
        <button
          style={{ width: 80, marginRight: 5, marginTop: 7 }}
          onClick={() => props.handleDelete(props.id)}
        >
          Delete
        </button>
        <button
          style={{ width: 80, marginTop: 7 }}
          onClick={() => props.handleClick(props.el, props.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TdoItem;