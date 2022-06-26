import defaultImage from '../assets/default.jpeg'
// Flag svg
import albertaFlag from "../assets/flags/albertaFlag.svg";
import yukonFlag from "../assets/flags/yukonFlag.png";
import saskFlag from "../assets/flags/saskFlag.png";
import bcFlag from "../assets/flags/bcFlag.svg";
import manitobaFlag from "../assets/flags/manitobaFlag.svg";
import ontarioFlag from "../assets/flags/ontarioFlag.svg";
import quebecFlag from "../assets/flags/quebecFlag.png";
import nbFlag from "../assets/flags/nbFlag.svg";
import novaFlag from "../assets/flags/novaFlag.svg";
import nfldFlag from "../assets/flags/nfldFlag.svg";
import peiFlag from "../assets/flags/peiFlag.svg";
import nwtFlag from "../assets/flags/nwtFlag.svg";
import nunavutFlag from "../assets/flags/nunavutFlag.png";
// Flower svg
import albertaFlower from "../assets/flora/albertaFlower.svg";
import saskFlower from "../assets/flora/saskFlower.svg";
import nfldFlower from "../assets/flora/nfldFlower.svg";
import nunavutFlower from "../assets/flora/nunavutFlower.svg";
import peiFlower from "../assets/flora/peiFlower.svg";
import yukonFlower from "../assets/flora/yukonFlower.svg";
import novaFlower from "../assets/flora/novaFlower.svg";
import nwtFlower from "../assets/flora/nwtFlower.svg";
import nbFlower from "../assets/flora/nbFlower.svg";
import ontarioFlower from "../assets/flora/ontarioFlower.svg";
import manitobaFlower from "../assets/flora/manitobaFlower.svg";
import bcFlower from "../assets/flora/bcFlower.svg";
import quebecFlower from "../assets/flora/quebecFlower.svg";
// animals
import saskAnimal from "../assets/fauna/saskAnimal.png"
import nbAnimal from "../assets/fauna/nbAnimal.png"
import bcAnimal from "../assets/fauna/bcAnimal.png"
import quebecAnimal from "../assets/fauna/quebecAnimal.png"
import nfldAnimal from "../assets/fauna/nfldAnimal.png"
import peiAnimal from "../assets/fauna/peiAnimal.png"
import yukonAnimal from "../assets/fauna/yukonAnimal.png"
import manitobaAnimal from "../assets/fauna/manitobaAnimal.png"
import albertaAnimal from "../assets/fauna/albertaAnimal.png"
import ontarioAnimal from "../assets/fauna/ontarioAnimal.png"
import nunavutAnimal from "../assets/fauna/nunavutAnimal.png"
import novaAnimal from "../assets/fauna/novaAnimal.png"
import nwtAnimal from "../assets/fauna/nwtAnimal.png"
// national parks
import novaPark from "../assets/parks/novaPark.jpg"
import peiPark from "../assets/parks/peiPark.jpg"
import nfldPark from "../assets/parks/nfldPark.jpg"
import nwtPark from "../assets/parks/nwtPark.jpg"
import nunavutPark from '../assets/parks/nunavutPark.jpg'
import ontarioPark from '../assets/parks/ontarioPark.jpg'
import manitobaPark from '../assets/parks/manitobaPark.jpg'
import quebecPark from '../assets/parks/quebecPark.jpg'
import albertaPark from '../assets/parks/albertaPark.jpg'
import saskPark from '../assets/parks/saskPark.jpg'
import nbPark from '../assets/parks/nbPark.jpg'
import yukonPark from '../assets/parks/yukonPark.jpg'
import bcPark from '../assets/parks/bcPark.jpg'



