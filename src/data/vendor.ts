import { KnownItemIds } from "./item";

export interface Vendor {
  name: string;
  instruction?: string;
  url?: string;
  inventory: number[];
}

export let hurlgrl: Vendor = {
  name: "Hurlgrl",
  inventory: [
    KnownItemIds.SweetSeaVegetable,
    KnownItemIds.JarOfFishFaces,
    KnownItemIds.DirtyMurlocSock,
    KnownItemIds.HealthyMurlocLunch,
    KnownItemIds.CultistPinkyFinger
  ]
};

export let flrgrrl: Vendor = {
  name: "Flrgrrl",
  inventory: [
    KnownItemIds.UnidentifiedMass,
    KnownItemIds.JustRegularButter,
    KnownItemIds.BagOfWhoKnowsWhat,
    KnownItemIds.GhostFood,
    KnownItemIds.BeckonersRosettaStone
  ]
};

export let grrmrlg: Vendor = {
  name: "Grrmrlg",
  inventory: [
    KnownItemIds.FlatulentFish,
    KnownItemIds.CuriousMurlocHorn,
    KnownItemIds.ExtraSlimySnail,
    KnownItemIds.SeaGiantFootDust,
    KnownItemIds.OverwhelminglyAlluringIdol
  ]
};

export let mrrglrlr: Vendor = {
  name: "Mrrglrlr",
  inventory: [
    KnownItemIds.SlimyNagaEyeball,
    KnownItemIds.DisintegratingSandSculpture,
    KnownItemIds.ParticularlyDenseRock,
    KnownItemIds.SmellyPileOfGloop,
    KnownItemIds.PulsatingBloodStone
  ]
};

export let mrrl: Vendor = {
  name: "Mrrl",
  inventory: [
    KnownItemIds.UnusuallyWiseHermitCrab,
    KnownItemIds.CrimsonTidestallion,
    KnownItemIds.CuriouslyWarmKelpBundle,
    KnownItemIds.GrimyManapearlBracelet,
    KnownItemIds.PilferedArmorCrate
  ]
};

let murloco: Vendor = {
  name: "Murloco",
  instruction:
    "Found at 46.22 32.57 in Nazjatar. Kill the 2 Naga guards to release Murloco. He is not always there. Click on the map for more info.",
  url:
    "https://www.wowhead.com/guides/mrrls-trading-game-obtaining-crimson-tidestallion#acquiring-the-hungry-heralds-tentacle-taco",
  inventory: [KnownItemIds.HungryHeraldsTentacleTaco]
};

let vendors: Vendor[] = [hurlgrl, grrmrlg, mrrglrlr, flrgrrl, mrrl, murloco];

export default vendors;
