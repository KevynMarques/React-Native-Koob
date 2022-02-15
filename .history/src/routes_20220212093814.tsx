import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



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
