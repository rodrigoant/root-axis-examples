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
        <ra-button dark onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </ra-button>

        

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ra-accordion dark>
        <span slot="summary">Is it accessible?</span>
        Yes. 
      </ra-accordion>
      <ra-accordion dark>
        <span slot="summary">Is it styled?</span>
        Yes. It comes with default styles that matches the other components aesthetic.
      </ra-accordion>
      <ra-accordion dark>
        <span slot="summary">Is it animated?</span>
        Yes. It&lsquo;s animated by default
      </ra-accordion>


    </>
  );
}

export default App;
