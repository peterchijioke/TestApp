import React,{useState} from 'react'
import { 
    StatusBar, StyleSheet, 
    Text, TextInput,
     View ,KeyboardAvoidingView
    ,Platform, ScrollView
} from 'react-native'

import NextBtn from './Components/NextBtn';
import Otpinput from './Components/OTPInput';
import Resend from './Components/Resend';
import TopText from './Components/TopText';

const Home = () => {
    
    return (
      
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{flex:1,backgroundColor:'white'}}>
      
        <StatusBar backgroundColor='#ffff' barStyle='dark-content'/>
      
       <TopText/>
        <Otpinput/>
        <View style={styles.bottom}>
            <Resend/>
           <NextBtn/>
        </View>
       
        
        </KeyboardAvoidingView>
       
       
    )
}

export default Home

const styles = StyleSheet.create({
    bottom:{width:'100%',
    height:'10%',position:'absolute',
    bottom:0,display:'flex',flexDirection:'row',
    justifyContent:'space-around'
    ,alignItems:'center'
,}
})