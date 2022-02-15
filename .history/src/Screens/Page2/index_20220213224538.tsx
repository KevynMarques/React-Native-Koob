import React,{useState, useEffect} from "react";
import { ViewBase } from "react-native";
import { api } from "../../Services/api";

export default ({router}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
  const {selected, veiculo} = router.params;

  return(
    <>
     {selected}
     {veiculo}
    </>
  );
}