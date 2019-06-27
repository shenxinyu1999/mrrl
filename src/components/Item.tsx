import React from "react";

import { itemsById } from "../data/vendor";

import "./Item.css";

interface Props {
  itemId: number;
  onClick?: (event: any) => void;
}

const Item: React.FC<Props> = ({ itemId, onClick }) => {
  return (
    <div className={`item item--${itemsById[itemId].rarity}`} onClick={onClick}>
      <img
        className="item__image"
        src={process.env.PUBLIC_URL + "/items/" + itemId + ".jpg"}
        alt={itemsById[itemId].name}
      />
      <span className="item__name">{itemsById[itemId].name}</span>
    </div>
  );
};

export default Item;
