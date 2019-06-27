import React, { useState, ChangeEvent } from "react";
import "./App.css";
import "./simple-grid.css";

import { itemsById, CostType } from "./data/vendor";
import Want from "./components/Want";
import { findRoute, RouteStep } from "./utils";
import Suggestions from "./components/Suggestions";
import Result from "./components/Result";

export interface WantedItem {
  itemId: number;
  quantity: number;
}
interface State {
  wantedItems: WantedItem[];
  route: RouteStep[];
  requiredMats: Materials;
  includeSecretShop: boolean;
  selectedItems: { [itemId: number]: any };
}

export interface Materials {
  items: { itemId: number; quantity: number }[];
  gold: number;
}

const mergeMaterials = (toMergeInto: Materials, toMergeFrom: Materials) => {
  toMergeInto.gold = toMergeInto.gold + toMergeFrom.gold;

  toMergeFrom.items.forEach(item => {
    let foundItem = toMergeInto.items.find(i => i.itemId === item.itemId);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + item.quantity;
    } else {
      toMergeInto.items.push(item);
    }
  });
};

const App: React.FC = () => {
  const [state, setState] = useState<State>({
    wantedItems: [],
    route: [],
    requiredMats: { items: [], gold: 0 },
    includeSecretShop: true,
    selectedItems: {}
  });

  const onQuantityChange = (itemId: number, quantity: number) => {
    const newWantedItems = state.wantedItems.filter(wi => wi.itemId !== itemId);
    if (quantity > 0) {
      newWantedItems.push({ itemId, quantity });
    }

    calculateNewState(newWantedItems);
  };

  const calculateNewState = (wantedItems: WantedItem[]): void => {
    let requiredMats = calculateRequiredMats(wantedItems);
    let route = findRoute(requiredMats);

    setState(prevState => ({ ...prevState, wantedItems, route, requiredMats }));
  };

  const getCost = (itemId: number, quantity: number): Materials => {
    // Add ourselves.
    let result = { gold: 0, items: [{ itemId, quantity }] };

    const item = itemsById[itemId];

    if (item.cost.type === CostType.Gold) {
      mergeMaterials(result, {
        gold: quantity * item.cost.quantity,
        items: []
      });
    } else if (item.cost.type === CostType.Items) {
      for (let i = 0; i < item.cost.items.length; i++) {
        const innerItem = item.cost.items[i];
        const cost = getCost(innerItem.itemId, quantity * innerItem.quantity);

        mergeMaterials(result, cost);
      }
    }

    return result;
  };

  const calculateRequiredMats = (wantedItems: WantedItem[]) => {
    let combinedMats: Materials = { gold: 0, items: [] };

    wantedItems.forEach(item => {
      mergeMaterials(combinedMats, getCost(item.itemId, item.quantity));
    });

    return combinedMats;
  };

  const onItemSelected = (itemId: number, shiftDown: boolean) => {
    let newSelectedItems = { ...state.selectedItems };
    if (shiftDown) {
      newSelectedItems[itemId] = true;
      // Clear text selection.
      let selection = document.getSelection();
      if (selection != null) {
        selection.removeAllRanges();
      }
    } else {
      newSelectedItems = { [itemId]: true };
    }

    let wantedItems: WantedItem[] = [];

    for (let selectedItemId in newSelectedItems) {
      let item = itemsById[selectedItemId];

      if (item.cost.type === CostType.Items) {
        item.cost.items.forEach(({ itemId, quantity }) => {
          wantedItems.push({ itemId, quantity: quantity });
        });
      }
    }

    // Merge identical wanted items

    wantedItems = wantedItems.reduce((acc: any, val) => {
      let existingWantedItem = acc.find((wi: any) => wi.itemId === val.itemId);

      if (existingWantedItem != null) {
        existingWantedItem.quantity =
          existingWantedItem.quantity + val.quantity;
      } else {
        acc.push({ itemId: val.itemId, quantity: val.quantity });
      }

      return acc;
    }, []);

    setState(prevState => ({
      ...prevState,
      selectedItems: newSelectedItems
    }));

    calculateNewState(wantedItems);
  };

  const onSecretShopChangeChecked = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    setState(prevState => ({
      ...prevState,
      includeSecretShop: checked
    }));
  };

  return (
    <div className="App">
      <h1>Mrrl!</h1>
      <Suggestions
        onItemSelected={onItemSelected}
        includeSecretShop={state.includeSecretShop}
        selectedItems={state.selectedItems}
      />
      <Want
        onQuantityChange={onQuantityChange}
        wantedItems={state.wantedItems}
        includeSecretShop={state.includeSecretShop}
      />
      <label>
        <input
          type="checkbox"
          checked={state.includeSecretShop}
          onChange={onSecretShopChangeChecked}
        />
        Include secret shop (cloak required)
      </label>
      <Result route={state.route} requiredMats={state.requiredMats} />
    </div>
  );
};

export default App;
