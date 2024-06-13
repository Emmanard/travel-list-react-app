import React from "react";
import { useState } from "react";
import Item from "./Item";

function Packinglist({ items, onDeleteItem, onToggle, onClear }) {
    const [Sortby, setSortby] = useState("input");
    let Sorteditem;
    if (Sortby === "input") Sorteditem = items;
    if (Sortby === "description")
      Sorteditem = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (Sortby === "packed")
      Sorteditem = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
      <div className="list">
        <ul>
          {Sorteditem.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggle={onToggle}
              key={item.id}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={Sortby} onChange={(e) => setSortby(e.target.value)}>
            <option value="input">Sort By Input</option>
            <option value="description">Sort By Description</option>
            <option value="packed">Sort By Packed Status</option>
          </select>
          <button onClick={onClear}>Clear List</button>
  
        </div>
      </div>
    );
  }
     export default Packinglist