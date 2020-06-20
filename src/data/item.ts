import { Item, Rarity, CostType } from "./models";
import { strings } from "./localization";

export enum KnownItemIds {
  // Grrmlrg
  FlatulentFish = 167906,
  CuriousMurlocHorn = 167905,
  ExtraSlimySnail = 167907,
  SeaGiantFootDust = 167908,
  OverwhelminglyAlluringIdol = 169781,

  // Hurlgrl
  HealthyMurlocLunch = 167913,
  JarOfFishFaces = 167914,
  SweetSeaVegetable = 167915,
  DirtyMurlocSock = 167916,
  CultistPinkyFinger = 169783,

  // Flrgrrl
  GhostFood = 167909,
  BagOfWhoKnowsWhat = 167910,
  JustRegularButter = 167911,
  UnidentifiedMass = 167912,
  BeckonersRosettaStone = 169782,

  // Mrrglrlr
  SlimyNagaEyeball = 167896,
  ParticularlyDenseRock = 167902,
  DisintegratingSandSculpture = 167903,
  SmellyPileOfGloop = 167904,
  PulsatingBloodStone = 169780,

  // Mrrl
  CuriouslyWarmKelpBundle = 168092,
  GrimyManapearlBracelet = 168093,
  PilferedArmorCrate = 168097,
  UnusuallyWiseHermitCrab = 168053,
  CrimsonTidestallion = 169202,
  UnspeakablePearlIdol = 170158,
  FaintlyHummingSeaStones = 168094,
  WaterloggedToolbox = 168096,
  SeverelyRustedLockbox = 168091,
  StrangeCoralCluster = 168095,

  // Murloco
  HungryHeraldsTentacleTaco = 170100
}

