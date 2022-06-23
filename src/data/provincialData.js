// Flag svg
import albertaFlag from "../components/flags/albertaFlag.svg";
import yukonFlag from "../components/flags/yukonFlag.png";
import saskFlag from "../components/flags/saskFlag.png";
import bcFlag from "../components/flags/bcFlag.svg";
import manitobaFlag from "../components/flags/manitobaFlag.svg";
import ontarioFlag from "../components/flags/ontarioFlag.svg";
import quebecFlag from "../components/flags/quebecFlag.png";
import nbFlag from "../components/flags/nbFlag.svg";
import novaFlag from "../components/flags/novaFlag.svg";
import nfldFlag from "../components/flags/nfldFlag.svg";
import peiFlag from "../components/flags/peiFlag.svg";
import nwtFlag from "../components/flags/nwtFlag.svg";
import nunavutFlag from "../components/flags/nunavutFlag.svg";
// Flower svg
import albertaFlower from "../assets/albertaFlower.svg";
import saskFlower from "../assets/saskFlower.svg";
import nfldFlower from "../assets/nfldFlower.svg";
import nunavutFlower from "../assets/nunavutFlower.svg";
import peiFlower from "../assets/peiFlower.svg";
import yukonFlower from "../assets/yukonFlower.svg";
import novaFlower from "../assets/novaFlower.svg";
import nwtFlower from "../assets/nwtFlower.svg";
import nbFlower from "../assets/nbFlower.svg";
import ontarioFlower from "../assets/ontarioFlower.svg";
import manitobaFlower from "../assets/manitobaFlower.svg";
import bcFlower from "../assets/bcFlower.svg";
import quebecFlower from "../assets/quebecFlower.svg";
// animals
import saskAnimal from "../assets/saskAnimal.png"
import nbAnimal from "../assets/nbAnimal.png"
import bcAnimal from "../assets/bcAnimal.png"
import quebecAnimal from "../assets/quebecAnimal.png"
import nfldAnimal from "../assets/nfldAnimal.png"
import peiAnimal from "../assets/peiAnimal.png"
import yukonAnimal from "../assets/yukonAnimal.png"
import manitobaAnimal from "../assets/manitobaAnimal.png"
import albertaAnimal from "../assets/albertaAnimal.png"



