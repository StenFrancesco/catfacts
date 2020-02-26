import React from "react";
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