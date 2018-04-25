const INITAIL_STATE = {
  import_holland_and_europe: {
    zh_tw: {
      line1: "荷蘭與歐洲",
      line2: "國家",
      line3: "切花 & 切葉",
    },
    us: {
      line1: "HOLLAND & ",
      line2: "EUROPE",
      line3: "CUT FLOWERS & FOLIAGES"
    }
  },
  import_america_and_south_america: {
    zh_tw: {
      line1: "北美與南美",
      line2: "國家",
      line3: "切花 & 切葉",
    },
    us: {
      line1: "AMERICA & ",
      line2: "SOUTH AMERICA",
      line3: "CUT FLOWERS & FOLIAGES"
    }
  },
  import_australia_and_new_zealand: {
    zh_tw: {
      line1: "澳洲與紐西蘭",
      line2: "",
      line3: "切花 & 切葉",
    },
    us: {
      line1: "AUSTRALIA & ",
      line2: "NEW ZEALAND",
      line3: "CUT FLOWERS & FOLIAGES"
    }
  },
  import_south_africa_and_japan: {
    zh_tw: {
      line1: "南非與日本",
      line2: "",
      line3: "切花 & 切葉",
    },
    us: {
      line1: "SOUTH AFRICA & ",
      line2: "JAPAN",
      line3: "CUT FLOWERS & FOLIAGES"
    }
  },
  export_phalaenopsis: {
    zh_tw: {
      line1: "蝴蝶蘭",
      line2: "",
      line3: "組培苗 & 小苗 & 切花",
    },
    us: {
      line1: "PHALAENOPSIS",
      line2: "",
      line3: "PROPAGATION OF SEEDLING & SEEDLINGS & CUT FLOWERS"
    }
  },
  export_adenium: {
    zh_tw: {
      line1: "沙漠玫瑰",
      line2: "",
      line3: "小苗 & 種子",
    },
    us: {
      line1: "ADENIUM",
      line2: "",
      line3: "SEEDLINGS & SEEDS"
    }
  },
  export_salix: {
    zh_tw: {
      line1: "銀柳",
      line2: "",
      line3: "切花",
    },
    us: {
      line1: "SALIX",
      line2: "",
      line3: "CUT FLOWERS"
    }
  },
  decoration_dry_flower: {
    zh_tw: {
      line1: "乾燥花裝飾",
      line2: "",
      line3: "進口乾燥花裝飾",
    },
    us: {
      line1: "DRY FLOWER",
      line2: "",
      line3: "DRIED PLANT MATERIAL"
    }
  },
  decoration_preserved: {
    zh_tw: {
      line1: "永生花材",
      line2: "",
      line3: "進口永生花材",
    },
    us: {
      line1: "PRESERVED",
      line2: "",
      line3: "PRESERVED PLANT MATERIAL"
    }
  }
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}