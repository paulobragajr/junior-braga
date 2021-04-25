import React from "react";
import "./ItemCell.css";

function ItemCell({ description }) {
  return <li className="li-custom">{description}</li>;
}

export default ItemCell;
