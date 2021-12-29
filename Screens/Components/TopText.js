import React from 'react'
import { View, Text } from 'react-native'
import { LinearTextGradient } from "react-native-text-gradient";

export default function TopText() {
    return (
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
    )
}
