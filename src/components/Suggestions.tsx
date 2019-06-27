import React from "react";

import { mrrl } from "../data/vendor";
import Item from "./Item";

import "./Suggestions.css";

interface Props {
  onItemSelected: (itemId: number, shiftPressed: boolean) => void;
  includeSecretShop: boolean;
  selectedItems: { [itemId: number]: any };
}

const Suggestions: React.FC<Props> = ({
  includeSecretShop,
  onItemSelected,
  selectedItems
}) => {
  return (
    <div className="suggestions__container">
      <h2>
        Select an item you want to buy here, or populate the materials manually.
      </h2>
      <div className="suggestions__filter">
        Filter: <input type="text" />
      </div>

      <div className="suggestions__results">
        {mrrl.inventory
          .filter(inv => !inv.secret || includeSecretShop)
          .map(inv => (
            <div
              className={
                "col-4 suggestions__item " +
                (selectedItems[inv.itemId] ? "suggestions__item--selected" : "")
              }
            >
              <Item
                itemId={inv.itemId}
                onClick={event => onItemSelected(inv.itemId, !!event.shiftKey)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Suggestions;
