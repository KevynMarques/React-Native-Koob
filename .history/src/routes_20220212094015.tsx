import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home/Home";
import Page1 from "./Screens/Page1/page1";
import Page2 from "./Screens/Page2/page2";
import Page3 from "./Screens/Page3/page3";
import Page4 from "./Screens/Page4/page4";

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
       name="Page1"
       component={Page1}
     />


    </Stack.Navigator>
  </NavigationContainer>


  );
}