let items: Item[] = 
[
  {
    name: "Mass",
    itemId: KnownItemIds.UnidentifiedMass,
    rarity: Rarity.Normal,
    cost: { type: CostType.Gold, quantity: 1 }
  },
  {
    name: "Butter",
    itemId: KnownItemIds.JustRegularButter,
    rarity: Rarity.Uncommon,
    cost: {
      type: CostType.Items,
      items: [{ itemId: KnownItemIds.SweetSeaVegetable, quantity: 4 }]
    }
  },
  {
    name: "WhoKnowWhat",
    itemId: KnownItemIds.BagOfWhoKnowsWhat,
    rarity: Rarity.Uncommon,
    cost: {
      type: CostType.Items,
      items: [{ itemId: KnownItemIds.FlatulentFish, quantity: 2 }]
    }
  },
  {
    name: "GhostFood",
    itemId: KnownItemIds.GhostFood,
    rarity: Rarity.Rare,
    cost: {
      type: CostType.Items,
      items: [{ itemId: KnownItemIds.CuriousMurlocHorn, quantity: 6 }]
    }
  },
  {
    name: "Stone",
    itemId: KnownItemIds.BeckonersRosettaStone,
    rarity: Rarity.Epic,
    secret: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.SmellyPileOfGloop, quantity: 2 },
        { itemId: KnownItemIds.ParticularlyDenseRock, quantity: 9 }
      ]
    }
  },
  {
    name: "Vegetable",
    itemId: KnownItemIds.SweetSeaVegetable,
    rarity: Rarity.Normal,
    cost: { type: CostType.Gold, quantity: 1 }
  },
  {
    name: "FishFace",
    itemId: KnownItemIds.JarOfFishFaces,
    rarity: Rarity.Uncommon,
    cost: {
      type: CostType.Items,
      items: [{ itemId: KnownItemIds.FlatulentFish, quantity: 5 }]
    }
  },
  {
    name: "Sock",
    itemId: KnownItemIds.DirtyMurlocSock,
    rarity: Rarity.Uncommon,
    cost: {
      type: CostType.Items,
      items: [{ itemId: KnownItemIds.UnidentifiedMass, quantity: 6 }]
    }
  },
  {
    name: "Lunch",
    itemId: KnownItemIds.HealthyMurlocLunch,
    rarity: Rarity.Rare,
    cost: {
      type: CostType.Items,
      items: [{ itemId: KnownItemIds.CuriousMurlocHorn, quantity: 5 }]
    }
  },
  {
    name: "Finger",
    itemId: KnownItemIds.CultistPinkyFinger,
    rarity: Rarity.Epic,
    secret: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.SmellyPileOfGloop, quantity: 4 },
        { itemId: KnownItemIds.GhostFood, quantity: 7 }
      ]
    }
  },
  {
    name: "Fish",
    itemId: KnownItemIds.FlatulentFish,
    rarity: Rarity.Normal,
    cost: { type: CostType.Gold, quantity: 1 }
  },
  {
    name: "Horn",
    itemId: KnownItemIds.CuriousMurlocHorn,
    rarity: Rarity.Uncommon,
    cost: {
      type: CostType.Items,
      items: [{ itemId: KnownItemIds.SlimyNagaEyeball, quantity: 3 }]
    }
  },
  {
    name: "Snail",
    itemId: KnownItemIds.ExtraSlimySnail,
    rarity: Rarity.Rare,
    cost: {
      type: CostType.Items,
      items: [{ itemId: KnownItemIds.DisintegratingSandSculpture, quantity: 5 }]
    }
  },
  {
    name: "FootDust",
    itemId: KnownItemIds.SeaGiantFootDust,
    rarity: Rarity.Rare,
    cost: {
      type: CostType.Items,
      items: [
        {
          itemId: KnownItemIds.DirtyMurlocSock, // It needs clean socks, but for simplicity let's use dirty..
          quantity: 3
        }
      ]
    }
  },
  {
    name: "Idol",
    itemId: KnownItemIds.OverwhelminglyAlluringIdol,
    rarity: Rarity.Epic,
    secret: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.HealthyMurlocLunch, quantity: 8 },
        { itemId: KnownItemIds.GhostFood, quantity: 4 }
      ]
    }
  },
  {
    name: "Eyeball",
    itemId: KnownItemIds.SlimyNagaEyeball,
    rarity: Rarity.Normal,
    cost: { type: CostType.Gold, quantity: 1 }
  },

  {
    name: "Sculpture",
    itemId: KnownItemIds.DisintegratingSandSculpture,
    rarity: Rarity.Uncommon,
    cost: {
      type: CostType.Items,
      items: [
        {
          itemId: KnownItemIds.SweetSeaVegetable,
          quantity: 4
        }
      ]
    }
  },
  {
    name: "Rock",
    itemId: KnownItemIds.ParticularlyDenseRock,
    rarity: Rarity.Rare,
    cost: {
      type: CostType.Items,
      items: [
        {
          itemId: KnownItemIds.BagOfWhoKnowsWhat,
          quantity: 3
        },
        {
          itemId: KnownItemIds.JarOfFishFaces,
          quantity: 3
        }
      ]
    }
  },
  {
    name: "Gloop",
    itemId: KnownItemIds.SmellyPileOfGloop,
    rarity: Rarity.Rare,
    cost: {
      type: CostType.Items,
      items: [{ itemId: KnownItemIds.JustRegularButter, quantity: 2 }]
    }
  },
  {
    name: "BloodStone",
    itemId: KnownItemIds.PulsatingBloodStone,
    rarity: Rarity.Epic,
    secret: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.SeaGiantFootDust, quantity: 8 },
        { itemId: KnownItemIds.HealthyMurlocLunch, quantity: 7 }
      ]
    }
  },
  {
    name: "Crab",
    itemId: KnownItemIds.UnusuallyWiseHermitCrab,
    rarity: Rarity.Epic,
    mrrl: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.GhostFood, quantity: 4 },
        { itemId: KnownItemIds.HealthyMurlocLunch, quantity: 3 },
        { itemId: KnownItemIds.SeaGiantFootDust, quantity: 3 }
      ]
    }
  },
  {
    name: "Tidestallion",
    itemId: KnownItemIds.CrimsonTidestallion,
    rarity: Rarity.Epic,
    mrrl: true,
    secret: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.CultistPinkyFinger, quantity: 4 },
        { itemId: KnownItemIds.PulsatingBloodStone, quantity: 2 },
        { itemId: KnownItemIds.HungryHeraldsTentacleTaco, quantity: 1 }
      ]
    }
  },
  {
    name: "Bundle",
    itemId: KnownItemIds.CuriouslyWarmKelpBundle,
    rarity: Rarity.Epic,
    mrrl: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.ParticularlyDenseRock, quantity: 2 },
        { itemId: KnownItemIds.GhostFood, quantity: 4 },
        { itemId: KnownItemIds.HealthyMurlocLunch, quantity: 5 }
      ]
    }
  },
  {
    name: "Bracelet",
    itemId: KnownItemIds.GrimyManapearlBracelet,
    rarity: Rarity.Epic,
    mrrl: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.SmellyPileOfGloop, quantity: 3 },
        { itemId: KnownItemIds.GhostFood, quantity: 1 },
        { itemId: KnownItemIds.SeaGiantFootDust, quantity: 3 }
      ]
    }
  },
  {
    name: "Crate",
    itemId: KnownItemIds.PilferedArmorCrate,
    rarity: Rarity.Epic,
    mrrl: true,
    secret: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.BeckonersRosettaStone, quantity: 2 },
        { itemId: KnownItemIds.HungryHeraldsTentacleTaco, quantity: 1 },
        { itemId: KnownItemIds.CultistPinkyFinger, quantity: 2 }
      ]
    }
  },
  {
    name: "Taco",
    itemId: KnownItemIds.HungryHeraldsTentacleTaco,
    rarity: Rarity.Epic,
    secret: true,
    cost: {
      type: CostType.Gold,
      quantity: 666
    }
  },
  {
    name: "PearlIdol",
    itemId: KnownItemIds.UnspeakablePearlIdol,
    rarity: Rarity.Epic,
    mrrl: true,
    secret: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.OverwhelminglyAlluringIdol, quantity: 4 },
        { itemId: KnownItemIds.CultistPinkyFinger, quantity: 2 },
        { itemId: KnownItemIds.HungryHeraldsTentacleTaco, quantity: 1 }
      ]
    }
  },
  {
    name: "SeaStones",
    itemId: KnownItemIds.FaintlyHummingSeaStones,
    rarity: Rarity.Epic,
    mrrl: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.GhostFood, quantity: 5 },
        { itemId: KnownItemIds.ParticularlyDenseRock, quantity: 1 },
        { itemId: KnownItemIds.SeaGiantFootDust, quantity: 2 }
      ]
    }
  },
  {
    name: "ToolBox",
    itemId: KnownItemIds.WaterloggedToolbox,
    rarity: Rarity.Epic,
    mrrl: true,
    secret: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.BeckonersRosettaStone, quantity: 1 },
        { itemId: KnownItemIds.PulsatingBloodStone, quantity: 1 },
        { itemId: KnownItemIds.OverwhelminglyAlluringIdol, quantity: 1 }
      ]
    }
  },
  {
    name: "Lockbox",
    itemId: KnownItemIds.SeverelyRustedLockbox,
    rarity: Rarity.Epic,
    mrrl: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.SeaGiantFootDust, quantity: 2 },
        { itemId: KnownItemIds.SmellyPileOfGloop, quantity: 3 },
        { itemId: KnownItemIds.ExtraSlimySnail, quantity: 2 }
      ]
    }
  },
  {
    name: "Coral",
    itemId: KnownItemIds.StrangeCoralCluster,
    rarity: Rarity.Epic,
    mrrl: true,
    cost: {
      type: CostType.Items,
      items: [
        { itemId: KnownItemIds.SmellyPileOfGloop, quantity: 5 },
        { itemId: KnownItemIds.SeaGiantFootDust, quantity: 1 },
        { itemId: KnownItemIds.HealthyMurlocLunch, quantity: 3 }
      ]
    }
  }
];

export default items