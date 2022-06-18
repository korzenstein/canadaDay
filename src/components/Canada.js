import { motion, useCycle } from "framer-motion";
import { useState } from "react";

const Canada = () => {
  const provData = {
  default: {
    population: "", 
    language: '',
    capital: '',
    province: '',
    status: '',
    bio: "",
  },
  nfld: {
    population: 200000, 
    language: 'English',
    capital: 'St. Johns',
    province: 'New Foundland & Labrador',
    status: 'Province',
    bio: `Newfoundland and Labrador form the most easterly province of Canada. On Newfoundland island, the Norse archaeological site L'Anse aux Meadows is the reputed settlement of Viking explorer Leif Erikson. Gros Morne National Park, on the Gulf of St Lawrence, has cliffs, waterfalls and glacial fjords. Southeastern capital city St. John’s is known for the 17th-century Signal Hill citadel, with a hillside walking trail.`,
  },
  nwt: {
    population: 20000, 
    language: 'English',
    capital: 'Whitehorse',
    province: 'Northwest Territories',
    status: 'Territory',
    bio: `The Northwest Territories of Canada include the regions of Dehcho, North Slave, Sahtu, South Slave and Inuvik. Their remote landscape encompasses forest, mountains, Arctic tundra and islands in the Canadian Arctic Archipelago. Dehcho's Nahanni National Park Reserve centers around the canyons of the South Nahanni River and 90m-high Virginia Falls. The regional capital, Yellowknife, is on the north shore of Great Slave Lake.`,
  },
  ontario: {
    population: 14000000, 
    language: 'English',
    capital: 'Toronto',
    province: 'Ontario',
    status: 'Province',
    bio: `Ontario is a province in east-central Canada that borders the U.S. and the Great Lakes. It's home to Ottawa, Canada's capital, known for Parliament Hill’s Victorian architecture and the National Gallery, featuring Canadian and indigenous art. Toronto, Ontario's capital, is home to the 553m-high CN Tower, with expansive views from its revolving restaurant, as well as High Park, site of a rare oak savannah habitat.`,
  }
}
  const [provChoice, setProvChoice] = useState(['default'])  


  const reusable = [{ scale: 1, fill: '#2D846D'},
    { scale: 1.02, fill: '#5459ff'}]
  const [animateNfld, cycleNfld] = useCycle(...reusable);
  const [animateOntario, cycleOntario] = useCycle(...reusable); 
  const [animateNb, cycleNb] = useCycle(...reusable); 
  const [animateNova, cycleNova] = useCycle(...reusable); 
  const [animatePei, cyclePei] = useCycle(...reusable); 
  const [animateManitoba, cycleManitoba] = useCycle(...reusable); 
  const [animateSask, cycleSask] = useCycle(...reusable); 
  const [animateAlberta, cycleAlberta] = useCycle(...reusable); 
  const [animateBc, cycleBc] = useCycle(...reusable); 
  const [animateYukon, cycleYukon] = useCycle(...reusable); 
  const [animateNwt, cycleNwt] = useCycle(...reusable); 
  const [animateNunavut, cycleNunavut] = useCycle(...reusable); 

  const handleChoice = (province) => {
      console.log(`hello ${province}`);
      setProvChoice(province)
    }
 

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="394"
        height="345"
        fill="none"
        viewBox="0 0 394 345"
      >
        <g>
          <motion.path
          animate={animateNwt}
          
            onTap={() => cycleNwt()}
            fill="#2D846D"
            d="M98.719 99.142c4.117 1.14 8.833-.3 11.612-3.542 1.434-1.672 2.347-3.724 3.63-5.514 1.283-1.791 3.138-3.4 5.337-3.492 1.641-.069 3.307.714 4.886.261 1.693-.487 2.734-2.375 2.609-4.134-.125-1.759-1.212-3.335-2.58-4.447s-3.007-1.828-4.623-2.53c-2.212-.962-4.374-2.063-6.575-3.023-2.49-1.085-4.568.364-6.549 1.806-1.21.879-2.437 1.772-3.37 2.941-.935 1.169-1.557 2.665-1.365 4.148.132 1.024.642 1.989.645 3.022.004 1.411-.948 2.667-2.075 3.519-1.126.854-2.444 1.413-3.623 2.189-1.18.776-2.269 1.862-2.542 3.249-.255 1.296.271 2.667 1.172 3.631.902.966 2.139 1.563 3.411 1.916z"
            className="nwt"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M155.176 103.006c-.154 1.375.554 2.734 1.556 3.688 1.002.953 2.273 1.567 3.529 2.144 1.495.688 3.087 1.357 4.725 1.198 2.264-.22 4.166-2.105 4.755-4.303.589-2.198.003-4.597-1.219-6.517-.645-1.012-1.492-2.005-1.521-3.204-.035-1.415 1.095-2.643 1.143-4.058.053-1.568-1.293-2.909-2.791-3.382-1.497-.473-3.112-.279-4.671-.08l-1.997.661a2.593 2.593 0 00-2.396.84 2.588 2.588 0 00-.472 2.495c.429 1.223 1.729 1.985 2.139 3.213.425 1.272-.227 2.645-.978 3.754-.75 1.115-1.652 2.218-1.802 3.551z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M197.455 93.998c.492 1.641 1.558 3.044 2.222 4.622.664 1.578.85 3.578-.29 4.856-.924 1.037-2.539 1.289-3.836.796-1.299-.493-2.292-1.632-2.797-2.926-.505-1.294-.562-2.73-.371-4.106.218-1.579.748-3.095 1.274-4.599.455-1.302 2.498-4.852 1.468-6.082-.819-.979-3.151-.734-4.185-.06a1.595 1.595 0 00-.298.246c-1.467 1.6-2.488 4.622-3.181 6.65-.794 2.322-1.188 4.808-.696 7.239.347 1.715 1.123 3.412.854 5.141-.188 1.211-.886 2.332-.871 3.557.019 1.496 1.129 2.805 2.455 3.496 1.326.691 2.848.883 4.333 1.064l10.484 1.276c1.604.195 3.428.325 4.624-.757.869-.783 1.169-2.012 1.864-2.952 1.312-1.776 3.882-2.232 6.014-1.652 2.133.581 3.93 1.99 5.633 3.398 1.704 1.409 3.432 2.878 5.515 3.618 2.931 1.04 6.247.518 9.164 1.599 2.527.938 4.565 3.107 5.344 5.689.777 2.583.275 5.516-1.316 7.694-1.177 1.61-.014 5.074 1.167 6.684.359.487.831.907 1.059 1.469.343.847.037 1.845-.534 2.557-.572.712-1.371 1.196-2.154 1.667-2.688 1.614-5.856.546-8.434 2.334-1.728 1.197-2.362 3.656-1.62 5.623.742 1.966 2.695 3.355 4.777 3.635 2.083.276 4.232-.479 5.845-1.828 1.395-1.167 2.505-2.804 4.235-3.363 1.831-.594 3.831.215 5.408 1.317 1.577 1.104 2.949 2.518 4.672 3.377 1.722.86 4.01 1.023 5.411-.294 3.455-3.248 9.631-.532 13.853 1.627 1.199.613 2.34 1.352 3.597 1.838 1.256.486 2.681.706 3.947.247 1.266-.459 2.294-1.732 2.148-3.072-.11-1.019-.854-1.881-1.739-2.397-.885-.519-1.903-.745-2.904-.968l-9.055-2.002c-.807-.178-1.645-.371-2.284-.894-.639-.523-1.002-1.482-.593-2.198.438-.769 1.473-.896 2.357-.939l9.544-.455c.85-.04 1.794-.125 2.354-.764.472-.534.528-1.324.398-2.025-.354-1.904-1.896-3.417-3.646-4.246-1.75-.829-3.708-1.087-5.629-1.338-1.921-.251-3.879-.518-5.624-1.358-1.744-.842-3.271-2.372-3.599-4.282-.326-1.908.894-4.102 2.807-4.402 1.44-.229 2.814.575 4.148 1.167 1.333.592 3.042.938 4.138-.026.963-.849.999-2.312.959-3.597-.059-1.887-.114-3.774-.172-5.661-.045-1.423-.096-2.886-.658-4.193a5.766 5.766 0 00-3.486-3.16 5.756 5.756 0 00-4.672.559c-2.621 1.594-6.346 1.688-9.409 1.509-3.062-.18-6.253-2.079-6.896-5.08-.304-1.416-.022-2.922-.428-4.312-.855-2.935-4.282-4.181-7.29-4.73-5.447-.998-12.607-1.454-15.529-7.029-.781-1.49-.934-3.771-2.443-4.761-2.391-1.563-5.896.34-8.532-.167-.681-.131-1.459-.55-1.451-1.243.003-.303.161-.578.275-.857.525-1.298.077-3.131-1.392-3.334-1.701-.235-3.827.287-5.473.688-5.123 1.242-12.954 3.907-10.86 10.87z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M173.472 62.711c-.579.585-.517 1.583-.097 2.29.421.707 1.115 1.197 1.772 1.691.658.495 1.323 1.046 1.633 1.808.48 1.174-.002 2.512-.6 3.63-.596 1.119-1.331 2.24-1.373 3.509-.048 1.461.868 2.817 2.047 3.682 1.18.864 2.6 1.321 3.991 1.765 1.909.608 3.949 1.222 5.882.694 1.179-.322 2.207-1.043 3.349-1.481 2.016-.772 4.245-.619 6.403-.684 2.158-.063 4.481-.437 6.001-1.969 1.823-1.835 2.442-5.778 1.257-8.124-1.255-2.485-5.377-2.743-7.726-2.375-2.899.455-5.584 1.775-8.417 2.539-1.027.276-2.149.474-3.13.063-1.162-.484-1.826-1.679-2.562-2.7a13.11 13.11 0 00-5.661-4.449c-.908-.37-2.078-.587-2.769.111z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M158.297 65.275c-.813.222-1.587.753-1.881 1.543-.446 1.201.317 2.583-.065 3.805-.265.849-1.021 1.433-1.531 2.159-.604.86-.855 2.012-.472 2.99.324.825 1.042 1.429 1.792 1.903a10.908 10.908 0 003.615 1.461c.771.158 1.602.227 2.317-.1 1.163-.528 1.657-1.896 1.937-3.143.278-1.247.513-2.613 1.458-3.474.454-.413 1.036-.668 1.477-1.096.766-.744.983-1.925.77-2.971 0-1.007-.996-2.64-2.014-2.913-1.506-.406-3.34-.226-4.89-.304-.842-.04-1.7-.081-2.513.14z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M167.372 75.12a3.564 3.564 0 00-.44 3.297c.352.93 1.086 1.672 1.92 2.211.604.391 1.308.694 2.023.629 1.037-.095 1.889-.983 2.145-1.991.256-1.01-.002-2.094-.493-3.012-.42-.789-1.309-2.352-2.268-2.562-1.034-.229-2.317.64-2.887 1.428z"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            className="nunavut"
            d="M153.984 52.536c.589-.095 1.181-.298 1.771-.209.714.108 1.298.627 1.748 1.193.45.565.814 1.203 1.337 1.702 1.051 1.005 2.715 1.309 4.054.739.367-.155.721-.383.928-.723.412-.673.137-1.553-.247-2.243-.385-.689-.882-1.372-.902-2.161-.023-.846.517-1.649.409-2.489-.119-.922-.977-1.567-1.836-1.917-.859-.35-1.806-.522-2.573-1.042-.536-.363-.953-.874-1.361-1.377-.407-.504-.822-1.016-1.354-1.383-.534-.366-1.215-.573-1.838-.399-.827.229-1.203.934-.707 1.592.535.709 1.022 1.42 1.395 2.233.272.597.473 1.347.076 1.869-.224.294-.585.439-.908.619a3.968 3.968 0 00-1.688 1.855c-.244.552-.337 1.25.043 1.718.375.464 1.063.517 1.653.423z"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M173.516 42.244c.611.03 2.722-.211 1.97.869-.619.892-2.206 1.258-3.021 1.988-.815.728-1.421 1.768-1.367 2.857.064 1.313 1.029 2.383 1.938 3.332 1.299 1.355 2.879 2.386 4.586 1.12.991-.706 2.484-1.639 2.857-2.872.379-1.257.536-2.62.91-3.899.187-.635.4-1.312.925-1.712.447-.341 1.036-.414 1.558-.622 2.638-1.054 2.065-4.145.677-5.967-.862-1.132-2.164-1.885-3.542-2.238-1.08-.278-2.207-.325-3.295-.571-1.089-.246-2.188-.737-2.812-1.663-.524-.781-.641-1.756-.933-2.65a6.852 6.852 0 00-2.973-3.719c-.936-.558-2.299-.81-2.99.03-.599.727-.317 1.82.105 2.66.424.84.979 1.71.841 2.641-.202 1.373-1.792 2.136-2.229 3.452-.417 1.255.332 2.592 1.19 3.599 1.434 1.681 3.265 3.25 5.605 3.365z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M177.208 27.779c.781 1.084 1.483 2.12 2.674 2.812 1.328.772 3.102.927 4.363.051 0-.134 1.084-1.062 1.234-1.236.365-.425.74-.928 1.246-1.194 1.163-.612 2.125-1.529 3.145-2.386.687-.577 1.526-1.192 2.395-.969.574.147 1.008.656 1.19 1.219.183.564.146 1.177.037 1.759-.195 1.03-.744 2.13-1.754 2.412-.971.271-2.008-.312-2.998-.127a1.992 1.992 0 00-1.396 1.06 1.994 1.994 0 00.007 1.751c.151.301.39.622.274.938-.118.327-.558.42-.888.313-.33-.107-.598-.351-.899-.52-.303-.169-.705-.256-.983-.049-.351.26-.285.833-.003 1.167.281.333.702.505 1.078.727 1.069.631 1.535 1.755 2.405 2.566.926.864 1.711 2.027 1.905 3.296.162 1.07-.198 2.273-1.099 2.874-.586.391-1.468.575-2.168.507-.651-.063-1.177-.339-1.871-.191-.891.188-1.604.917-1.942 1.762-.34.845-.344 1.792-.196 2.689.227 1.385.828 2.74 1.865 3.685 1.038.944 2.543 1.421 3.894 1.044.585.322.865 1.104.619 1.725-.247.62-.989.996-1.635.827-.521-.135-.891-.546-1.243-.926-.395-.424-.954-.696-1.531-.792-.45-.075-.952.017-1.267.348-.415.437-.382 1.113-.461 1.71-.11.833-.557 1.834-1.168 2.429-.301.29-.816.402-1.188.574-.438.201-.869.438-1.178.816-.71.87-.506 2.251.252 3.08.759.829 1.93 1.171 3.052 1.194 1.124.021 2.23-.236 3.337-.43 1.106-.192 2.256-.32 3.345-.042 1.03.265 2.075.89 3.089.559 1.616-.529 1.726-2.971 3.184-3.849.769-.462 1.746-.379 2.61-.139.863.24 1.693.624 2.584.725.891.103 1.902-.155 2.375-.918.615-.997.027-2.32-.79-3.158-1.012-1.036-2.334-1.702-3.63-2.35.812-.812.527-2.958.37-4.098-.05-.355-.151-.709-.12-1.067.079-.933.99-1.555 1.854-1.918.864-.363 1.834-.656 2.375-1.42.557-.787.482-1.883.078-2.757-.543-1.175-.362-2.455-1.27-3.54a4.132 4.132 0 00-2.757-1.443c-.471-.043-.974-.011-1.383-.248-.673-.391-.778-1.373-.45-2.076.33-.705.971-1.204 1.569-1.7a28.76 28.76 0 002.841-2.7c.602-.652 2.174-2.003 2.156-2.925-.021-1.192-.791-2.237-1.043-3.402-.324-1.5.236-3.053.987-4.391.751-1.337 1.705-2.569 2.277-3.992.51-1.263.635-2.637.126-3.917-.153-.391-.302-.708-.617-.99-.372-.332-.877-.545-.889-1.124-.01-.526.45-.923.748-1.358.675-.986.537-2.319.16-3.453-.56-1.688-1.921-3.249-2.876-4.755-.465-.733-1.083-1.554-1.951-1.541-.646.009-1.188.502-1.555 1.036-.365.535-.628 1.146-1.079 1.612-1.492 1.542-3.83.667-5.688.877-1.065.12-2.075.499-3.054.923-.794.346-1.416.427-2 1.123-.728.869-.731 2.114-1.086 3.191-.631 1.923-2.399 3.144-4.341 3.448-1.036.162-2.089.372-2.993.901-.904.53-1.645 1.441-1.713 2.487-.036.543.104 1.124-.133 1.614-.21.434-.673.691-1.139.82-.465.128-.952.156-1.419.278-1.51.396-2.66 1.884-2.665 3.446-.003 1.284.693 2.489 1.619 3.379.922.886 2.476 1.349 3.19 2.337z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M173.315 54.818c-.512-.148-1.046-.266-1.492-.561-.563-.372-.604-.801-.707-1.398-.094-.54-.525-1.075-1.013-1.312-.519-.252-1.194-.196-1.62.195-.479.443-.551 1.179-.457 1.825.095.646.32 1.277.314 1.93-.004.466-.125.922-.182 1.384a4.893 4.893 0 00.468 2.731c.161.326.387.657.733.766.29.092.602.009.894-.074.318-.092.638-.182.958-.271.732-.208 1.475-.419 2.146-.784.67-.363 1.274-.9 1.576-1.602.292-.676.257-1.526-.227-2.081-.351-.402-.878-.6-1.391-.748z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M179.388 59.02c.471.014.926-.273 1.16-.684.234-.408.258-.92.112-1.368-.33-1.005-1.446-1.594-2.503-1.591-.589.001-1.439.193-1.265.937.168.714.695 1.438 1.186 1.967.35.377.795.723 1.31.739z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M205.594 164.454c1.025.802 2.612.215 3.761.826 1.537.817 1.685 3.412 3.381 3.797 1.271.288 2.377-.977 2.782-2.215.405-1.238.477-2.633 1.262-3.672 1.162-1.536 3.436-1.692 5.311-1.249 1.874.441 3.658 1.342 5.582 1.429.773.036 1.711-.182 1.958-.917.218-.649-.242-1.333-.76-1.783-1.444-1.256-3.411-1.666-5.205-2.335-1.793-.669-3.648-1.858-4.026-3.735-.135-.665-.077-1.396-.431-1.976-.336-.55-.969-.834-1.563-1.087l-6.385-2.711c-1.055-.448-3.418-1.358-4.015.22-.451 1.192.657 3.38.761 4.649.14 1.729-.108 3.535-.997 5.026-.56.938-1.356 1.73-1.813 2.724-.459.992-.463 2.336.397 3.009z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M203.338 144.648c1.122-.296 2.294-.226 3.468-.226a22.306 22.306 0 008.508-1.855c1.132-.51 2.234-1.122 3.02-2.071.815-.928 1.265-2.254.908-3.427-.521-1.745-2.529-2.685-3.07-4.428-.612-1.958.948-3.947 1.061-6.02.091-1.896-1.123-3.703-2.704-4.784-1.581-1.061-3.499-1.541-5.375-1.855-2.387-.377-5.386-.267-6.478 1.877-.622 1.285-.306 2.846.276 4.131.611 1.306 1.447 2.479 1.896 3.835.54 1.644.377 3.632-.815 4.917-1.174 1.285-3.5 1.469-4.621.112-1.511-1.826-.112-5.009-1.713-6.794-2.193-2.407-6.928.745-9.304-1.511-1.733-1.672-.51-4.65-1.305-6.926-.878-2.57-3.948-3.499-6.57-4.224-2.591-.744-5.61-2.143-5.926-4.825-.388-3.479 3.968-5.621 4.875-8.977.51-1.938-.163-4.132.735-5.917.683-1.377 2.192-2.213 2.846-3.581 1.02-2.122-.562-4.835-2.795-5.488-2.234-.633-4.713.5-6.181 2.326-1.448 1.826-2.011 4.191-2.122 6.539-.112 2.326.151 4.651.204 6.978.02 2.347-.204 4.733-1.286 6.814-1.112 2.122-3.07 3.896-3.347 6.294-.286 2.499 1.47 4.784 3.388 6.447 1.896 1.673 4.13 3.069 5.417 5.264 1.284 2.183 1.132 5.498-1.103 6.702-1.336.692-2.917.428-4.427.406-1.489-.05-3.245.308-3.896 1.644-.407.856-.296 1.896-.837 2.662-1.02 1.47-3.273.766-4.835-.071-1.551-.826-5.386-2.183-6.018-.54-.388.948-1.898.796-2.571.021-.704-.745-.969-1.826-1.631-2.612-1.061-1.285-2.908-1.58-4.581-1.784-2.03-.225-4.04-.47-6.07-.694-1.305-.162-2.835-.255-3.723.715-1.286 1.407-.245 3.61-.377 5.509-.092 1.244-.796 2.438-1.826 3.162-.143.062-.255.152-.387.225-1.265.653-2.846.633-4.062-.071-3.019-1.714-2.979-6.427-5.772-8.507-1.45-1.062-3.316-1.193-5.102-1.419-1.784-.224-3.703-.673-4.783-2.101-1.245-1.644-.929-3.948-.612-5.979.337-2.05.571-4.151-.836-5.662-3.162 0-6.273-1.387-8.487-3.642a11.512 11.512 0 01-1.171-1.418l-7.038.027c.88 2.497.121 5.342-.46 7.882-.357 1.566-.782 3.253-.517 4.869.337 2.056 1.963 3.109 3.763 3.854 1.627.674 3.251 1.241 4.67 2.319 1.473 1.117 2.657 2.524 3.716 4.031 2.173 3.086 3.763 6.71 6.74 9.149 1.584 1.299 3.301 1.649 5.229 2.137 1.686.427 3.06 1.277 3.695 2.965.678 1.8.684 3.469 2.472 4.595 1.546.974 3.418 1.312 5.177 1.688 4.479.958 9.089 1.686 13.496 2.935 1.596.452 3.233 1.133 4.357 2.398 1.242 1.4 1.504 3.223 1.511 5.028.028 9.409-.243 18.829-.386 28.238 10.075 1.038 20.253 1.52 30.359.831-.213-1.909-.247-3.8.679-5.556 1.041-2.01 2.684-3.724 3.907-5.62 1.846-2.866 3.631-5.754 5.458-8.619.877-1.367 1.754-2.744 2.927-3.877 2.53-2.417 6.294-3.314 8.65-5.957.878-.989.938-2.011 1.347-3.224.541-1.674 1.245-3.11 1.377-4.896.337-4.243-1.286-8.641-3.56-12.21.313-1.118 1.416-1.862 2.548-2.158z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M145.591 89.931c-.612-.897-1.336-1.765-2.356-2.081-1.642-.5-3.428.724-4.08 2.314-.652 1.592-.419 3.397 0 5.061.275 1.102.633 2.203.633 3.346 0 1.132-.429 2.346-1.397 2.948-2.204 1.346-3.408-1.49-3.662-3.172-.397-2.458.389-5.111-.683-7.468-.062-.01-.113-.021-.174-.021-.418-.03-.827.184-1.133.469-.222.203-.406.437-.591.669l-.579 8.954c-.134 2.071-.208 4.157-.422 6.221-.169 1.619-.489 3.266-1.464 4.609-.477.659-1.315 1.172-1.696 1.883-.407.765.02 1.723-.199 2.545-.376 1.416-1.825 1.938-3.158 1.899-2.597-.072-5.493-2.149-8.203-2.384 1.014 1.031 1.761 2.329 2.021 3.768.275 1.571.062 3.233.602 4.733 1.275 3.499 5.804 4.273 9.059 4.122 3.888-.175 7.712-1.785 10.487-4.529.438-.438.867-.918 1.396-1.245.53-.336 1.203-.51 1.785-.306 1.226.438 1.356 2.07 1.918 3.244.97 2.01 3.958 2.673 6.009 2.365 2.561-.377 4.732-2.54 4.732-5.202 0-1.244.336-1.091 1.071-2.07.612-.795.908-1.847.745-2.847-.377-2.356-2.774-3.733-4.233-5.62-1.54-1.979-2.03-4.733-1.265-7.12.409-1.285 1.152-2.51 1.163-3.855.011-1.397-.775-2.663-1.53-3.836-1.5-2.305-2.988-4.61-4.478-6.906-.103-.162-.206-.325-.318-.488z"
            className="nunavut"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M55.365 177.737c.005-.023 0-.043.007-.066 1.155-3.61.53-7.583-1.624-10.702-1.069-1.548-2.515-2.509-3.946-3.673-1.358-1.104-2.185-2.552-1.953-4.341.221-1.694 1.241-3.118 1.738-4.727.571-1.853.002-3.76-.205-5.624-.203-1.833.084-3.448.952-5.077.729-1.37 2.185-3.184 1.519-4.854-.515-1.293-2.431-1.248-3.566-1.549-1.122-.298-2.194-.89-2.59-2.054-.534-1.579.436-2.94 1.295-4.176 1.016-1.461 1.286-2.92 1.27-4.679-.029-3.08-.53-6.25 1.589-8.803.494-.596 1.503-1.379.946-2.191-.354-.516-1.151-.795-1.652-1.145-1.199-.833-1.91-1.962-1.908-3.454.005-1.607.734-3.147 1.435-4.558a29.492 29.492 0 012.849-4.614 31.178 31.178 0 015.98-6.005c-.084-.085-.175-.162-.256-.253-1.398-1.581-1.826-3.794-2.866-5.621-1.041-1.856-3.315-3.407-5.162-2.396-12.619 14.647-25.247 29.266-37.866 43.914-2.122 2.448-4.253 4.968-5.313 8.1-.971 2.877-.735 5.65-3.07 7.978-.747.746-1.679 1.457-2.024 2.412 9.837 7.911 20.772 14.381 32.247 19.623 7.224 3.302 14.637 6.104 22.174 8.535z"
            className="yukon"
          ></motion.path>

          <motion.path
            fill="#2D846D"
            d="M69.938 251.974c-2.289-1.691-4.355-3.094-4.856-6.103-.25-1.494-.146-3.281-1.059-4.568-.733-1.037-1.914-1.67-2.688-2.682-1.972-2.575-.329-6.043.486-8.758l13.381-44.531a298.283 298.283 0 01-12.104-3.158c-21.496-6.129-42.438-15.112-60.315-28.634.365.385.717.779.987 1.205.368.571.572 1.203.686 1.866.224 1.337.029 2.785-.134 4.152-.255 2.04-.326 4.364 1.072 5.875 1.448 1.562 3.846 1.622 5.967 1.652 2.122.04 4.57.348 5.733 2.121.827 1.285.714 2.948.409 4.438-.308 1.488-.786 2.999-.582 4.509.286 2.07 1.805 3.805 2.173 5.865.602 3.305-1.836 6.56-1.408 9.885.367 2.795 4.345 6.763 1.847 9.323-.837.866-1.979 1.255-2.693 2.285-1.347 1.938-.531 3.876.49 5.753 1.355 2.459.274 5.498-.949 8.049-1.193 2.55-2.54 5.396-1.622 8.059.653 1.897 2.326 3.203 3.663 4.692 1.346 1.489 2.458 3.56 1.713 5.437-.479 1.133-1.54 1.897-2.213 2.907-1.021 1.489-1.123 3.387-.704 5.091.458 1.847 1.082 3.102 3.121 3.192.888.041 1.846.03 2.53.592.551.459.785 1.184.888 1.887.265 1.673.551 2.744 1.682 4.04 1.031 1.173 2.092 2.326 2.725 3.774.633 1.438.929 2.999 1.488 4.438.593 1.47 1.582 2.866 3.052 3.387 11.547 3.887 22.492 12.415 34.581 13.812 4.735.552 9.53.524 14.3.691-2.044-7.654-4.501-15.189-6.997-22.708-1.002-3.002-2.012-5.887-4.65-7.835z"
            className="bc"
          ></motion.path>

          <motion.path
            fill="#2D846D"
            d="M178.737 260.226c-.063-2.414.127-4.836 1.055-7.089.861-2.095 2.185-3.921 3.57-5.693 6.454-8.247 13.049-16.389 19.585-24.571-1.505-.075-3.023-.065-4.506-.065-4.63 0-9.701-.43-12.934-3.725-2.775-2.824-3.427-7.019-3.968-10.944-.093-.674-.184-1.336-.275-2.011l-.735-5.405c-.095-.665-.182-1.326-.271-1.988-10.373.713-20.798.227-31.155-.854-.014.009-.026.019-.042.024-.03 6.836-.023 13.672.022 20.507.165 23.898.824 47.791 1.936 71.663 3.095-.96 6.204-1.86 9.384-2.4 5.845-.974 13.588-.989 19.983.896l-.722-12.229c-.316-5.367-.784-10.745-.927-16.116z"
            className="manitoba"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M116.816 193.419c.005-.03.022-.049.028-.078a1326.78 1326.78 0 01-13.561-2.293c-8.753-1.526-17.481-3.224-26.134-5.249l-7.385 24.577c-2.196 7.31-4.393 14.617-6.588 21.928-.483 1.607-1.378 3.654-.224 5.166.739.968 1.858 1.571 2.597 2.554 1.769 2.354.655 5.729 2.562 7.956.943 1.103 2.272 1.818 3.408 2.699a10.863 10.863 0 012.607 2.862c1.683 2.693 2.47 5.985 3.456 8.973 2.193 6.65 4.312 13.328 6.099 20.103 2.453.125 4.896.323 7.315.722 4.643.764 9.172 2.214 13.664 3.812.681-5.404 1.36-10.81 2.042-16.214 3.258-25.855 6.453-51.718 10.114-77.518z"
            className="alberta"
          ></motion.path>
          <motion.path
          animate={animateOntario}
            onTap={() => {
              handleChoice('ontario')
              cycleOntario()}}
            className="ontario"
            fill="#2D846D"
            d="M300.51 301.75a9.413 9.413 0 011.409-1.671c-.742-.657-1.628-1.123-2.71-1.257-2.982-.369-5.539 2.39-8.434 2.783-5.625.768-8.469-5.105-10.882-9.073-1.583-2.601-3.419-4.336-6.408-5.151-2.564-.698-5.238-1.049-7.396-2.735-2.117-1.654-2.749-4.006-2.17-6.584.35-1.56 1.056-3.044 1.16-4.654.104-1.573-.27-3.115-.846-4.57-1.479-3.736-4.316-7.021-5.819-10.733-2.182.887-4.926.598-6.958-.715-2.929-1.866-4.581-5.213-5.642-8.527-1.03-3.295-1.602-6.784-3.061-9.945-1.448-3.143-4.039-6.05-7.446-6.702-4.631-.878-9.384 2.551-13.924 1.214-4.039-1.193-6.109-5.683-9.588-8.1-1.922-1.323-4.144-1.951-6.464-2.25-3.733 4.684-7.467 9.364-11.2 14.047-3.285 4.117-6.679 8.171-9.847 12.379-1.401 1.862-2.674 3.856-3.206 6.152-.579 2.494-.333 5.11-.184 7.639l1.534 25.97c1.972.753 3.774 1.708 5.272 2.92 3.151 2.57 6.427 5.192 10.281 6.539 3.867 1.355 8.487 1.244 11.649-1.326 2.458-1.959 3.692-5.029 5.346-7.691 1.643-2.692 4.284-5.264 7.426-5.06 3.04.184 5.254 2.846 7.242 5.192 4.061 4.804 8.702 9.14 13.803 12.812 2.824 2.062 6.008 4.131 9.322 2.571 3.612-1.715 6.988-2.856 11.059-2.185 3.469.582 6.651 2.275 9.741 3.948 1.675.897 3.521 2.05 3.796 3.906.336 2.163-1.767 4.061-3.929 4.325-1.488.204-2.958-.174-4.335-.673-1.245-.43-2.122-1.356-3.05-.275-1.622 1.948-1.846 5.824-1.305 8.15.274 1.192.795 2.417.56 3.631-.285 1.561-1.663 2.643-2.887 3.651a26.736 26.736 0 00-7.019 9.59c-.489 1.132-.896 2.417-.489 3.59 1.306 3.724 5.641 1.397 7.967.562 3.019-1.081 5.549-2.295 8.211-4.191 3.428-2.418 6.611-5.173 9.538-8.171a76.662 76.662 0 004.295-4.784c.694-.857.857-1.081.918-2.071.072-.999-.204-1.692.521-2.601.795-.97 2.05-1.46 3.295-1.622 1.244-.153 2.509-.062 3.743-.112 2.051-.092 4.091-.581 5.938-1.469.725-.337 1.438-.766 1.938-1.377.5-.622.745-1.489.479-2.234-.592-1.51-2.754-1.602-3.866-2.774-1.806-1.938.163-4.264.775-6.182.469-1.515 1.01-2.872 1.847-4.106z"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M147.062 197.662c-.964-.107-1.927-.221-2.889-.338-8.5-1.032-16.983-2.304-25.445-3.677.015.098.033.193.018.304a2528.976 2528.976 0 00-3.01 21.938c-3.185 23.966-6.149 47.96-9.164 71.946 9.082 3.299 18.061 6.884 27.584 6.265 5.101-.335 9.987-1.867 14.883-3.407-.283-6.018-.543-12.034-.767-18.054a1812.684 1812.684 0 01-1.21-74.977z"
            className="sask"
          ></motion.path>

          <motion.path
          animate={animateNwt}
            onTap={() => cycleNwt()}
            fill="#2D846D"
            d="M51.661 104.789c-.983 1.603-2.223 3.572-2.408 5.485-.193 1.99 1.69 2.302 2.854 3.436.992.968 1.128 2.352.428 3.536-.816 1.377-1.977 2.21-2.264 3.888-.524 3.074.601 6.271-.674 9.247-.429 1.002-2.665 3.155-1.889 4.255.613.87 2.568.794 3.494 1.104 2.958.993 3.271 4.052 2.071 6.592-.833 1.765-2.022 3.192-1.969 5.248.047 1.794.619 3.549.524 5.354-.096 1.794-.944 3.247-1.596 4.877-.34.851-.655 1.838-.239 2.723.324.69.999 1.187 1.594 1.628 2.518 1.872 4.426 4.027 5.518 7.019a14.004 14.004 0 01.194 9.024c-.016.051-.049.08-.07.125 16.663 5.226 33.904 8.67 51.099 11.567 13.052 2.199 26.15 4.386 39.313 5.826l.209-15.013.113-8.167c.02-1.401.044-2.805.058-4.207.014-1.197.07-2.509-.495-3.606-.834-1.623-2.772-2.246-4.422-2.665-2.144-.545-4.331-.947-6.493-1.409-2.399-.514-4.802-1.018-7.199-1.54-1.596-.347-3.217-.758-4.647-1.566-1.361-.768-2.423-1.895-2.954-3.377-.33-.92-.366-1.995-.863-2.848-.534-.915-1.551-1.166-2.517-1.385-1.739-.395-3.338-.812-4.821-1.854-1.425-1.002-2.601-2.271-3.648-3.652-2.271-2.997-3.784-6.592-6.528-9.219-1.453-1.391-3.168-2.084-4.999-2.828-1.508-.613-2.982-1.336-4.001-2.65-1.779-2.297-1.357-5.282-.778-7.926.593-2.7 1.795-5.95.031-8.447-.45-.638.156-1.502.863-1.505 2.504-.01 5.01-.021 7.514-.029-1.121-2.352-2.026-5.049-4.436-5.828-2.254-.745-5.009.632-6.947-.724-1.896-1.347-1.53-4.325-2.866-6.223-1.062-1.562-3.091-2.163-4.968-2.143-1.887.041-3.693.603-5.549.949-3.856.714-7.824.449-11.752.153-.244-.021-.469-.021-.725-.071-1.693-.112-3.438-.336-4.958-.959a8.105 8.105 0 01-.689-.314 28.6 28.6 0 00-7.513 8.119z"
            className="nwt"
          ></motion.path>

          <motion.path
            animate={animateNfld}
            onTap={() => {
              handleChoice('nfld')
              cycleNfld()
            }
            }
            

            
            fill="#2D846D"
            d="M297.774 174.258c1.445.562 3.07.266 4.461 1.055 1.175.666 1.893 1.819 2.469 3.001.7 1.436 1.345 2.771 2.497 3.917 1.19 1.184 2.61 2.096 4.032 2.974 4.191 2.587 9.478 6.009 8.448 11.751-.429 2.396-2.216 4.222-4.601 4.726-2.718.572-5.097-.406-7.627-1.227-1.285-.415-3.21-.816-4.146.497-.836 1.176-.097 2.847.573 3.895.888 1.389 2.03 2.568 2.74 4.074.606 1.291.998 2.653 1.359 4.029.69 2.619 1.396 5.808 3.928 7.286 1.34.782 2.94.979 4.307 1.724 1.013.554 1.892 1.322 2.796 2.031 1.058.83 2.258 1.721 3.667 1.706 1.521-.015 2.885-1.013 3.332-2.466.906-2.954-2.538-4.578-2.461-7.414.053-1.943 1.81-3.782 3.804-2.758.981.505 1.496 1.487 2.206 2.28 1.132 1.264 2.591.825 3.937.112 2.975-1.577 5.741-3.701 8.555-5.549l8.579-5.637c2.339-1.538 4.687-3.238 7.617-2.321.973.305 2.693 1.413 4.247 1.835.051-.074.103-.148.15-.223l.245-.367c1.326-2.051 2.295-4.192 1.836-6.835-.479-2.632-2.325-5.212-5.121-5.59-3.366-.449-6.772-1.356-10.2-1.266-.561-1.51-1.152-3.02-2.082-4.305-.938-1.316-2.273-2.397-3.835-2.714-1.938-.356-3.876.479-5.682 1.307-2.531 1.203-5.1 2.396-7.855 2.754-2.773.389-5.813-.245-7.73-2.255-2.082-2.162-2.603-5.568-4.917-7.446-1.836-1.469-4.295-1.643-6.59-1.959-2.57-.336-4.765-1.02-6.049-3.346-.652-1.192-1.51-2.142-2.396-3.172-.714-.837-2.204-3.458-3.172-3.795a4.752 4.752 0 00-2.103-.184c-1.255.167-2.449.804-3.338 1.719.455.819.782 1.731 1.055 2.637.568 1.898.96 4.701 3.065 5.519z"
            className="nfld"
          ></motion.path>
          <motion.path
            animate={animateNfld}
            onTap={() => {
              cycleNfld()
              handleChoice('nfld')
            }
            }
            
            // fill="#2D846D"
            d="M393.61 214.12c.396-2.032-.467-4.076-1.308-5.969-.307-.688-.622-1.394-1.148-1.931-.526-.539-1.315-.888-2.042-.687-1.614.447-1.939 3.134-3.611 3.254-1.522.11-2.297-2.08-3.806-2.324-1.265-.203-2.251 1.024-2.952 2.096-.654.996-1.712 2.119-2.823 1.691-.804-.309-1.109-1.273-1.216-2.127-.107-.852-.15-1.793-.738-2.42-.845-.899-2.394-.706-3.34-1.498-1.164-.976-.831-2.63-.285-3.825.297-.65.775-1.16-.078-1.416-1.403-.419-3.479 1.538-3.814 2.72-.509 1.789.402 3.727-.44 5.468-.706 1.46-2.436 2.208-3.156 3.66-.846 1.704-.051 3.714.509 5.533a21.53 21.53 0 01-.106 12.912c-.456 1.398-1.063 2.786-1.089 4.258-.025 1.471.73 3.09 2.144 3.497 1.153.333 2.397-.233 3.277-1.05.88-.815 1.504-1.864 2.271-2.785.77-.923 1.77-1.758 2.962-1.882.906-.095 1.852.229 2.718-.051 1.526-.493 1.907-2.443 2.911-3.696 1.679-2.09 5.259-2.333 6.247-4.823.259-.653.326-1.444.874-1.886.667-.534 1.746-.196 2.221.515.476.711.469 1.644.284 2.479-.184.834-.522 1.632-.664 2.476-.141.843-.049 1.788.527 2.42 1.038 1.139 3.106.554 3.917-.758.811-1.312.694-2.981.409-4.496-.285-1.516-.712-3.059-.432-4.573.308-1.678 1.451-3.109 1.777-4.782z"
            className="nfld"
          ></motion.path>

          <motion.path
            animate={animateNwt}
            onTap={() => cycleNwt()}
            fill="#2D846D"
            d="M129.253 105.826c.139-2.031.262-4.062.394-6.094l.406-6.29c-.382.104-.775.172-1.171.149-2.866-.132-4.885-3.999-8.048-2.488-2.021.969-2.479 3.723-4.233 5.1-1.49 1.185-3.57 1.122-5.448 1.459-1.876.336-3.978 1.591-3.885 3.489.071 1.346 1.275 2.396 2.539 2.836 1.275.449 2.653.458 3.969.714 1.335.245 2.61.755 3.765 1.469.948.593 1.836 1.367 2.244 2.408.407 1.04.203 2.376-.693 3.04-1.184.867-8.864-1.724-6.682 1.356.152.225.356.407.57.592.24.183.513.341.795.491 2.703-.942 5.568.462 8.187 1.413.848.307 1.756.619 2.667.639.398.009 1.003-.009 1.229-.431.164-.307-.044-.996-.04-1.341.021-1.624 1.099-2.339 2.057-3.475 1.157-1.374 1.262-3.325 1.378-5.036z"
            className="nwt"
          ></motion.path>

          <motion.path
          
          animate={animateNwt}
            onTap={() => cycleNwt()}
            fill="#2D846D"
            d="M121.16 60.437c.188 1.316-.779 2.509-1.021 3.816-.395 2.136 1.34 4.251 3.427 4.848 2.088.596 4.353-.03 6.259-1.068 1.256-.684 2.42-1.541 3.729-2.113a114.65 114.65 0 001.431-9.522c-.149.03-.303.041-.458.018-.76-.115-1.266-.862-1.48-1.601-.215-.737-.242-1.528-.534-2.239-.526-1.275-1.849-2.081-3.201-2.354-1.252-.253-2.478.015-3.728-.081-1.125-.086-1.985-.067-3.112.243-1.326.367-2.638.961-3.552 1.989-.914 1.029-1.349 2.564-.801 3.828.698 1.619 2.79 2.488 3.041 4.236z"
            className="nwt"
          ></motion.path>
          <motion.path
          animate={animateNwt}
            onTap={() => cycleNwt()}
            fill="#2D846D"
            d="M137.911 65.752c4.009 2.061 2.864 9.023 8.776 8.932 2.067-.032 3.528-1.567 3.461-3.644-.095-2.939-3.021-3.493-4.755-5.254-1.547-1.572-1.83-4.042-1.375-6.2.455-2.157 1.532-4.125 2.401-6.152.809-1.887 1.535-4.53.489-6.454a4.424 4.424 0 00-3.362-2.246c-2.004-.212-3.955 1.032-5.069 2.711a8.849 8.849 0 00-.966 1.979 117.547 117.547 0 01-1.817 15.934c.77-.059 1.534.044 2.217.394z"
            className="nwt"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M334.561 260.694c.449-1.475-.171-3.144.001-4.663.323-2.852 2.065-5.346 4.503-6.819 1.251-.756 2.622-1.188 4.049-1.462 1.12-.214 2.823-.471 3.482-1.493-.354-.809-.975-1.506-1.999-1.998-.021 0-.051 0-.071-.021-2.295-1.062-5.569-.133-7.763.816-5.069 2.183-9.048 6.967-10.037 12.424-.296 1.673-.856 3.907-2.55 3.907-1.041 0-1.847-1.021-2.009-2.051-.153-1.041.183-2.062.52-3.051 1.714-5.05 3.458-10.181 6.52-14.524a28.113 28.113 0 016.497-6.55c2.265-1.603 4.743-2.887 7.313-3.896 2.122-.867 4.305-1.562 6.407-2.488 1.896-.837 3.57-2.01 5.396-2.928 3.54-1.785 4.192-4.244 3.928-8.263-.205-2.703-.684-5.529.265-8.079.547-1.45 1.417-2.781 2.317-4.085a8.278 8.278 0 01-.814-.314c-1.612-.726-3.196-1.856-5.042-1.354-1.74.475-3.377 1.891-4.855 2.861-3.336 2.192-6.673 4.386-10.009 6.576-1.634 1.073-3.258 2.165-4.901 3.221-1.287.827-2.739 1.628-4.302 1.704-1.292.062-2.407-.459-3.261-1.411-.44-.491-1.306-2.199-2.09-1.961-.671.206-.537 1.373-.368 1.845.25.696.763 1.287 1.176 1.89.699 1.013 1.218 2.076 1.298 3.322.165 2.604-1.591 5.02-4.118 5.665-2.632.674-4.76-.771-6.726-2.332-1.192-.948-2.329-1.683-3.788-2.173-1.354-.455-2.646-.897-3.74-1.851-2.117-1.84-2.943-4.655-3.628-7.268-.404-1.54-.783-3.115-1.548-4.524-.752-1.39-1.894-2.513-2.684-3.878-1.203-2.079-1.527-5.124.724-6.646 2.382-1.613 5.073-.338 7.478.452 2.416.794 6.036 1.109 7.295-1.696 1.207-2.687-.438-5.585-2.4-7.372-2.247-2.046-5.094-3.285-7.507-5.109-1.157-.874-2.211-1.851-3.057-3.036-.753-1.055-1.185-2.261-1.802-3.389-.842-1.536-1.901-1.927-3.598-2.152-1.191-.158-2.323-.387-3.285-1.146-1.554-1.229-2.152-3.204-2.682-5.032-.208-.72-.406-1.496-.681-2.229a4.45 4.45 0 00-.206.979c-.185 2.184 1.02 4.213 1.99 6.202.877 1.733 1.601 3.814 1.08 5.642-.07.225-.133.448-.255.673-1.122 2.397-4.845 2.938-7.19 2.511-1.377-.256-2.662-.857-3.907-1.49-2.642-1.356-5.365-2.979-6.671-5.62-1-2.03-1.041-4.354-1.408-6.569-.355-2.233-1.234-4.601-3.223-5.66-1.754-.949-3.907-.612-5.886-.226-1.897.357-3.929.612-5.805 1.081-2.5.633-4.58 1.489-7.243 1.54-2.724.062-5.478-.184-8.182.225-2.733.398-5.467 1.622-6.956 3.929-1.49 2.295-1.214 5.813 1.081 7.304 1.561 1.02 3.754.989 5.059 2.306 1.082 1.062 1.286 2.662 1.439 4.151.316 3.203.663 6.406 1 9.609.091.896.152 1.896-.337 2.642-.551.806-1.653 1.173-2.062 2.07-.428.948.204 2.102 1.082 2.643.888.54 1.969.632 3.01.744 3.61.356 5.845 2.979 8.385 5.346 2.265 2.143 4.314 4.876 4.386 7.987.113 6.926-9.251 11.129-9.323 18.055-.041 4.193 3.365 7.468 6.069 10.67 2.704 3.203 4.917 7.968 2.479 11.396a2.67 2.67 0 01-.387.459c-.099.113-.223.198-.333.301 1.672 4.799 5.969 8.855 6.829 13.984a10.762 10.762 0 01-.153 4.344c-.335 1.392-.968 2.744-1.088 4.182-.261 3.16 2.88 4.562 5.452 5.223 2.711.694 5.422 1.163 7.589 3.08 1.941 1.717 3.123 4.103 4.406 6.307 1.3 2.232 3.118 4.872 5.831 5.438 2.701.562 5.047-1.555 7.469-2.371 2.435-.82 4.869-.254 6.8 1.413.089.075.163.162.247.24a12.472 12.472 0 011.62-.877c3.091-1.448 6.784-1.847 10.19-2.581 4.672-.969 9.834-3.52 10.62-8.212.366-2.183-.316-4.376-.623-6.59-.438-3.132 0-6.354 1.122-9.312.5-1.325 1.254-3.499 2.417-4.846.388-.459.825-.826 1.326-1.021.093-.052.203-.093.315-.112a2.74 2.74 0 01.421-.062c.207-.337.431-.667.683-.981.929-1.18 2.537-2.108 2.987-3.585z"
            className="quebec"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M362.015 263.079c2.551-3.61-4.405-1.977-9.292-.837-4.292 1.001-6.232-6.682-5.662-11.058.117-.882.211-1.797.196-2.681-1.104.663-2.522.998-3.763 1.251-3.036.618-5.776 2.537-6.557 5.674-.41 1.649.138 3.265-.036 4.923-.142 1.355-.834 2.416-1.768 3.373-.672.688-1.329 1.326-1.896 2.054.562.361 1.021.873 1.255 1.493.601 1.602-.112 3.52.673 5.009.855 1.652 2.958 2.009 4.764 2.325 1.805.337 3.927 1.102 4.263 2.907.226 1.203-.428 2.347-.704 3.52-.264 1.173.185 2.774 1.379 2.846.989.041 1.642-.969 2.101-1.846 1.397-2.775 2.816-5.55 4.213-8.324.174-.341.304-.716.543-1.014 1.242-1.545 1.688-1.307 2.117-1.67 5.857-.665 6.56-4.438 7.022-5.745.119-.337.98-2.288 1.152-2.2z"
            className="nb"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M362.163 268.315c.345-.299-.26 3.592 1.211 3.436 1.535-.163 3.114-.193 3.541.026.989.479 1.307 1.805.989 2.846-.337 1.04-1.132 1.877-1.969 2.591-.807.726-1.684 1.429-2.255 2.348-.877 1.447-.877 3.294-.357 4.927.521 1.733 1.979 5.549 4.336 4.58 1.826-.745 2.856-3.162 3.428-4.896 1.216-3.724 1.193-8.619 4.602-11.2 2.102-1.57 4.896-1.663 7.508-2.051 2.601-.377 5.467-1.377 6.478-3.814.929-2.274-.152-4.029-.837-6.131a13.648 13.648 0 01-.355-7.242c.355-1.603 1.02-3.295.447-4.855-.651-1.713-2.773-2.591-4.601-2.203-1.806.377-3.243 1.775-4.172 3.377-.929 1.603-1.396 3.428-1.896 5.212-.521 1.766-1.062 3.57-2.143 5.08-2.212 3.132-7.92 3.803-11.049 3.023-.369-.093-2.072 3.169-2.646 4.39-.172.364-.242.546-.146.402"
            className="nova"
          ></motion.path>
          <motion.path
            fill="#2D846D"
            d="M372.857 255.117c-2.551 3.611-5.14 1.091-9.088-.897-3.947-1.958-8.757-1.183-8.186-5.559.115-.882-.171-1.735-.188-2.618-1.104.663-.51-.26-1.751-.007-3.036.618-2.907.06-3.687 3.194-.41 1.649.109.653-.062 2.312-.142 1.356 2.309.536 1.374 1.493-.672.689 10.773.817 2.29 3.786.562.361 2.502.451 3.149.596 6.765 1.515 6.776.448 7.562 1.938.855 1.651 5.693-.948 7.499-.632"
            className="pei"
          ></motion.path>
        </g>
      </svg>
      <div>
        <h4>Provincial Facts</h4>
        <p>
          Words about provinces goes here
          <p>{provData[provChoice].population}</p>
          <p>{provData[provChoice].capital}</p>
          <p>{provData[provChoice].bio}</p>
        </p>
      </div>
    </div>
  );
};

export default Canada;
