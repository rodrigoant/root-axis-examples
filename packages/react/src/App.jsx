import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import rootAxisLogo from "/root-axis.svg";
import "@root-axis/design-system";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://design-system.rodrigoantunes.dev" target="_blank">
          <img src={rootAxisLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Root Axis</h1>
      <div className="card">
        <ra-button size="medium" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </ra-button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Root Axis logos to learn more
      </p>
    </>
  );
}

export default App;
