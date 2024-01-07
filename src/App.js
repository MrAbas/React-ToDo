import React from "react"; // Он нужен ?
import "./App.scss";
import ElementActive from "./Elements";
/* import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem/TodoItem"; */

function App() {
  /* const [count, setCount] = useState(1);

  useEffect(() => {
    //alert(count);
  }, [count]);

  const myClick = () => {
    setCount(count + 1);
  }; */
  return (
    /*   <div className={styles.App}>
      <h1 onClick={myClick}>Test {count}</h1>
      <TodoItem />
    </div> */
    <div className="container">
      <div className="header">
        <h1 className="title_header">TODO LIST</h1>
        <ElementActive />
      </div>
      <ToDo />
    </div>
  );
}

const ToDo = () => {
  return <div>Test</div>;
};

export default App;
