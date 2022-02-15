import React from "react";
import { View, Text, StatusBar } from "react-native";

export default () =>{

  return (
    <View>
      <StatusBar
     barStyle = "dark-content"
     hidden = {false}
     backgroundColor = "#20d184"
     translucent = {true}
/>
      <Text>teste</Text>
    </View>
  );

}