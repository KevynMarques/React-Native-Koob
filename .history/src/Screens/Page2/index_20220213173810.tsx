import React from "react";
import { View, Text } from "react-native";

export default ({route} :any) =>{

  return (
    <View>
      <Text>
        {route.selected}
        {route.veiculo}
        </Text> 
    </View>
  );

}