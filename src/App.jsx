import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      </div>
      <p className="read-the-docs">Click o</p>
    </>
  );
}

export default App;
