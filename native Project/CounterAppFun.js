import React,{useState} from "react";
import {ImageBackground, Text, View , Button , StyleSheet} from 'react-native';
// import { useState } from "react/cjs/react.production.min";
import wallpaper from './image/wallpaper.jpg';

const CounterAppFun = () => {

    const [counter,setCounter] = useState(0);
    const [countTask, setCountTask] = useState(0);

    const increamentHandler = () =>{
        setCounter (counter + 1);
        setCountTask (countTask + 1);
    };
    const decreamentHandler = () =>{
        setCounter (counter - 1);
        setCountTask (countTask + 1);
    };
    const resetHandler = () =>{
        setCounter (0);
        setCountTask (0);
    };

    return(
        <View style = {styles.screen}>
            <ImageBackground source={wallpaper} style={styles.imgbg}>


            <View style = {styles.textContainer}>
            <Text style={{color:'blue',fontSize:30 }}>{counter}</Text>
            </View>

            <View>
            <Text style={{color:'red',paddingBottom:90,fontSize:30 }}>{"Total tap: " + countTask}</Text>
            </View>

            <View style = {styles.horizondalButtonContainer}>
            <View style = {[styles.butonContainer, {flex:1}]}>
            <Button title = "decreament" color={'red'} onPress={decreamentHandler}/>
            </View>

            <View style = {[styles.butonContainer, {flex:1}]}>
            <Button title = "incerament"  color={'green'} onPress={increamentHandler} />
            </View>
            </View>
            
            <View style={styles.resetbtn}>
            <Button title = "reset" color={'orange'} onPress={resetHandler}/>
            </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    imgbg:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:null,
        width:null,
    },
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    textContainer:{
        width:100,
        padding:20,
        margin:10,
        borderRadius:10,
        borderColor:'blue',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
    },
    horizondalButtonContainer:{
        flexDirection:'row',
        alignItems:'center', 
    },
    butonContainer:{
        margin:10,
        padding:30,
    },
    resetbtn:{
        width:'100%',
        borderRadius:'50%'
    },

});


export default CounterAppFun;