import React from "react";
import {StyleSheet,View,Text,Button,TouchableOpacity} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { back } from "react-native/Libraries/Animated/src/Easing";
import Navigation from "../config/navigation";


function Home(props){
    return(
        <View style={styles.container}>
         <Button  onPress={()=>props.navigation.navigate("Contact")}title="Todo Application"/>
         <View style={styles.btnStyle}>
          <Button  tyle={styles.btnStyle} onPress={()=>props.navigation.navigate("About",{name:"azhar"})}title="Goto About"/>
          </View>
        </View>
    ) 
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
        alignItems : "center",
        justifyContent : "center",
        fontSize: 32,
    },
    btnStyle : {
                marginTop:10,
    }
})