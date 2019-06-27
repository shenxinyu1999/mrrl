import {
  KnownItemIds,
  CostType,
  Item,
  Vendor,
  getVendorOfItem,
  getItem
} from "./data";
import { flrgrrl } from "./data/vendor";

interface Materials {
  items: { itemId: number; quantity: number }[];
  gold: number;
}

interface Inventory {
  [itemId: number]: number;
}

export interface RouteStep {
  vendor: Vendor;
  items: { itemId: number; quantity: number }[];
  quantity?: number;
  other?: string;
}

export function findRoute(materials: Materials): RouteStep[] {
  if (materials.items.length === 0) {
    return [];
  }

  let result: RouteStep[] = [];

  materials = JSON.parse(JSON.stringify(materials));
  let inventory: Inventory = {};
  // Start with Unidentified Mass for now. Simple way to make sure we have dirty socks to clean when go see the Murloc in the water.
  const unidentifiedMass = materials.items.find(
    item => item.itemId === KnownItemIds.UnidentifiedMass
  );

  if (unidentifiedMass != null) {
    materials.items = [
      unidentifiedMass,
      ...materials.items.filter(i => i !== unidentifiedMass)
    ];
  }

  const buyItem = (item: Item, quantity: number) => {
    let existingQuantity = inventory[item.itemId];
    if (existingQuantity != null) {
      inventory[item.itemId] = existingQuantity + quantity;
    } else {
      inventory[item.itemId] = quantity;
    }

    // Remove mats from inventory
    if (item.cost.type === CostType.Items) {
      for (let i = 0; i < item.cost.items.length; i++) {
        let costItem = item.cost.items[i];
        let existingMatQuantiy = inventory[costItem.itemId];
        if (existingMatQuantiy != null) {
          if (existingMatQuantiy < quantity * costItem.quantity) {
            throw new Error("Not enough mats!");
          } else {
            inventory[costItem.itemId] =
              existingMatQuantiy - quantity * costItem.quantity;
          }
        } else {
          throw new Error("Buying something we don't have the math for!");
        }
      }
    }
  };

  let stepCount = 0;
  let lastVendor: Vendor | undefined = undefined;
  while (materials.items.length > 0) {
    let indexToBuy = materials.items.findIndex(
      item =>
        getVendorOfItem(item.itemId) === lastVendor &&
        hasCostRequirements(inventory, item.itemId, item.quantity)
    );
    if (indexToBuy < 0) {
      indexToBuy = materials.items.findIndex(item =>
        hasCostRequirements(inventory, item.itemId, item.quantity)
      );
      if (indexToBuy < 0) {
        throw new Error("Couldn't find a next item to buy??.");
      }
    }

    let nextToBuy = materials.items[indexToBuy];
    let nextToBuyItem = getItem(nextToBuy.itemId);

    let vendor = getVendorOfItem(nextToBuy.itemId);

    //console.log(`Want to buy ${nextToBuy.quantity}x${nextToBuy.itemId}`);
    //console.log(`It is sold by: ${vendor.name}`);

    buyItem(nextToBuyItem, nextToBuy.quantity);

    result.push({
      vendor: vendor,
      items: [{ itemId: nextToBuy.itemId, quantity: nextToBuy.quantity }]
    });

    lastVendor = vendor;

    // if (nextToBuy.itemId === KnownItemIds.DirtyMurlocSock) {
    //   result.push({
    //     other: "Clean the dirty socks."
    //   });
    // }

    materials.items.splice(indexToBuy, 1);

    stepCount++;

    if (stepCount > 50) {
      throw new Error("Couldn't find a route.");
    }
  }

  addCleanSockStep(result);
  mergeSteps(result);
  return result;
}

function mergeSteps(route: RouteStep[]) {
  if (route.length <= 1) {
    return;
  }

  for (let i = 0; i < route.length - 1; i++) {
    let step = route[i];
    let nextStep = route[i + 1];

    let stepCount = 0;

    while (true) {
      if (step.vendor === nextStep.vendor) {
        step.items = step.items.concat(nextStep.items);
        if (nextStep.other != null) {
          step.other = nextStep.other;
        }

        route.splice(i + 1, 1);

        if (i + 1 < route.length) {
          nextStep = route[i + 1];
        } else {
          break;
        }
      } else {
        break;
      }

      stepCount++;

      if (stepCount > 50) {
        throw new Error("Could not merge steps");
      }
    }
  }
}

function addCleanSockStep(route: RouteStep[]) {
  let hasDirtySocks = false;

  for (let i = 0; i < route.length; i++) {
    let step = route[i];

    if (step.items != null) {
      if (step.items.find(i => i.itemId === KnownItemIds.DirtyMurlocSock)) {
        hasDirtySocks = true;
      }

      // If we have dirt socks and at Flrgrrl, clean them.
      if (hasDirtySocks && step.vendor.name === "Flrgrrl") {
        route.splice(i, 0, {
          vendor: flrgrrl,
          items: [],
          other: "Clean the dirty socks."
        });
        hasDirtySocks = false;
        break;
      }

      // If we have dirty socks and we need clean socks to buy the next item, must clean them.
      if (
        hasDirtySocks &&
        step.items.find(i => {
          let item = getItem(i.itemId);
          if (item.cost.type === CostType.Items) {
            return (
              item.cost.items.findIndex(
                ci => ci.itemId === KnownItemIds.DirtyMurlocSock
              ) >= 0
            );
          }

          return false;
        })
      ) {
        route.splice(i, 0, {
          vendor: flrgrrl,
          items: [],
          other: "Clean the dirty socks."
        });

        hasDirtySocks = false;
        break;
      }
    }
  }
}

function hasCostRequirements(
  inventory: Inventory,
  itemId: number,
  quantity: number
) {
  let item = getItem(itemId);

  if (item.cost.type === CostType.Gold) {
    return true; // Always have the gold!
  } else if (item.cost.type === CostType.Items) {
    // Can probably change this to something that has early return but whatever
    return item.cost.items.reduce((acc, val) => {
      let quantityInventory = inventory[val.itemId];
      let isInInventory =
        quantityInventory != null &&
        quantityInventory >= quantity * val.quantity;

      return acc && isInInventory;
    }, true);
  }

  return false;
}
