
const version = "1.0.0";
const polygon = require("./tokens/polygon.json");

const buildList = function() {
  const parsed = version.split(".");
  return {
    name: "FeSwap Matic Info Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://raw.githubusercontent.com/FeSwap/FeSwapTokenList/master/FeSwapLogo.png",
    keywords: ["FeSwap", "Matic"],
    tokens: [...polygon],
  };
};


console.log(JSON.stringify(buildList(), null, 2));