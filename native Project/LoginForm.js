import React from "react";
import {ImageBackground,Text,View,TextInput,StyleSheet,Button} from 'react-native';
import login_back from './image/login_back.jpg';


function LoginForm(){

    return(

        <View style={styles.mainContainer}>
            <ImageBackground source={login_back} style={styles.imgbg}>
            <View style={styles.mainInputContainer}>
        <Text style={styles.mainHeader}>Sign in Your</Text>
        <Text style={styles.subHeader}>Account</Text>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>User Name :
            </Text>
            <TextInput 
            style={styles.inputStyle}
            automCapitalize='none'
            autoCorrect={false}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Mail-ID :
            </Text>
            <TextInput 
            style={styles.inputStyle}
            automCapitalize='none'
            autoCorrect={false}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Password :
            </Text>
            <TextInput 
            style={styles.inputStyle}
            automCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            />
        </View>
        </View>
        <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => alert('Login Successfully...')}
        />
      </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imgbg:{
        'flex':1,
        'justifyContent':'center',
        'height':null,
        'width':null,
    },
    mainContainer:{
        'height':'100%',
    },
    mainHeader:{
        'fontSize':30,
        'backgroundColor':'rgba(0, 0, 0, 0.4)',
        'textAlign':'center',
        'color':'red',
        'fontWeight':"500",
        'paddingTop':20,
        'paddingBottom':29,
        'textTransform':"capitalize",
        'fontFamily':"bold",
        'borderRadius':10,
        'margin':10,
    },
    subHeader:{
        'fontSize':30,
        'padding':10,
        'textAlign': 'center',
        'color':'#fff',
        'paddingBottom':20,
        'lineHeight':28,
        'fontFamily':'regular',
    },
    mainInputContainer:{
        'backgroundColor':'rgba(255, 255, 255, 0.329)',
        'margin':10,
        'borderRadius':20,
    },
    inputContainer:{
        'marginTop':20,
    },
    labels:{
        'fontSize':24,
        'fontWeight':"500",
        'color':'black',
        'marginTop':10,
        'paddingLeft':40,
        'marginBottom':5,
        'lineHeight':25,
        'fontFamily':'regular',
    },
    inputStyle:{
        'borderWidth':3,
        'borderColor':'#fff',
        'paddingHorizontal':15,
        'margin':13,
        'paddingVertical':7,
        'borderRadius':1,
        'fontFamily':'regular',
        'fontSize':18,
    },
    fixToText: {
        flexDirection: 'row',
        paddingLeft:140,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'rgba(129, 0, 0, 0.822)',
        borderRadius:15,
        margin:10,
      },

})

export default LoginForm;