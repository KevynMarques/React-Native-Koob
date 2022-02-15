import React from "react";
import { View, Text, StatusBar } from "react-native";

export default () =>{

  return (
    <View>
      <StatusBar
     barStyle = "dark-content"
     hidden = {false}
     backgroundColor = "#5a23d8"
     translucent = {false}
/>
      <Text>teste</Text>
    </View>
  );

}