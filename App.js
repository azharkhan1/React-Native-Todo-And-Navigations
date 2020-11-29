import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {ImageBackground, Text, View , Image ,TextInput,Button,TouchableOpacity,ScrollView} from 'react-native';
import styles from "./style";
import Home from "./src/screens/home"
import Navigation from "./src/config/navigation";
export default function App() {

  const [name,changeName] = useState("azhar");

  return (
        <Navigation/>

      /* <Text>Open up App.js to start working on your app!</Text>
      <Image 
      style={{resizeMode:"contain",width:"80%",height:200}}
      source={{uri:"https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364"}}/>
     
      <Image source={require("./assets/car.jpg")}
      style={{width:"80%",height:200,resizeMode:"contain"}}
      />
      <TextInput keyboardType={"number-pad"} onChangeText={(e)=>console.log(e)} placeholder="enter value"
      secureTextEntry={true}
      style={styles.input}
      />
     <Button style={style.btn} title={"Touch me"}/>

     <TouchableOpacity activeOpacity={0.8} onPress={()=>changeName("Hahaha")} style={styles.btn}>
       <Text style={styles.btnText}>Click Me</Text>
     </TouchableOpacity>

    <Text>{name}</Text>

    {[1,2,3,4,6,8,9,10].map((v,i)=>{
        return(
        
          <View key={i} style={styles.card}></View>
        
        )
    })} */




  );
}

