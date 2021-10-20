import React from 'react'
import {useState} from "react"

function Dropdown() {
    const [select, setSelect] = useState("berlin")
    return (
      <div>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="Berlin">Berlin</option>
          <option value="London">London</option>
          <option value="New York">NewYork</option>
        </select>
      </div>
    );
}

export default Dropdown
