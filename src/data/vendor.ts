import { KnownItemIds } from "./item";
import { strings } from "./localization";

export interface Vendor {
  name: string;
  instruction?: string;
  url?: string;
  inventory: number[];
}

export let hurlgrl: Vendor = {
  name: strings.Hurlgrl,
  inventory: [
    KnownItemIds.SweetSeaVegetable,
    KnownItemIds.JarOfFishFaces,
    KnownItemIds.DirtyMurlocSock,
    KnownItemIds.HealthyMurlocLunch,
    KnownItemIds.CultistPinkyFinger
  ]
};

export let flrgrrl: Vendor = {
  name: strings.Flrgrrl,
  inventory: [
    KnownItemIds.UnidentifiedMass,
    KnownItemIds.JustRegularButter,
    KnownItemIds.BagOfWhoKnowsWhat,
    KnownItemIds.GhostFood,
    KnownItemIds.BeckonersRosettaStone
  ]
};

export let grrmrlg: Vendor = {
  name: strings.Grrmrlg,
  inventory: [
    KnownItemIds.FlatulentFish,
    KnownItemIds.CuriousMurlocHorn,
    KnownItemIds.ExtraSlimySnail,
    KnownItemIds.SeaGiantFootDust,
    KnownItemIds.OverwhelminglyAlluringIdol
  ]
};

export let mrrglrlr: Vendor = {
  name: strings.Mrrglrlr,
  inventory: [
    KnownItemIds.SlimyNagaEyeball,
    KnownItemIds.DisintegratingSandSculpture,
    KnownItemIds.ParticularlyDenseRock,
    KnownItemIds.SmellyPileOfGloop,
    KnownItemIds.PulsatingBloodStone
  ]
};

export let mrrl: Vendor = {
  name: strings.Mrrl,
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
  name: strings.Murloco,
  instruction:
    "Found at 46.22 32.57 in Nazjatar. Kill the 2 Naga guards to release Murloco. He is not always there. Click on the map for more info.",
  url:
    "https://www.wowhead.com/guides/mrrls-trading-game-obtaining-crimson-tidestallion#acquiring-the-hungry-heralds-tentacle-taco",
  inventory: [KnownItemIds.HungryHeraldsTentacleTaco]
};

let vendors: Vendor[] = [hurlgrl, grrmrlg, mrrglrlr, flrgrrl, mrrl, murloco];

export default vendors;
