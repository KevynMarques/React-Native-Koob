import React from "react";
import { View, Text, StatusBarIOS } from "react-native";

export default () =>{

  return (
    <View>
      <StatusBar
     barStyle = "dark-content"
     hidden = {true}
     backgroundColor = "#ff1010"
/>
      <Text>teste</Text>
    </View>
  );

}