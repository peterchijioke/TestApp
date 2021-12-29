import React from 'react'
import { View, Text,Pressable } from 'react-native'
import Arrow from 'react-native-vector-icons/Ionicons'

export default function NextBtn() {
    return (
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
    )
}
