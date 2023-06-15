import { NotFound } from "./handlers/clientErrors";
import React from "react";

// EXAMPLE PAGE //

function App() {
  return (
    <>
      <NotFound customText='This is a 404 error!' />
    </>
  );
}
export default App;
