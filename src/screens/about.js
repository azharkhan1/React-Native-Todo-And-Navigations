import React from "react";
import {StyleSheet,View,Text} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";


function About({route}){
    const {name} = route.params;
    return(
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    ) 
}

export default About;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
        alignItems : "center",
        justifyContent : "center",
        fontSize: 32,
    }
})