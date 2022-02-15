import React from "react";
import { View, Text, StatusBar } from "react-native";

export default () =>{

  return (
    <View>
      <StatusBar
     barStyle = "dark-content"
     hidden = {false}
     backgroundColor = "#0066CC"
     translucent = {true}
     networkActivityIndicatorVisible = {true}
/>
      <Text>teste</Text>
    </View>
  );

}