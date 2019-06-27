import React from "react";
import style from "./Suggestions.module.scss";
import { mrrl } from "../data/vendor";
import Item from "./Item";
import { getVendorItems } from "../data";

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
    <div>
      <h2>Items</h2>

      <div className={style.results}>
        {getVendorItems(mrrl)
          .filter(inv => !inv.secret || includeSecretShop)
          .map(inv => (
            <div
              key={inv.itemId}
              className={
                "col-4 " + (selectedItems[inv.itemId] ? style.selected : "")
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