const provData = {
  default: {
    population: "population",
    language: "language",
    capital: "capital",
    province: "province",
    status: "status",
    bio: "bio",
    flag: {
      image: "",
      info: "",
    },
    facts: {
      flora: {
        name: "",
        image: "",
      },
      fauna: {
        name: "",
        image: "",
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nfld: {
    population: 200000,
    language: "English",
    capital: "St. Johns",
    province: "New Foundland & Labrador",
    status: "Province",
    bio: `Newfoundland and Labrador form the most easterly province of Canada. On Newfoundland island, the Norse archaeological site L'Anse aux Meadows is the reputed settlement of Viking explorer Leif Erikson. Gros Morne National Park, on the Gulf of St Lawrence, has cliffs, waterfalls and glacial fjords. Southeastern capital city St. John’s is known for the 17th-century Signal Hill citadel, with a hillside walking trail.`,
    flag: {
      image: nfldFlag,
      info: "The blue represents the waters of the sea, lakes and rivers; the white represents snow and ice; the red represents human effort, and the yellow gold symbolizes the confidence the people of Newfoundland and Labrador have in themselves and for the future.",
    },
    facts: {
      flora: {
        name: "Pitcher Plant",
        image: nfldFlower,
      },
      fauna: {
        name: "Atlantic Puffin",
        image: nfldAnimal,
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  pei: {
    population: 300000,
    language: "English",
    capital: "Charlottetown",
    province: "Prince Edward Island",
    status: "Province",
    bio: `Words go here eventually`,
    flag: {
      image: peiFlag,
      info: "The English heraldic lion is also used on the Coat of Arms of Prince Edward, Duke of Kent, and of King Edward VII. The large oak tree on the right was originally intended to represent England, while the three saplings stand for the three counties into which the province has been divided since 1767.",
    },
    facts: {
      flora: {
        name: "Lady's Slipper",
        image: peiFlower,
      },
      fauna: {
        name: "Red Fox",
        image: peiAnimal,
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  yukon: {
    population: 20000,
    language: "English",
    capital: "Whitehorse",
    province: "Yukon Territory",
    status: "Territory",
    bio: `Workds go here.`,
    flag: {
      image: yukonFlag,
      info: "The Yukon coat of arms appears on the central panel framed by 2 stems of fireweed. The green symbolizes the forests, white signifies snow and the blue represents Yukon's rivers and lakes.",
    },
    facts: {
      flora: {
        name: "Fireweed",
        image: yukonFlower,
      },
      fauna: {
        name: "Common Raven",
        image: yukonAnimal,
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nova: {
    population: 100000,
    language: "English",
    capital: "Halifax",
    province: "Nova Scotia",
    status: "Province",
    bio: `Nova Scotia is one of the thirteen provinces and territories of Canada. It is one of the three Maritime provinces and one of the four Atlantic provinces. Nova Scotia is Latin for "New Scotland". Most of the population are native English-speakers and the province's population is 969,383 according to the 2021 Census.`,
    flag: {
      image: novaFlag,
      info: "The flag of Nova Scotia was the first flag flown in the overseas Commonwealth to be authorized by a Royal Charter. It is in essence a representation of St. Andrew's Cross in reversed colors, with the Scotish Royal Arms centered.",
    },
    facts: {
      flora: {
        name: "Mayflower",
        image: novaFlower,
      },
      fauna: {
        name: "Sable Island Horse",
        image: "",
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nb: {
    population: 800000,
    language: "English / French",
    capital: "Fredricton",
    province: "New Brunswick",
    status: "Province",
    bio: `New Brunswick is one of the ten provinces of Canada. It is one of the three Maritime provinces and one of the four Atlantic provinces. It is the only province with both English and French as its official languages.`,
    flag: {
      image: nbFlag,
      info: "The yellow field is dominated by a galley ship representing local shipbuilding. It sails on wavy blue and white lines, and display a white sail and three red flags. The golden lion is representative of new Brunswick's ties to Britain.",
    },
    
    facts: {
      flora: {
        name: "Purple Violet",
        image: nbFlower,
      },
      fauna: {
        name: "Black-Capped Chickadee",
        image: nbAnimal,
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nwt: {
    population: 20000,
    language: "English",
    capital: "Whitehorse",
    province: "Northwest Territories",
    status: "Territory",
    bio: `The Northwest Territories of Canada include the regions of Dehcho, North Slave, Sahtu, South Slave and Inuvik. Their remote landscape encompasses forest, mountains, Arctic tundra and islands in the Canadian Arctic Archipelago. Dehcho's Nahanni National Park Reserve centers around the canyons of the South Nahanni River and 90m-high Virginia Falls. The regional capital, Yellowknife, is on the north shore of Great Slave Lake.`,
    flag: {
      image: nwtFlag,
      info: "The flag's blue is said to be symbolic of the many lakes and rivers in the territory, and white represents the ice and snow. The shield uses green for forests, red for the tundra and white for the Arctic Circle ice cap. The wavy blue line represents the Northwest Passage. Gold blocks represent gold deposits in the territory, and the fox face is symbolic of fur as a natural resource.",
    },
 
    facts: {
      flora: {
        name: "Mountain Avens",
        image: nwtFlower,
      },
      fauna: {
        name: "Gyrfalcon",
        image: "",
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  ontario: {
    population: 14000000,
    language: "English",
    capital: "Toronto",
    province: "Ontario",
    status: "Province",
    bio: `Ontario is a province in east-central Canada that borders the U.S. and the Great Lakes. It's home to Ottawa, Canada's capital, known for Parliament Hill’s Victorian architecture and the National Gallery, featuring Canadian and indigenous art. Toronto, Ontario's capital, is home to the 553m-high CN Tower, with expansive views from its revolving restaurant, as well as High Park, site of a rare oak savannah habitat.`,
    flag: {
      image: ontarioFlag,
      info: "The flag of Ontario is a defaced Red Ensign. The flag is an adaptation of the Canadian Red Ensign, which had been the de facto national flag of Canada from 1867 to 1965. The flag is a red field with the Royal Union Flag in the canton and the Ontario shield of arms in the fly.",
    },
    facts: {
      flora: {
        name: "White Trillium",
        image: ontarioFlower,
      },
      fauna: {
        name: "Common Loon",
        image: "",
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  manitoba: {
    population: 1200000,
    language: "English",
    capital: "Winnipeg",
    province: "Manitoba",
    status: "Province",
    bio: `Manitoba is a Canadian province bordered by Ontario to the east and Saskatchewan to the west. Its landscape of lakes and rivers, mountains, forests and prairies stretches from northern Arctic tundra to Hudson Bay in the east and southern farmland. Much wilderness is protected in more than 80 provincial parks, where hiking, biking, canoeing, camping and fishing are all popular.`,
    flag: {
      image: manitobaFlag,
      info: "Its visual purpose is to recall and to preserve the Canadian Red Ensign, one featuring a bright red field and the Union Jack. The Manitoba Shield, centered right, shows a buffalo standing on a rock beneath the red cross of St. George.",
    },
    facts: {
      flora: {
        name: "Prairie Crocus",
        image: manitobaFlower,
      },
      fauna: {
        name: "Plains Bison",
        image: manitobaAnimal,
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  sask: {
    population: 1000000,
    language: "English",
    capital: "Regina",
    province: "Saskatchewan",
    status: "Province",
    bio: `Saska is a Canadian province bordered by Ontario to the east and Saskatchewan to the west. Its landscape of lakes and rivers, mountains, forests and prairies stretches from northern Arctic tundra to Hudson Bay in the east and southern farmland. Much wilderness is protected in more than 80 provincial parks, where hiking, biking, canoeing, camping and fishing are all popular.`,
    flag: {
      image: saskFlag,
      info: "The flag is divided horizontally into two equal parts – one green, one gold. The green represents the northern forests of the province and the gold symbolizes the southern grain fields.",
    },
    
    facts: {
      flora: {
        name: "Western Red Lily",
        image: saskFlower,
      },
      fauna: {
        name: "White-Tailed Deer",
        image: saskAnimal,
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  alberta: {
    population: 3200000,
    language: "English",
    capital: "Edmonton",
    province: "Alberta",
    status: "Province",
    bio: `Alberta is a Canadian province bordered by Ontario to the east and Saskatchewan to the west. Its landscape of lakes and rivers, mountains, forests and prairies stretches from northern Arctic tundra to Hudson Bay in the east and southern farmland. Much wilderness is protected in more than 80 provincial parks, where hiking, biking, canoeing, camping and fishing are all popular.`,
    flag: {
      image: albertaFlag,
      info: "Canadian provincial flag consisting of a blue field (background) with the provincial coat of arms in the centre. The crest includes (from bottom to top) the typical wheat fields of the province, rough prairie land, foothills, and finally the Rocky Mountains under a blue sky. At the very top of the shield is the red Cross of St. George, recalling the English settlement of the region.",
    },
    facts: {
      flora: {
        name: "Wild Rose",
        image: albertaFlower,
      },
      fauna: {
        name: "Rocky Mountain Bighorn Sheep",
        image: albertaAnimal,
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  bc: {
    population: 4020000,
    language: "English",
    capital: "Victoria",
    province: "British Columbia",
    status: "Province",
    bio: `British Columbia, Canada's westernmost province, is defined by its Pacific coastline and mountain ranges. Nature areas like Glacier National Park offer hiking and biking trails, as well as campgrounds. Whistler Blackcomb is a major ski resort that hosted the 2010 Winter Olympics. The scenic Sea-to-Sky Highway links Whistler with Vancouver, a city known for its film industry, at the province's southern U.S. border.`,
    flag: {
      image: bcFlag,
      info: "The top of the flag depicts the Royal Union Flag, reflecting B.C.’s British heritage, with the King Edward crown in the centre representing the Royal Family. Below is a setting sun, representing B.C.’s position as Canada’s westernmost province. The wavy white and blue lines symbolize B.C.’s location between the Pacific Ocean and the Rocky Mountains.",
    },
    facts: {
      flora: {
        name: "Pacific Dogwood",
        image: bcFlower,
      },
      fauna: {
        name: "Spirit Bear",
        image: bcAnimal,
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nunavut: {
    population: 20000,
    language: "English / Inut",
    capital: "Iqaluit",
    province: "Nunavut",
    status: "Territory",
    bio: `Nunavut is a massive, sparsely populated territory of northern Canada, forming most of the Canadian Arctic Archipelago. Its islands have expanses of tundra, craggy mountains and remote villages, accessible only by plane or boat. It's known for its indigenous Inuit people's artwork, carvings and handmade clothing. Inuit art is displayed at the Nunatta Sunakkutaangit Museum in the capital, Iqaluit, on Baffin Island.`,
    flag: {
      image: nunavutFlag,
      info: "The colours, blue and gold, symbolize the riches of the land, sea and sky. Red is a reference to Canada. The inuksuk - centered - symbolizes stone monuments which guide people on the land, and also marks sacred and other special places. The star is the Niqirtsuituq - North Star - and the traditional guide for navigation and symbolic of the leadership of the elders in the community.",
    },
    facts: {
      flora: {
        name: "Purple Saxifrage",
        image: nunavutFlower,
      },
      fauna: {
        name: "Canadian Inuit Dog",
        image: "",
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  quebec: {
    population: 12000000,
    language: "French",
    capital: "Quebec City",
    province: "Quebec",
    status: "Province",
    bio: `Québec is a predominantly French-speaking province in eastern Canada with 2 vibrant cities in its south, connected by the Chemin du Roy highway along the Saint Lawrence River. The metropolis Montréal is named after Mt. Royal, the triple-peaked hill at its heart. Dating to 1608, Québec City retains its old colonial core, Place Royale, and historic harbor, Vieux Port, now known for nightlife. `,
    flag: {
      image: quebecFlag,
      info: "The flag of Quebec is often called the “Fleurdelisé”. The white cross on a blue field recalls an ancient French military banner, and the four fleurs-de-lis are symbolic of France. Legend has it that the use of the fleur-de-lis as an emblem of French royalty dates back to the year 496 when Clovis, the first Christian king of France, was baptized by Saint Remigius and is said to have adopted the flower as his personal emblem.",
    },
    facts: {
      flora: {
        name: "Iris Versicolor",
        image: quebecFlower,
      },
      fauna: {
        name: "Snowy Owl",
        image: quebecAnimal,
      },
      economy: {
        name: "",
        image: "",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
};

export default provData;
