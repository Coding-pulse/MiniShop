import React from "react";
import { useParams } from "react-router-dom";

export default function Page1() {
  const { pg } = useParams();
  const style = {
    backgroundColor: "green",
    height: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    paddingTop: "22%",
    paddingLeft: "44%",
  };
  return <div style={style}>This is page {pg}</div>;
}
