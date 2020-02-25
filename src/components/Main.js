import React, { useState } from "react";
import Image from "./Image";
import Facts from "./Facts";
import Likecounter from "./Likecounter";
import Likebutton from "./Likebutton";
import Form from "./Form";

export default function Main() {
  return (
    <main>
      <Image />
      <Facts />
      <br />
      <Likebutton />
      <Likecounter />
      <br />
      <Form />
    </main>
  );
}
