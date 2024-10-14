import React, { useState } from "react";
import Preload from "./Preload";

export default function Start() {
  const [state, update] = useState(false);
  console.log("start has", state);
  return (
    <>
      <Preload state={state} update={update} />
    </>
  );
}
