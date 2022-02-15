import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home/Home";
import page1 from "./Screens/Page1/page1";
import page2 from "./Screens/Page2/page2";
import page3 from "./Screens/Page3/page3";

const Stack = createNativeStackNavigator(); 

export default () =>{
  return(
  <NavigationContainer>
    <Stack.Navigator>
     
     <Stack.Screen 
       name="Home"
       component={Home}
       options={{headerShown: false}}
     />

    <Stack.Screen 
       name="Content"
       component={Content}
     />


    </Stack.Navigator>
  </NavigationContainer>


  );
}
