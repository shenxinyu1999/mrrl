import React, { ChangeEvent } from "react";

import Item from "./Item";

import "./Want.scss";
import { getMaterialsInput, WantedItem } from "../data";

let offeredItems = getMaterialsInput();

interface Props {
  wantedItems: WantedItem[];
  includeSecretShop: boolean;
  onQuantityChange: (itemId: number, quantity: number) => void;
}

const Want: React.FC<Props> = ({
  onQuantityChange,
  wantedItems,
  includeSecretShop
}) => {
  const onWantChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const itemId = +target.name;
    const quantity = +target.value;

    onQuantityChange(itemId, quantity);
  };

  const getValue = (itemId: number) => {
    let quantity = wantedItems.find(wi => wi.itemId === itemId);
    if (quantity == null) {
      return "";
    }

    return quantity.toString();
  };

  return (
    <div className="want__container">
      <h2>Materials</h2>
      <div className="want__items">
        {offeredItems
          .filter(item => !item.secret || includeSecretShop)
          .map(item => (
            <div
              key={item.itemId}
              className={`col-6 want__item want__item--${item.rarity}`}
            >
              <input
                type="number"
                className="want__input"
                name={item.itemId.toString()}
                onChange={onWantChange}
                value={getValue(item.itemId)}
              />
              <Item itemId={item.itemId} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Want;
