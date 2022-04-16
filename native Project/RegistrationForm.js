import React from "react";
import {ImageBackground,Text,View,TextInput,StyleSheet,Button} from 'react-native';
import registration from './image/registration.jpg'


function RegistrationForm(){
    return(

        <View style={styles.mainContainer}>
            <ImageBackground source={registration} style={styles.imgbg}>
            <View style={styles.mainInputContainer}>
        <Text style={styles.mainHeader}>Register Your Account</Text>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>First Name :
            </Text>
            <TextInput 
            style={styles.inputStyle}
            automCapitalize='none'
            autoCorrect={false}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Last Name :
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
            <Text style={styles.labels}>Create Password :
            </Text>
            <TextInput 
            style={styles.inputStyle}
            automCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.labels}>Confirm Password :
            </Text>
            <TextInput 
            style={styles.inputStyle}
            automCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            />
        </View>
        <View style={styles.fixToText}>
        <Button
          title="   Submit   "
          onPress={() => alert('registration Successfull')}
        />
      </View>
        </View>
            </ImageBackground>
            <View>
            </View>
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
        'fontSize':25,
        'backgroundColor':'rgba(0, 247, 255, 0.37)',
        'textAlign':'center',
        'color':'blue',
        'fontWeight':"300",
        'paddingTop':20,
        'paddingBottom':20,
        'textTransform':"capitalize",
        'fontFamily':"bold",
        'borderRadius':15,
        'margin':5,
    },
    mainInputContainer:{
        'backgroundColor':'rgba(255, 255, 255, 0.329)',
        'margin':10,
        'borderRadius':20,
    },
    inputContainer:{
        'marginTop':10,
    },
    labels:{
        'fontSize':20,
        'fontWeight':"500",
        'color':'black',
        'textAlign':'center',
        'marginTop':10,
        'marginBottom':5,
        'lineHeight':25,
        'fontFamily':'regular',
    },
    inputStyle:{
        'borderWidth':1,
        'opacity':0.2,
        'borderColor':'#fff',
        'paddingHorizontal':15,
        'margin':7,
        'paddingVertical':7,
        'borderRadius':10,
        'fontFamily':'regular',
        'fontSize':20,
    },
    fixToText: {
        flexDirection: 'row',
        paddingLeft:140,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#14015aad',
        borderRadius:15,
      },

})

export default RegistrationForm;