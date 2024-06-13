import "./App.css";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Packinglist from "./Packinglist";
import Stats from "./Stats";



function App() {
  const [items, setitems] = useState([]);

  function handlenewitem(item) {
    setitems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear (item) {
    const confirmed =window.confirm("Are You Sure You Want Delete All ITEMS")
    if(confirmed)setitems([]);
  }


  return (
    <div className="app">
      <Logo />
      <Form onnewItem={handlenewitem} />
      <Packinglist
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggle={handleToggle}
        onClear ={handleClear}
      />
      <Stats   items={items} />
    </div>
  );
}










export default App;
