import React from "react";
import { useState } from "react";

function Multicheck() {
  const [checkboxes, setCheckboxes] = useState({
    box1: false,
    box2: false,
    box3: false,
  });

  const handleInput = (e) => {
    setCheckboxes({...checkboxes, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <input
        type="checkbox"
        name="box1"
        checked={checkboxes.box1}
        onChange={handleInput}
      />
      <input
        type="checkbox"
        name="box2"
        checked={checkboxes.box2}
        onChange={handleInput}
      />
      <input
        type="checkbox"
        name="box3"
        checked={checkboxes.box3}
        onChange={handleInput}
      />
    </div>
  );
}

export default Multicheck;
