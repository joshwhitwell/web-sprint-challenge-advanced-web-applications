import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../api/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getColors()
  }, [])

  const getColors = () => {
    axiosWithAuth()
      .get('/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <ColorList colors={colorList} getColors={getColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
