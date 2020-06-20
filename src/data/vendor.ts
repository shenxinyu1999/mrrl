import { KnownItemIds } from "./item";

export interface Vendor {
  name: string;
  instruction: string;
  url: string;
  inventory: number[];
}

export let hurlgrl: Vendor = {
  name: "Hurlgrl",
  instruction:"none",
  url:"none",
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
  instruction:"none",
  url:"none",
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
  instruction:"none",
  url:"none",
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
  instruction:"none",
  url:"none",
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
  instruction:"none",
  url:"none",
  inventory: [
    KnownItemIds.StrangeCoralCluster,
    KnownItemIds.UnspeakablePearlIdol,
    KnownItemIds.SeverelyRustedLockbox,
    KnownItemIds.PilferedArmorCrate,
    KnownItemIds.FaintlyHummingSeaStones,
    KnownItemIds.WaterloggedToolbox,
    KnownItemIds.UnusuallyWiseHermitCrab,
    KnownItemIds.CrimsonTidestallion,
    KnownItemIds.CuriouslyWarmKelpBundle,
    KnownItemIds.GrimyManapearlBracelet
  ]
};

let murloco: Vendor = {
  name: "Murloco",
  instruction:
    "MurlocoInst",
  url:
    "MurlocoURL",
  inventory: [KnownItemIds.HungryHeraldsTentacleTaco]
};

let vendors: Vendor[] = [hurlgrl, grrmrlg, mrrglrlr, flrgrrl, mrrl, murloco];

export default vendors;
