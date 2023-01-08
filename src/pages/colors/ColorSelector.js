import { useState, useEffect } from 'react';
import Dot from "./Dot"
import { db } from "../../fireStore";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

function ColorSelector() {
  const [ colors, setColors ] = useState([{name: "Loading..."}]);
  console.log(colors);

  useEffect(
    ()=>
      onSnapshot(collection(db, 'colors'), (snapshot)=>
        setColors(snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})))
      ),
    []
  );

  const handleNew= ()=> {
    const colRef = collection(db, "colors")
    const payload = { name: "Black", value: "#000" };
    addDoc(colRef, payload);
  }
  return (
    <div className="root">
      <button onClick={handleNew}>New</button>

      <ul>
        {colors.map((color)=> ( 
          <li key={color.id}>
            <a href="#">edit</a> <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColorSelector;