import React from "react";
import { View, Text } from "react-native";

export default ({selected, veiculo} :any) =>{

  return (
    <View>
      <Text>
        {selected}
        </Text> 
    </View>
  );

}