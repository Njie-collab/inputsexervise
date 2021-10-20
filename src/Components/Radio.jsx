import React from 'react'
import {useState}from "react"

function Radio() {
    const [radio, setRadio]=useState("Berlin")
    return (
      <div>
        <label>Berlin</label>
        <input
          type="radio"
          checked={radio === "Berlin"}
          value="Berlin"
          onChange={(e) => setRadio(e.target.value)}
        />
        <label>London</label>
        <input
          type="radio"
          checked={radio === "London"}
          value="London"
          onChange={(e) => setRadio(e.target.value)}
        />
        <label>Madrid</label>
        <input
          type="radio"
          checked={radio === "Madrid"}
          value="Madrid"
          onChange={(e) => setRadio(e.target.value)}
        />
      </div>
    );
}

export default Radio
