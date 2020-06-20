import LocalizedStrings from 'localized-strings';
 
export function setLanguage(locale: string) {
    strings.setLanguage(locale);
}  

export const strings = new LocalizedStrings({
  en:{
    BloodStone:"Pulsating Blood Stone",
    Bracelet:"Grimy Manapearl Bracelet",
    Bundle:"Curiously Warm Kelp Bundle",
    Butter:"Just Regular Butter",
    Coral:"Strange Coral Cluster",
    Crab:"Unusually Wise Hermit Crab",
    Crate: "Pilfered Armor Crate",
    Eyeball:"Slimy Naga Eyeball",
    Finger:"Cultist Pinky Finger",
    Fish:"Flatulent Fish",
    FishFace:"Jar of Fish Faces",
    FootDust:"Sea Giant Foot Dust",
    GhostFood:"Ghost Food",
    Gloop:"Smelly Pile of Gloop",
    Horn:"Curious Murloc Horn",
    Idol:"Overwhelmingly-Alluring Idol",
    Lockbox:"Severely Rusted Lockbox",
    Lunch:"Healthy Murloc Lunch",
    Mass:"Unidentified Mass",
    PearlIdol:"Unspeakable Pearl Idol",
    Rock:"Particularly Dense Rock",
    Sculpture:"Disintegrating Sand Sculpture",
    SeaStones:"Faintly Humming Sea Stones",
    Snail:"Extra-Slimy Snail",
    Sock:"Dirty Murloc Sock",
    Stone:"Beckoner's Rosetta Stone",
    Taco:"Hungry Herald's Tentacle Taco",
    Tidestallion:"Crimson Tidestallion",
    ToolBox:"Waterlogged Toolbox",
    Vegetable:"Sweet Sea Vegetable",
    WhoKnowWhat:"Bag of Who-Knows-What",
    Vendor:{
      Hurlgrl:"Hurlgrl",
      Flrgrrl:"Flrgrrl",
      Grrmrlg:"Grrmrlg",
      Mrrglrlr:"Mrrglrlr",
      Mrrl:"Mrrl",
      Murloco:"Murloco"
    },
    Result:{
      Results:"Results",
      Steps:"Steps",
      Cost:"Cost",
      Gold:"Gold"
    }
  },
  zh: {
    BloodStone:"脉动的血石",
    Bracelet:"污秽的法力珍珠手镯",
    Bundle:"一捆异常暖和的海藻",
    Butter:"非常普通的黄油",
    Coral:"奇特的珊瑚丛",
    Crab:"极其聪明的寄居蟹",
    Crate: "被盗的护甲箱",
    Eyeball:"粘滑的纳迦眼球",
    Finger:"邪教徒的小指环",
    Fish:"胀气鱼",
    FishFace:"一罐鱼脸",
    FootDust:"海巨人的脚灰",
    GhostFood:"幽魂的食物",
    Gloop:"一堆臭糊",
    Horn:"奇特的鱼人之角",
    Idol:"魅力难挡的人偶",
    Lockbox:"严重生锈的保险箱",
    Lunch:"养生鱼人午餐",
    Mass:"未鉴定的物质",
    PearlIdol:"不可名状的珍珠人偶",
    Rock:"超沉的石头",
    Sculpture:"正在崩解的沙雕",
    SeaStones:"微微嗡鸣的海石",
    Snail:"超粘的蜗牛",
    Sock:"脏兮兮的鱼人袜子",
    Stone:"唤引者的罗塞塔石碑",
    Taco:"饥饿传令官的触须塔可饼",
    Tidestallion:"赤红浪骁",
    ToolBox:"浸水的工具箱",
    Vegetable:"甜美的海菜",
    WhoKnowWhat:"一袋不可名状之物",
    Vendor:{
      Hurlgrl:"胡勒格勒",
      Flrgrrl:"弗勒格勒",
      Grrmrlg:"格姆勒格",
      Mrrglrlr:"穆勒格勒勒",
      Mrrl:"穆勒尔",
      Murloco:"莫洛戈"
    },
    Result:{
      Results:"计算结果",
      Steps:"步骤",
      Cost:"花费",
      Gold:"金"
    }
  }}
);