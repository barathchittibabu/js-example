import React from 'react';
import type,{Node} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import CounterAppFun from './CounterAppFun';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import SampleForm from './SampleForm';

const App = () => {
  return (
    <RegistrationForm/>
   );
};


export default App;
