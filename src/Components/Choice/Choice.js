import React from "react";

const choice = (props) => {
  return (
    <div className="Choice">
      <input type="radio" value={props.value} onSelect={props.onChanged} />
      <label>{props.label}</label>
    </div>
  );
};

export default choice;
