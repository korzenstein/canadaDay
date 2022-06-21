import albertaFlag from '../components/flags/albertaFlag.svg'
import yukonFlag from "../components/flags/yukonFlag.svg";
import saskFlag from "../components/flags/saskFlag.svg";
import bcFlag from "../components/flags/bcFlag.svg";
import manitobaFlag from "../components/flags/manitobaFlag.svg";
import ontarioFlag from "../components/flags/ontarioFlag.svg";
import quebecFlag from "../components/flags/quebecFlag.svg";
import nbFlag from "../components/flags/nbFlag.svg";
import novaFlag from "../components/flags/novaFlag.svg";
import nfldFlag from "../components/flags/nfldFlag.svg";
import peiFlag from "../components/flags/peiFlag.svg";
import nwtFlag from "../components/flags/nwtFlag.svg";
import nunavutFlag from "../components/flags/nunavutFlag.svg";

const provData = {
    default: {
      population: "population",
      language: "language",
      capital: "capital",
      province: "province",
      status: "status",
      bio: "bio",
      flag: ""
    },
    nfld: {
      population: 200000,
      language: "English",
      capital: "St. Johns",
      province: "New Foundland & Labrador",
      status: "Province",
      bio: `Newfoundland and Labrador form the most easterly province of Canada. On Newfoundland island, the Norse archaeological site L'Anse aux Meadows is the reputed settlement of Viking explorer Leif Erikson. Gros Morne National Park, on the Gulf of St Lawrence, has cliffs, waterfalls and glacial fjords. Southeastern capital city St. John’s is known for the 17th-century Signal Hill citadel, with a hillside walking trail.`,
      flag: nfldFlag,
    },
    pei: {
      population: 300000,
      language: "English",
      capital: "Charlottetown",
      province: "Prince Edward Island",
      status: "Province",
      bio: `Words go here eventually`,
      flag: peiFlag,
    },
    yukon: {
      population: 20000,
      language: "English",
      capital: "Whitehorse",
      province: "Yukon Territory",
      status: "Territory",
      bio: `Workds go here.`,
      flag: yukonFlag,
    },
    nova: {
      population: 100000,
      language: "English",
      capital: "Halifax",
      province: "Nova Scotia",
      status: "Province",
      bio: `Nova Scotia is one of the thirteen provinces and territories of Canada. It is one of the three Maritime provinces and one of the four Atlantic provinces. Nova Scotia is Latin for "New Scotland". Most of the population are native English-speakers and the province's population is 969,383 according to the 2021 Census.`,
      flag: novaFlag,
    },
    nb: {
      population: 800000,
      language: "English / French",
      capital: "Fredricton",
      province: "New Brunswick",
      status: "Province",
      bio: `New Brunswick is one of the ten provinces of Canada. It is one of the three Maritime provinces and one of the four Atlantic provinces. It is the only province with both English and French as its official languages.`,
      flag: nbFlag,
    },
    nwt: {
      population: 20000,
      language: "English",
      capital: "Whitehorse",
      province: "Northwest Territories",
      status: "Territory",
      bio: `The Northwest Territories of Canada include the regions of Dehcho, North Slave, Sahtu, South Slave and Inuvik. Their remote landscape encompasses forest, mountains, Arctic tundra and islands in the Canadian Arctic Archipelago. Dehcho's Nahanni National Park Reserve centers around the canyons of the South Nahanni River and 90m-high Virginia Falls. The regional capital, Yellowknife, is on the north shore of Great Slave Lake.`,
      flag: nwtFlag,
    },
    ontario: {
      population: 14000000,
      language: "English",
      capital: "Toronto",
      province: "Ontario",
      status: "Province",
      bio: `Ontario is a province in east-central Canada that borders the U.S. and the Great Lakes. It's home to Ottawa, Canada's capital, known for Parliament Hill’s Victorian architecture and the National Gallery, featuring Canadian and indigenous art. Toronto, Ontario's capital, is home to the 553m-high CN Tower, with expansive views from its revolving restaurant, as well as High Park, site of a rare oak savannah habitat.`,
      flag: ontarioFlag,
    },
    manitoba: {
      population: 1200000,
      language: "English",
      capital: "Winnipeg",
      province: "Manitoba",
      status: "Province",
      bio: `Manitoba is a Canadian province bordered by Ontario to the east and Saskatchewan to the west. Its landscape of lakes and rivers, mountains, forests and prairies stretches from northern Arctic tundra to Hudson Bay in the east and southern farmland. Much wilderness is protected in more than 80 provincial parks, where hiking, biking, canoeing, camping and fishing are all popular.`,
      flag: manitobaFlag,
    },
    sask: {
      population: 1000000,
      language: "English",
      capital: "Regina",
      province: "Saskatchewan",
      status: "Province",
      bio: `Saska is a Canadian province bordered by Ontario to the east and Saskatchewan to the west. Its landscape of lakes and rivers, mountains, forests and prairies stretches from northern Arctic tundra to Hudson Bay in the east and southern farmland. Much wilderness is protected in more than 80 provincial parks, where hiking, biking, canoeing, camping and fishing are all popular.`,
      flag: saskFlag,
    },
    alberta: {
      population: 3200000,
      language: "English",
      capital: "Edmonton",
      province: "Alberta",
      status: "Province",
      bio: `Alberta is a Canadian province bordered by Ontario to the east and Saskatchewan to the west. Its landscape of lakes and rivers, mountains, forests and prairies stretches from northern Arctic tundra to Hudson Bay in the east and southern farmland. Much wilderness is protected in more than 80 provincial parks, where hiking, biking, canoeing, camping and fishing are all popular.`,
      flag: albertaFlag,
    },
    bc: {
      population: 4020000,
      language: "English",
      capital: "Victoria",
      province: "British Columbia",
      status: "Province",
      bio: `British Columbia, Canada's westernmost province, is defined by its Pacific coastline and mountain ranges. Nature areas like Glacier National Park offer hiking and biking trails, as well as campgrounds. Whistler Blackcomb is a major ski resort that hosted the 2010 Winter Olympics. The scenic Sea-to-Sky Highway links Whistler with Vancouver, a city known for its film industry, at the province's southern U.S. border.`,
      flag: bcFlag,
    },
    nunavut: {
      population: 20000,
      language: "English / Inut",
      capital: "Iqaluit",
      province: "Nunavut",
      status: "Territory",
      bio: `Nunavut is a massive, sparsely populated territory of northern Canada, forming most of the Canadian Arctic Archipelago. Its islands have expanses of tundra, craggy mountains and remote villages, accessible only by plane or boat. It's known for its indigenous Inuit people's artwork, carvings and handmade clothing. Inuit art is displayed at the Nunatta Sunakkutaangit Museum in the capital, Iqaluit, on Baffin Island.`,
      flag: nunavutFlag,
    },
    quebec: {
      population: 12000000,
      language: "French",
      capital: "Quebec City",
      province: "Quebec",
      status: "Province",
      bio: `Québec is a predominantly French-speaking province in eastern Canada with 2 vibrant cities in its south, connected by the Chemin du Roy highway along the Saint Lawrence River. The metropolis Montréal is named after Mt. Royal, the triple-peaked hill at its heart. Dating to 1608, Québec City retains its old colonial core, Place Royale, and historic harbor, Vieux Port, now known for nightlife. `,
      flag: quebecFlag,
    },
  };

  export default provData