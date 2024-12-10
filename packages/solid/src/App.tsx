import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import rootAxisLogo from "/root-axis.svg";
import "./App.css";
import "@root-axis/design-system";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div class="header">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
        <a href="https://design-system.rodrigoantunes.dev" target="_blank">
          <img src={rootAxisLogo} class="logo root-axis" alt="Root Axis logo" />
        </a>
        <h1>Vite + Solid</h1>
      </div>
      <div class="card">
        <ra-button dark onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </ra-button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div class="accordions">
        <ra-accordion dark>
          <span slot="summary">Is it accessible?</span>
          Yes.
        </ra-accordion>
        <ra-accordion dark>
          <span slot="summary">Is it styled?</span>
          Yes. It comes with default styles that matches the other components
          aesthetic.
        </ra-accordion>
        <ra-accordion dark>
          <span slot="summary">Is it animated?</span>
          Yes. It&lsquo;s animated by default
        </ra-accordion>
      </div>
    </>
  );
}

export default App;
