import React,{useState} from 'react'
import { StatusBar, StyleSheet, Text, TextInput, View ,KeyboardAvoidingView, Pressable,Platform, ScrollView} from 'react-native'
import { LinearTextGradient } from "react-native-text-gradient";

import Arrow from 'react-native-vector-icons/Ionicons'
import LoadingIcon from 'react-native-vector-icons/Feather'

const Home = () => {
    const d=Array(6).fill()
    const [num,setNum]=useState()
    const [num1,setNum1]=useState()
    const [num2,setNum2]=useState()
    const [num3,setNum3]=useState()
    const [num4,setNum4]=useState()
    const [num5,setNum5]=useState()
    return (
      
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{flex:1,backgroundColor:'white'}}>
      
        <StatusBar backgroundColor='#ffff' barStyle='dark-content'/>
       <ScrollView contentContainerStyle={{flexGrow:1}}>
       <View style={{alignItems:'center',justifyContent: 'center',}}>   
             <LinearTextGradient
            style={{ fontSize: 30,fontFamily:'SpaceGrotesk-Bold',lineHeight:42}}
            locations={[0, 1]}
            colors={["#f59d19", "#ee1d1d"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            >
                <Text style={{ textAlign:'justify'}}>Enter the verification code sent to you</Text>
            </LinearTextGradient>
            <Text style={{fontSize:18,fontFamily:'SpaceGrotesk-Medium',color:'#999999',
            lineHeight:25.2,textAlign:'justify'}}>We have sent you a six-digit code on your +18456473215 </Text>
        </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around' ,marginHorizontal:'10%',marginTop:'15%'}}>
            {d.map((_,i)=>(
                    <TextInput value={
                        ()=>{
                            switch (i) {
                                case 0:
                                    return num
                                    case 1:
                                        return num1
                                    case 2:
                                        return num2
                                  
                                    case 3:
                                        return num3
                                   
                                    case 4:
                                        return num4
                                    
                                    case 5:
                                        return num5
                            }  
                    } 
                    } 
                    style={{borderBottomColor:'#333333',color:'#000',
                    borderBottomWidth:0.5,width:'10%'}} keyboardType='number-pad' 
                    maxLength={1} 
                    onChangeText={(text)=>{
                        switch (i) {
                            case 0:
                                setNum(text)
                                break;
                                case 1:
                                setNum1(text)
                                break;
                                case 2:
                                setNum2(text)
                                break;
                                case 3:
                                setNum3(text)
                                break;
                                case 4:
                                setNum4(text)
                                break;
                                case 5:
                                setNum5(text)
                                break;
                        
                        }
                    }}/>  
            ))}
            </View>
        <View>
        
        </View>

        <View style={{width:'100%',
        height:'8%',position:'absolute',bottom:0,display:'flex',flexDirection:'row',justifyContent:'space-between'
        ,alignItems:'center',padding:'5%'}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',}}>
                <LoadingIcon name='rotate-ccw' size={20} color='#999999'/>
                <Text style={{color:'#999999',fontFamily:'SpaceGrotesk-Bold',paddingLeft:'5%'}}>
                Resend Code in 30s
                </Text>
            </View>

            <Pressable style={{
                elevation:4,
                width:'30%'
                ,height:49,
                backgroundColor: '#E6E6E6',
                borderRadius: 32,
                display:'flex',flexDirection:'row',justifyContent:'center',
               
                alignItems:'center'
            }}>
                <Text style={{color:'#999999',fontFamily:'SpaceGrotesk-Bold', marginEnd:'3%',}}>
                    Next
                </Text>
                <Arrow name='md-arrow-forward-sharp' size={20} color='#999999'/>
                
            </Pressable>
        </View>
       </ScrollView>
        
        </KeyboardAvoidingView>
       
       
    )
}

export default Home

const styles = StyleSheet.create({})