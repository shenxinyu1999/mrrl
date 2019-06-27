import React, { ChangeEvent } from "react";

import { items, Rarity } from "../data/vendor";
import Item from "./Item";
import { WantedItem } from "../App";

import "./Want.css";

let offeredItems = items
  .filter(
    i => !i.mrrl && (i.rarity === Rarity.Rare || i.rarity === Rarity.Epic)
  )
  .sort((a, b) => {
    if (a.rarity === b.rarity) {
      return a.name.localeCompare(b.name);
    }

    // Inverted to get Epic as first (descending).
    return b.rarity - a.rarity;
  });

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
  let wantedItemMap = wantedItems.reduce((map: any, val) => {
    map[val.itemId] = val.quantity;
    return map;
  }, {});

  const onWantChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const itemId = +target.name;
    const quantity = +target.value;

    onQuantityChange(itemId, quantity);
  };

  const getValue = (itemId: number) => {
    let quantity = wantedItemMap[itemId];
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
