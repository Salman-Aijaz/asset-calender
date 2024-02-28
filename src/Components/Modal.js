import React from "react";

let a = new Date()
// console.log("Date of Modals",a)

let b = a.getHours()
// console.log("HOUR OF MODAL",b)

let c = a.getMinutes()
// console.log("MINUTES OF MODAL",c)

let d = a.getSeconds()
// console.log("SECONDS OF MODAL",d)
const events = [
  { id: 1, event: "Swap on Testnet", assets: "Azure (AZR)", EventType: "Tokenomics",EventTime:"5:00:00 AM" },
  { id: 2, event: "Skale Chain Payments", assets: "Skale(SKL)", EventType: "AMA",EventTime:"6:00:00 AM"  },
  { id: 3, event: "AMA", assets: "OKB (OKB)", EventType: "Staking" ,EventTime:"5:00:00 AM"},
  { id: 4, event: "AMA", assets: "MixMob(MXM)", EventType: "Farming",EventTime:"5:00:00 AM" },
  { id: 5, event: "Swap On TestNet", assets: "Bitso", EventType: "Release" ,EventTime:"5:00:00 AM" },
  { id: 6, event: "Epoch5", assets: "MB", EventType: "Exchange" ,EventTime:"5:00:00 AM" },
  {
    id: 7,
    event: "Praxis",
    assets: "FTX",
    EventType: "Team Update",
    EventTime:"7:00:00 AM"
  },
  {
    id: 8,
    event: "White Media",
    assets: "Bitget",
    EventType: "Working",
    EventTime:"8:00:00 AM"
  },
  {
    id: 9,
    event: "IBA",
    assets: "AWS (AWS)",
    EventType: "Review",
    EventTime:"9:00:00 AM" 
  },
  {
    id: 10,
    event: "PAF Kiet",
    assets: "Bit Panda",
    EventType: "Ethereum",
    EventTime:"7:00:00 AM" 
  },
  {
    id: 11,
    event: "Katalyst Labs",
    assets: "e Toro",
    EventType: "Tether",
    EventTime:"9:00:00 AM"
  },
  {
    id: 12,
    event: "NXT Labs",
    assets: "Uniswap",
    EventType: "Utility Token",
    EventTime:"10:00:00 AM" 
  },
  {
    id: 13,
    event: "K-Labs",
    assets: "OKX",
    EventType: "StableCoins",
    EventTime:"12:00:00 AM" 
  },
  {
    id: 14,
    event: "Tilsim Technology",
    assets: "Reftab",
    EventType: "Non-Fungible-Token",
    EventTime:"2:00:00 AM"
  },
  { id: 15, event: "Baazar Tech", assets: "KuCoin", EventType: "Fungible-Token"     ,EventTime:"3:00:00 AM"
},
  {
    id: 16,
    event: "AirLift",
    assets: "Revolut",
    EventType: "Digital Currency",
    EventTime:"7:00:00 AM"

  },
  {
    id: 17,
    event: "Catalyst IT",
    assets: "Software",
    EventType: "Privacy Coins",
    EventTime:"8:00:00 AM"

  },
  {
    id: 18,
    event: "Tensor-Mind",
    assets: "Prepaid Expenses",
    EventType: "Virtual Currency",
    EventTime:"9:00:00 AM"

  },
  {
    id: 19,
    event: "Sofstica",
    assets: "Inventory",
    EventType: "Stable Coins",
    EventTime:"7:00:00 AM"

  },
  {
    id: 20,
    event: "KM Software",
    assets: "Software",
    EventType: "Utility Token",
    EventTime:"10:00:00 AM"

  },
  {
    id: 21,
    event: "CodeLabs",
    assets: "Software",
    EventType: "Review",
    EventTime:"12:00:00 AM"

  },
  {
    id: 22,
    event: "Panacloud",
    assets: "Software",
    EventType: "Tether",
    EventTime:"2:00:00 AM"

  },
  {
    id: 23,
    event: "Mads-Lab",
    assets: "Money Order",
    EventType: "Fungible-Token",
    EventTime:"3:00:00 AM"

  },
  {
    id: 24,
    event: "Matesol",
    assets: "Software",
    EventType: "Ethereum",
    EventTime:"4:00:00 AM"

  },
  {
    id: 25,
    event: "Technified Labs",
    assets: "Software",
    EventType: "Privacy Coins",
    EventTime:"8:00:00 AM"

  },
  {
    id: 26,
    event: "3AS Application",
    assets: "Crypto",
    EventType: "Virtual Currency",
    EventTime:"5:00:00 AM"

  },
  { id: 27, 
    event: "Sybax Labs", 
  assets: "Bitcoin", 
  EventType: "Tether",
  EventTime:"10:00:00 AM"
 
},
  
  {
    id: 28,
    event: "Data Slices",
    assets: "Kusama",
    EventType: "Blockchain",
    EventTime:"12:00:00 AM"

  },
  {
    id: 29,
    event: "Stream-Labs",
    assets: "Binance",
    EventType: "Digital Currency ",
    EventTime:"8:00:00 AM"

  },
  {
    id: 30,
    event: "Tixsee Labs",
    assets: "Trading view",
    EventType: "Exchange",
    EventTime:"9:00:00 AM"

  },
  { id: 31,
    event: "Litmus-Labs",
   assets: "Coin Market", 
  EventType: "Release", 
  EventTime:"11:00:00 AM"
},
];
export default events;
