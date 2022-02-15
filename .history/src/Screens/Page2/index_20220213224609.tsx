import React,{useState, useEffect} from "react";
import { View } from "react-native";
import { api } from "../../Services/api";

export default ({route}: any)=>{
  const [modelo, setModelo ] =  useState([]); 
  const {selected, veiculo} = route.params;

  return(
    <View>
       {selected}
    </View>
  );
}