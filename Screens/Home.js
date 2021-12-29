import React from 'react'
import { StatusBar, StyleSheet, Text, TextInput, View ,KeyboardAvoidingView, Pressable} from 'react-native'
import { LinearTextGradient } from "react-native-text-gradient";

const Home = () => {
    const d=Array(6).fill()
    return (
        
        <View style={{flex:1,backgroundColor:'white'}}>
            <StatusBar backgroundColor='#ffff' barStyle='dark-content'/>
        <View style={{alignItems:'center',justifyContent: 'center',}}>   
             <LinearTextGradient
            style={{ fontSize: 30,fontFamily:'SpaceGrotesk-Bold',lineHeight:42}}
            locations={[0, 1]}
            colors={["#f59d19", "#ee1d1d"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            >
                <Text style={{}}>Enter the verification code sent to you</Text>
            </LinearTextGradient>
            <Text style={{fontSize:18,fontFamily:'SpaceGrotesk-Medium',color:'#999999',lineHeight:25.2,textAlign:'justify'}}>We have sent you a six-digit code on your +18456473215 </Text>
        </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around' ,marginHorizontal:'10%'}}>
            {d.map(()=>(
                    <TextInput style={{borderBottomColor:'#333333',borderBottomWidth:0.5,width:'10%'}} keyboardType='number-pad' maxLength={1} onChangeText={()=>{}}/>  
            ))}
            </View>
        <View>
        
        </View>

        <View style={{width:'100%',backgroundColor:'#133',height:'8%',position:'absolute',bottom:0}}>

            <Pressable style={{
                width:'30%'
                ,height:49,
                backgroundColor: '#E6E6E6',
                borderRadius: 32,
            }}>
                
            </Pressable>
        </View>
        </View>
       
    )
}

export default Home

const styles = StyleSheet.create({})