const provData = {
  french: {
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
        image: defaultImage,
      },
      fauna: {
        name: "",
        image: defaultImage,
      },
      park: {
        name: "",
        image: defaultImage,
      },
      trivia: {
        name: "",
        image: defaultImage,
      },
    },
  },
  nfld: {
    population: '521,542',
    language: "Anglais",
    capital: "Saint-Jean",
    province: "Terre-Neuve-et-Labrador",
    status: "Province",
    confederation: "31 Mars 1949 (12e)",
    bio: `Terre-Neuve-et-Labrador (en anglais : Newfoundland and Labrador) est la province la plus orientale du Canada, située dans la région de l'Atlantique. Elle est constituée de l'île de Terre-Neuve, et de la région continentale du Labrador au nord-ouest, combinant une superficie totale de 405 212 km2. En 2018, sa population est estimée à 525 073 habitants. Environ de 94% de la population de la province vit sur l'île de Terre-Neuve (et ses petites îles voisines), dont plus de la moitié sur la péninsule d'Avalon.`,
    flag: {
      image: nfldFlag,
      info: "French explaination of flag",
    },
    facts: {
      flora: {
        name: "Sarracénie",
        image: nfldFlower,
      },
      fauna: {
        name: "Macareux moine",
        image: nfldAnimal,
      },
      park: {
        name: "Parc national du Gros-Morne",
        image: nfldPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  pei: {
    population: '156,947',
    language: "Anglais",
    capital: "Charlottetown",
    province: "Île-du-Prince-Édouard",
    status: "Province",
    confederation: '1er Juillet 1873 (7e)',
    bio: `Words go here eventually`,
    flag: {
      image: peiFlag,
      info: "The English heraldic lion is also used on the Coat of Arms of Prince Edward, Duke of Kent, and of King Edward VII. The large oak tree on the right was originally intended to represent England, while the three saplings stand for the three counties into which the province has been divided since 1767.",
    },
    facts: {
      flora: {
        name: "Pantoufle de Dame",
        image: peiFlower,
      },
      fauna: {
        name: "Renard Rouge",
        image: peiAnimal,
      },
      park: {
        name: "Parc national de l'Île-du-Prince-Édouard",
        image: peiPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  yukon: {
    population: '43,025',
    language: "Anglais + Français",
    capital: "Whitehorse",
    province: "Yukon",
    status: "Territoire",
    bio: `Workds go here.`,
    confederation: '13 Juin 1898 (9e)',
    flag: {
      image: yukonFlag,
      info: "The Yukon coat of arms appears on the central panel framed by 2 stems of fireweed. The green symbolizes the forests, white signifies snow and the blue represents Yukon's rivers and lakes.",
    },
    facts: {
      flora: {
        name: "Épilobe",
        image: yukonFlower,
      },
      fauna: {
        name: "Grand Corbeau",
        image: yukonAnimal,
      },
      park: {
        name: "Parc national et réserve de parc national Kluane",
        image: yukonPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nova: {
    population: '971,395',
    language: "Anglais",
    capital: "Halifax",
    province: "Nouvelle-Écosse",
    status: "Province",
    confederation: '1er Juillet 1867 (1er)',
    bio: `Nova Scotia is one of the thirteen provinces and territories of Canada. It is one of the three Maritime provinces and one of the four Atlantic provinces. Nova Scotia is Latin for "New Scotland". Most of the population are native English-speakers and the province's population is 969,383 according to the 2021 Census.`,
    flag: {
      image: novaFlag,
      info: "The flag of Nova Scotia was the first flag flown in the overseas Commonwealth to be authorized by a Royal Charter. It is in essence a representation of St. Andrew's Cross in reversed colors, with the Scotish Royal Arms centered.",
    },
    facts: {
      flora: {
        name: "Fleur de Mai",
        image: novaFlower,
      },
      fauna: {
        name: "Cheval de l'île de Sable",
        image: novaAnimal,
      },
      park: {
        name: "Parc national des Hautes-Terres-du-Cap-Breton",
        image: novaPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nb: {
    population: '776,827',
    language: "Français + Anglais",
    capital: "Fredricton",
    province: "Nouveau-Brunswick",
    status: "Province",
    confederation: '1er Juillet 1867 (1er)',
    bio: `New Brunswick is one of the ten provinces of Canada. It is one of the three Maritime provinces and one of the four Atlantic provinces. It is the only province with both English and French as its official languages.`,
    flag: {
      image: nbFlag,
      info: "The yellow field is dominated by a galley ship representing local shipbuilding. It sails on wavy blue and white lines, and display a white sail and three red flags. The golden lion is representative of new Brunswick's ties to Britain.",
    },
    
    facts: {
      flora: {
        name: "Mésange à tête noire",
        image: nbFlower,
      },
      fauna: {
        name: "Mésange à Tête Noire",
        image: nbAnimal,
      },
      park: {
        name: nbPark,
        image: "Parc national Fundy",
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nwt: {
    population: '44,826',
    language: "Anglais, Français, Chipewyan, Cri, Flanc-de-chien, Gwich’in, Inuinnaqtun, Inuktitut, Inuvialuktun, Esclave du Nord, Esclave du Sud",
    capital: "Whitehorse",
    province: "Territoires du Nord-Ouest",
    status: "Territoire",
    confederation: "15 Juillet 1870 (5e)",
    bio: `The Northwest Territories of Canada include the regions of Dehcho, North Slave, Sahtu, South Slave and Inuvik. Their remote landscape encompasses forest, mountains, Arctic tundra and islands in the Canadian Arctic Archipelago. Dehcho's Nahanni National Park Reserve centers around the canyons of the South Nahanni River and 90m-high Virginia Falls. The regional capital, Yellowknife, is on the north shore of Great Slave Lake.`,
    flag: {
      image: nwtFlag,
      info: "The flag's blue is said to be symbolic of the many lakes and rivers in the territory, and white represents the ice and snow. The shield uses green for forests, red for the tundra and white for the Arctic Circle ice cap. The wavy blue line represents the Northwest Passage. Gold blocks represent gold deposits in the territory, and the fox face is symbolic of fur as a natural resource.",
    },
 
    facts: {
      flora: {
        name: "Benoîte de Montagne",
        image: nwtFlower,
      },
      fauna: {
        name: "Gyrfalcon",
        image: nwtAnimal,
      },
      park: {
        name: "Réserve de parc national Nahanni",
        image: nwtPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  ontario: {
    population: '14,566,547',
    language: "Anglais",
    capital: "Toronto",
    province: "Ontario",
    status: "Province",
    confederation: "1er Juillet 1867 (1er)",
    bio: `Ontario is a province in east-central Canada that borders the U.S. and the Great Lakes. It's home to Ottawa, Canada's capital, known for Parliament Hill’s Victorian architecture and the National Gallery, featuring Canadian and indigenous art. Toronto, Ontario's capital, is home to the 553m-high CN Tower, with expansive views from its revolving restaurant, as well as High Park, site of a rare oak savannah habitat.`,
    flag: {
      image: ontarioFlag,
      info: "The flag of Ontario is a defaced Red Ensign. The flag is an adaptation of the Canadian Red Ensign, which had been the de facto national flag of Canada from 1867 to 1965. The flag is a red field with the Royal Union Flag in the canton and the Ontario shield of arms in the fly.",
    },
    facts: {
      flora: {
        name: "Trille Blanc",
        image: ontarioFlower,
      },
      fauna: {
        name: "Plongeon Huard",
        image: ontarioAnimal,
      },
      park: {
        name: "Parc marin national Fathom Five",
        image: ontarioPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  manitoba: {
    population: '1,369,000',
    language: "Anglais",
    capital: "Winnipeg",
    province: "Manitoba",
    status: "Province",
    confederation: '15 Juillet 1870 (5e)',
    bio: `Manitoba is a Canadian province bordered by Ontario to the east and Saskatchewan to the west. Its landscape of lakes and rivers, mountains, forests and prairies stretches from northern Arctic tundra to Hudson Bay in the east and southern farmland. Much wilderness is protected in more than 80 provincial parks, where hiking, biking, canoeing, camping and fishing are all popular.`,
    flag: {
      image: manitobaFlag,
      info: "Its visual purpose is to recall and to preserve the Canadian Red Ensign, one featuring a bright red field and the Union Jack. The Manitoba Shield, centered right, shows a buffalo standing on a rock beneath the red cross of St. George.",
    },
    facts: {
      flora: {
        name: "Crocus des Prairies",
        image: manitobaFlower,
      },
      fauna: {
        name: "Bison des plaines",
        image: manitobaAnimal,
      },
      park: {
        name: "Parc national du Mont-Riding",
        image: manitobaPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  sask: {
    population: '1,174,000',
    language: "Anglais",
    capital: "Regina",
    province: "Saskatchewan",
    status: "Province",
    confederation: '1er Septembre 1905 (10e)',
    bio: `Saska is a Canadian province bordered by Ontario to the east and Saskatchewan to the west. Its landscape of lakes and rivers, mountains, forests and prairies stretches from northern Arctic tundra to Hudson Bay in the east and southern farmland. Much wilderness is protected in more than 80 provincial parks, where hiking, biking, canoeing, camping and fishing are all popular.`,
    flag: {
      image: saskFlag,
      info: "The flag is divided horizontally into two equal parts – one green, one gold. The green represents the northern forests of the province and the gold symbolizes the southern grain fields.",
    },
    
    facts: {
      flora: {
        name: "Lys rouge occidental",
        image: saskFlower,
      },
      fauna: {
        name: "Cerf de Virginie",
        image: saskAnimal,
      },
      park: {
        name: "Parc national des Prairies",
        image: saskPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  alberta: {
    population: '4,371,000',
    language: "Anglais",
    capital: "Edmonton",
    province: "Alberta",
    status: "Province",
    confederation: '	1er Septembre 1905 (10e)',
    bio: `Alberta is a Canadian province bordered by Ontario to the east and Saskatchewan to the west. Its landscape of lakes and rivers, mountains, forests and prairies stretches from northern Arctic tundra to Hudson Bay in the east and southern farmland. Much wilderness is protected in more than 80 provincial parks, where hiking, biking, canoeing, camping and fishing are all popular.`,
    flag: {
      image: albertaFlag,
      info: "Canadian provincial flag consisting of a blue field (background) with the provincial coat of arms in the centre. The crest includes (from bottom to top) the typical wheat fields of the province, rough prairie land, foothills, and finally the Rocky Mountains under a blue sky. At the very top of the shield is the red Cross of St. George, recalling the English settlement of the region.",
    },
    facts: {
      flora: {
        name: "Rose Sauvage",
        image: albertaFlower,
      },
      fauna: {
        name: "Mouflon des Montagnes Rocheuses",
        image: albertaAnimal,
      },
      park: {
        name: "Parc national Banff",
        image: albertaPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  bc: {
    population: '5,071,000',
    language: "Anglais",
    capital: "Victoria",
    province: "Colombie Britannique",
    status: "Province",
    confederation: '20 juillet 1871 (6e)',
    bio: `British Columbia, Canada's westernmost province, is defined by its Pacific coastline and mountain ranges. Nature areas like Glacier National Park offer hiking and biking trails, as well as campgrounds. Whistler Blackcomb is a major ski resort that hosted the 2010 Winter Olympics. The scenic Sea-to-Sky Highway links Whistler with Vancouver, a city known for its film industry, at the province's southern U.S. border.`,
    flag: {
      image: bcFlag,
      info: "The top of the flag depicts the Royal Union Flag, reflecting B.C.’s British heritage, with the King Edward crown in the centre representing the Royal Family. Below is a setting sun, representing B.C.’s position as Canada’s westernmost province. The wavy white and blue lines symbolize B.C.’s location between the Pacific Ocean and the Rocky Mountains.",
    },
    facts: {
      flora: {
        name: "Cornouiller du Pacifique",
        image: bcFlower,
      },
      fauna: {
        name: "Ours Kermode",
        image: bcAnimal,
      },
      park: {
        name: "Parc national Yoho",
        image: bcPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nunavut: {
    population: '39,736',
    language: "Inuktitut, Inuinnaqtun, Anglais + Français",
    capital: "Iqaluit",
    province: "Nunavut",
    status: "Territoire",
    confederation: '1er avril 1999 (13e)',
    bio: `Nunavut is a massive, sparsely populated territory of northern Canada, forming most of the Canadian Arctic Archipelago. Its islands have expanses of tundra, craggy mountains and remote villages, accessible only by plane or boat. It's known for its indigenous Inuit people's artwork, carvings and handmade clothing. Inuit art is displayed at the Nunatta Sunakkutaangit Museum in the capital, Iqaluit, on Baffin Island.`,
    flag: {
      image: nunavutFlag,
      info: "The colours, blue and gold, symbolize the riches of the land, sea and sky. Red is a reference to Canada. The inuksuk - centered - symbolizes stone monuments which guide people on the land, and also marks sacred and other special places. The star is the Niqirtsuituq - North Star - and the traditional guide for navigation and symbolic of the leadership of the elders in the community.",
    },
    facts: {
      flora: {
        name: "Saxifrage Pourpre",
        image: nunavutFlower,
      },
      fauna: {
        name: "Chien Inuit Canadien",
        image: nunavutAnimal,
      },
      park: {
        name: "Parc national Auyuittuq",
        image: nunavutPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  quebec: {
    population: '8,501,833 ',
    language: "Français",
    capital: "Ville de Québec",
    province: "Québec",
    status: "Province",
    confederation: '1er Juillet 1867 (1er)',
    bio: `Québec is a predominantly French-speaking province in eastern Canada with 2 vibrant cities in its south, connected by the Chemin du Roy highway along the Saint Lawrence River. The metropolis Montréal is named after Mt. Royal, the triple-peaked hill at its heart. Dating to 1608, Québec City retains its old colonial core, Place Royale, and historic harbor, Vieux Port, now known for nightlife. `,
    flag: {
      image: quebecFlag,
      info: "The flag of Quebec is often called the “Fleurdelisé”. The white cross on a blue field recalls an ancient French military banner, and the four fleurs-de-lis are symbolic of France. Legend has it that the use of the fleur-de-lis as an emblem of French royalty dates back to the year 496 when Clovis, the first Christian king of France, was baptized by Saint Remigius and is said to have adopted the flower as his personal emblem.",
    },
    facts: {
      flora: {
        name: "Iris Versicolore",
        image: quebecFlower,
      },
      fauna: {
        name: "Harfang des Neiges",
        image: quebecAnimal,
      },
      park: {
        name: "Parc national Forillon",
        image: quebecPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },

  },

  english: {
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
      park: {
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
    population: '521,542',
    language: "English",
    capital: "St. Johns",
    province: "New Foundland & Labrador",
    status: "Province",
    confederation: "March 31, 1949 (12th)",
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
      park: {
        name: "Gros Morne National Park",
        image: nfldPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  pei: {
    population: '156,947',
    language: "English",
    capital: "Charlottetown",
    province: "Prince Edward Island",
    status: "Province",
    bio: `Words go here eventually`,
    condederation: 'July 1, 1873 (8th)',
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
      park: {
        name: "Prince Edward Island National Park",
        image: peiPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  yukon: {
    population: '43,025',
    language: "English + French",
    capital: "Whitehorse",
    province: "Yukon Territory",
    status: "Territory",
    confederation: 'June 13, 1898 (9th)',
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
      park: {
        name: "Kluane National Park and Reserve",
        image: yukonPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nova: {
    population: '971,395',
    language: "English",
    capital: "Halifax",
    province: "Nova Scotia",
    status: "Province",
    confederation: 'July 1, 1867 (1st)',
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
        image: novaAnimal,
      },
      park: {
        name: "Cape Breton Highlands National Park",
        image: novaPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nb: {
    population: '776,827',
    language: "English + French",
    capital: "Fredricton",
    province: "New Brunswick",
    status: "Province",
    confederation: 'July 1, 1867 (1st)',
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
      park: {
        name: "Fundy National Park",
        image: nbPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nwt: {
    population: '44,826',
    language: "English, French, Chipewyan, Cree, Gwich’in, Inuinnaqtun, Inuktitut, Inuvialuktun, North Slavey, South Slavey, Tłı̨chǫ",
    capital: "Whitehorse",
    province: "Northwest Territories",
    status: "Territory",
    confederation: 'July 15, 1870 (5e)',
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
        image: nwtAnimal,
      },
      park: {
        name: "Nahanni National Park Reserve",
        image: nwtPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  ontario: {
    population: '14,566,547',
    language: "English",
    capital: "Toronto",
    province: "Ontario",
    status: "Province",
    confederation: 'July 1, 1867 (1st)',
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
        image: ontarioAnimal,
      },
      park: {
        name: "Fathom Five National Marine Park",
        image: ontarioPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  manitoba: {
    population: '1,369,000',
    language: "English",
    capital: "Winnipeg",
    province: "Manitoba",
    status: "Province",
    confederation: 'July 15, 1870 (5th)',
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
      park: {
        name: "Riding Mountain National Park",
        image: manitobaPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  sask: {
    population: '1,174,000',
    language: "English",
    capital: "Regina",
    province: "Saskatchewan",
    status: "Province",
    confederation: "September 1, 1905 (10th)",
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
      park: {
        name: "Grasslands National Park",
        image: saskPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  alberta: {
    population: '4,371,000',
    language: "English",
    capital: "Edmonton",
    province: "Alberta",
    status: "Province",
    confederation: "September 1, 1905 (10th)",
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
      park: {
        name: "Banff National Park",
        image: albertaPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  bc: {
    population: '5,071,000',
    language: "English",
    capital: "Victoria",
    province: "British Columbia",
    status: "Province",
    confederation: 'July 20, 1871 (6th)',
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
      park: {
        name: "Yoho National Park",
        image: bcPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  nunavut: {
    population: '39,736',
    language: "Inuktitut, Inuinnaqtun, English + French",
    capital: "Iqaluit",
    province: "Nunavut",
    status: "Territory",
    confederation: 'April 1, 1999 (13th)',
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
        image: nunavutAnimal,
      },
      park: {
        name: "Auyuittuq National Park",
        image: nunavutPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },
  quebec: {
    population: '8,501,833',
    language: "French",
    capital: "Quebec City",
    province: "Quebec",
    status: "Province",
    confederation: 'July 1, 1867 (1st)',
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
      park: {
        name: "Forillon National Park",
        image: quebecPark,
      },
      trivia: {
        name: "",
        image: "",
      },
    },
  },

  },
};

export default provData;
