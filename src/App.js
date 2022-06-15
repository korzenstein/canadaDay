import './App.css';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import Distance from './components/Distance';



const App = () => {
  const [objData, setObjectData] = useState([])


  useEffect(() => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    onValue(dbRef, (response) => {
      const newState = []
      console.log(response.val());
      const data = response.val()
      for (let key in data) {
      newState.push(data[key]);
  }
      setObjectData(newState)
    })

}, [])




  return (
    <div className="App">
      <Distance/>
    

    <div className="container">
      
      
      <ul>

        {/* {objData[0].map(obj => {
        return (
          <li>
          <p>{obj.player}</p>
          <p>{obj.era}</p>
          </li>
        )
      
      })} */}
      </ul>
      </div>
    </div>
  );
}

export default App;
