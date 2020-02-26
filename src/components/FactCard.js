import React from "react";
import Image from "./Image"
import Likebutton from "./Likebutton"
import Likecounter from "./Likecounter"
import Form from "./Form"

export default function FactCard(props) {
  return (
    <div>
      <Image />
      <p>{props.text}</p>
      <br />
      <Likebutton />
      <Likecounter />
      <br />
      <Form />
    </div>
  );
}