import React from "react";
import { View, Text } from "react-native";

export default (props) =>{
  console.log(props)
  return (
    <View>
      <Text>
        {/* {route.params.selected} */}
        {route.params.veiculo}
        </Text> 
    </View>
  );

}