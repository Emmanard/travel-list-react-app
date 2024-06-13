import React from "react";
import { useState } from "react";

function Stats({items}) {
    if(!items.length)
      return(
    <footer className="stats"><em>
      <p>Start adding items now 🚀</p>
      </em>
      </footer>
      )
    const numItem = items.length 
    const numpacked = items.filter((item)=>item.packed).length
    const percent = Math.round((numpacked/numItem)* 100);
    return (
      <footer className="stats">
  
        <em>{percent===100? "You are Packed and ready to go👍✈" :
         ` 💼 You have ${numItem} items on your list ,
           you have already packed ${numpacked}(${percent}%)`
           }</em>
      </footer>
    );
  }
  export default Stats