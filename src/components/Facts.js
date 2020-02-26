import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Facts() {
  const [src, setSrc] = useState("");

  async function getFact() {
    const response = await axios.get("https://cat-fact.herokuapp.com/facts");

    setSrc(response.data.all[0].text);
  }

  useEffect(() => {
    getFact;
  }, []);

  return <p>{src}</p>;
}
