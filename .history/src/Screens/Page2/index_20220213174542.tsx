import React from "react";
import { View, Text } from "react-native";

export default (props) =>{
  return (
    <View>
      <Text>
        {route.params.selected}
        {route.params.veiculo}
        </Text> 
    </View>
  );

}