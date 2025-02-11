import axios from "axios";
import { useState, useEffect } from "react";
import { RacketsIndex } from "./RacketsIndex";

export function RacketsPage() {
  const [rackets, setRackets] = useState([]);
  const handleIndex = () => {
    console.log('doing something...');
    axios.get('http://localhost:3000/rackets.json')
    .then(function (response) {
      // handle success
      console.log('inside the .then')
      console.log(response.data);
      setRackets(response.data);
    })
    console.log('after the .then')   
  }
  return (
<RacketsIndex rackets={rackets}/>
  )
}