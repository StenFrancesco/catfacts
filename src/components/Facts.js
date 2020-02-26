import React, { useState, useEffect } from "react";
import axios from "axios";
import FactCard from "./FactCard";

export default function Facts() {
  const [src, setSrc] = useState("");
  async function getFact() {
    const response = await axios.get("https://cat-fact.herokuapp.com/facts");
    setSrc(response.data.all);
  }
  useEffect(() => {
    getFact();
  }, []);
  return (
    <div>
      {src.map(src => (
        <FactCard text={src.title} />
      ))}
    </div>
  );
}