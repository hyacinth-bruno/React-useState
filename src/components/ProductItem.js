import React from "react";

export default function ProductItem({ name, price, image }) {
  return (
    <div class="product">
      <div>Name: {name}</div>
      <div>Price: {price}</div>
      <img src={image} width="60px" alt={name}/>
    </div>
  );
}
