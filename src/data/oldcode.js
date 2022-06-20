const reusable = [
    { scale: 1, fill: "#2D846D" },
    { scale: 1.02, fill: "#5459ff" },
  ];
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


  const handleUpdate = (prov) => {
  console.log(provData[prov].toggle)
  const inter = ({[provData[prov].toggle]: true})
  console.log(inter);
  // const interArray = Object.entries(inter)
  // console.log(interArray);
  // setProvArray(interArray)
}

  const updateState = () => {
    const newState = provArray.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj[1].toggle === false) {
        return {...provArray, toggle: false};
      }

      // 👇️ otherwise return object as is
      return provArray;
    });
      console.log(newState)

    // setData(newState);
  };

    const filterCheck = (province) => {
    if (province !== provChoice) {
      const notSame = provArray.filter((prov) => {
        console.log(`not the same ${prov}`);
        console.log(notSame)
        
      });
    } else {
      const same = provArray.map((prov) => {
        console.log(`not the same ${prov}`);
      });
      return same
    }
  };

    const isToggleOn = () => {
    const notToggled = provArray.filter(item => item[1].toggle ? null : item)
    // console.log(notToggled)
    setProvArray(notToggled)
  }