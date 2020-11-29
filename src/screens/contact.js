import React, { useState } from "react";
import {StyleSheet,View,Text,TextInput,Button,TouchableOpacity} from "react-native";
import { cos } from "react-native-reanimated";


function Contact(){
    const [todo,changeTodo] = useState([]);
    let [value,changeValue] = useState();

    const getValue = (e)=>{
        console.log("its running,value===>");
        changeValue (e);
    }
    const addItem = ()=>{
            changeTodo([...todo,value]);
    }
const deleteItem=(v,i)=>{
        let old_todo = [...todo];
        old_todo.splice(i,1);
 
        changeTodo(old_todo);
}
    return(
        <View style={styles.container}>
    <TextInput onChangeText={(e)=>getValue(e)}style={styles.input} placeholder="enter todo value"/>
    <View style={{marginTop:5}}>
        <Button onPress={()=>addItem()} title={"Add Item"}></Button>
    </View>
    <View style={{display:"flex"}}>
      <ul>
          {todo.map((v,i)=>{
          return (  
          <li key={i}>
              <Text>{v}</Text>
        <View style={{display:"inline"}}>
            <TouchableOpacity style={styles.customBtn}>
                <Text onPress={()=>deleteItem(v,i)}>Delete Item</Text>
            </TouchableOpacity>
            </View>
              </li> 
          
                        
          )})}
      </ul>
      </View>
        </View>
    ) 
}

export default Contact;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white",
        alignItems : "center",
        fontSize: 32,
    },
    input:{
                width:150,
                height:25,
                marginTop:50,
                paddingLeft:5,
                border:"1px solid black",
    },
    BtnStyle:{
                width:150,
                height:50
    },
    customBtn:{
            backgroundColor:"lightblue",
            width:120,
            display:"flex",
            alignItems:"Center",
            justifyContent:"Center",
            height:30,
            color:"black",
            borderRadius:7
    },
})