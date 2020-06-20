export enum Rarity {
  Normal = 1,
  Uncommon = 2,
  Rare = 3,
  Epic = 4
}

export enum CostType {
  Items,
  Gold
}

export interface GoldCost {
  type: CostType.Gold;
  quantity: number;
}

export interface ItemsCost {
  type: CostType.Items;
  items: {
    quantity: number;
    itemId: number;
  }[];
}

export interface Item {
  itemId: number;
  name: string;
  rarity: Rarity;
  cost: GoldCost | ItemsCost;
  mrrl?: boolean;
  secret?: boolean;
}

export interface Vendor {
  name: string;
  instruction: string;
  url: string;
  inventory: number[];
}

export interface WantedItem {
  itemId: number;
  quantity: number;
}
export interface Materials {
  items: { itemId: number; quantity: number }[];
  gold: number;
}
