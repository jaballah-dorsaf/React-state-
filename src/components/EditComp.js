import React from "react";

const EditComp = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <input
        style={{ width: 350, height: 20, marginRight: 10, textAlign: "center" }}
        type="text"
        placeholder="Edit Value"
        value={props.newTodo.name}
        onChange={(e) =>
          props.setNewTodo({ ...props.newTodo, name: e.target.value })
        }
      />
      <button
        onClick={() => props.handleEdit()}
        type="submit"
        style={{ height: 25 }}
      >
        Edit Todo
      </button>
    </div>
  );
};

export default EditComp;