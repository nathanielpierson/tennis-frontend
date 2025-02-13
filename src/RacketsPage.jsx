import axios from "axios";
import { useState, useEffect } from "react";
import { RacketsIndex } from "./RacketsIndex";
import { RacketsNew } from "./RacketsNew";
import { Modal } from "./Modal";

export function RacketsPage() {
  const [rackets, setRackets] = useState([]);
  const [modalIsOn, setModalIsOn] = useState(false);
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
const openModal = () => {
  console.log("modal")
  setModalIsOn(true)
}

  useEffect(handleIndex, []);

  return (
<div>
<RacketsNew />
<RacketsIndex rackets={rackets} onShowRacket={openModal}/>
<Modal show={modalIsOn}/>
</div>
  )
}