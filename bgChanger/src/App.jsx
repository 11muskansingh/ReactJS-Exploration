import { useState } from "react";
import "./App.css";
function App() {
  const [color, setColor] = useState("blue");

  return (
    <div
      className="w-full h-screen"
      style={{ backgroundColor: color, width: "auto", height: "100vh" }}
    >
      <h1 style={{ textAlign: "center", position: "relative", top: "3%" }}>
        BackGround Changer
      </h1>
      <div className="taskbar">
        <button
          className="btn button"
          onClick={() => setColor("red")}
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          className="btn button"
          onClick={() => setColor("green")}
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          className="btn button"
          onClick={() => setColor("black")}
          style={{ backgroundColor: "black", color: "white" }}
        >
          Black
        </button>
        <button
          className="btn button"
          onClick={() => setColor("yellow")}
          style={{ backgroundColor: "Yellow" }}
        >
          Yellow
        </button>
        <button
          className="btn button"
          onClick={() => setColor("pink")}
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          className="btn button"
          onClick={() => setColor("orange")}
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
