import React from "react";
import {StatusBar, StyleSheet, Text, View, Button} from 'react-native';

export default class CounterApp extends React.Component{
    state = {
        value:0,
        total_taps:0
    }

    increamentValue = () => {
        this.state({
            value: this.state.value + 1,
            total_taps: this.state.total_taps + 1
        })
    }

    decreamentValue = () => {
        this.state({
            value: this.state.value - 1,
            total_taps: this.state.total_taps + 1
        })
    }


    render () {
        return(
        <View style={styles.container}>
            <Text style={{ fontSize:60, marginBottom: -20}}>{this.state.value}</Text>
            <Text style={{ fontSize:12, padding:20, color:'grey'}}>{"Total taps: " + this.state.total_taps}</Text>
            <StatusBar style="auto" />
            <View style={{flexDirection:'row'}}>
                <Button onPress={this.state.decreamentValue} title="Decrease" />
                <Text>  </Text>
                <Button onPress={this.state.increamentValue} title="increase" />
            </View>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
});