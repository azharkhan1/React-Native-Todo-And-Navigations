import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../../src/screens/home";
import About from "../../src/screens/about";
import Contact from "../screens/contact";
import {Image} from "react-native";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{title:"Todo Application"}}name="Contact" component={Contact} />
      <Stack.Screen options={{title:"My Home Screen",headerStyle:{
          backgroundColor:"Orange",
      },
        headerTitle : props=> <Image style={{width:100,height:100,resizeMode:"contain"}}source={{uri:"https://blog.hubspot.com/hubfs/image8-2.jpg"}}/>
      }} name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;