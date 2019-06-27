import React from "react";

import { mrrl } from "../data/vendor";
import Item from "./Item";

import "./Suggestions.css";

interface Props {
  onItemSelected: (itemId: number) => void;
  includeSecretShop: boolean;
}

const Suggestions: React.FC<Props> = ({
  includeSecretShop,
  onItemSelected
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
            <div className="col-4">
              <Item
                itemId={inv.itemId}
                onClick={() => onItemSelected(inv.itemId)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Suggestions;
