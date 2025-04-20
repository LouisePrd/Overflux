import React from "react";
import InputFromUser from "../components/InputFromUser";
import BoxMessage from "../components/BoxMessage";

export default function Home() {
  return (
    <div className="App">
      <h1>Overflux</h1>
      <InputFromUser />
      <BoxMessage />
    </div>
  );
}
