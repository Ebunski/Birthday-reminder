import React from "react";
import Card from "./Card.js"

const List = (props) => {
  const celebrants = props.data.map((x) => {
    return <Card key={x.id} {...x} />;
  });
  return (
    <>
     
      {celebrants}
     
    </>
  );
};

export default List;
