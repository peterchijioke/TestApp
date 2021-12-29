import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import LoadingIcon from 'react-native-vector-icons/Feather'

const Resend = () => {
    return (
        <Pressable style={{display:'flex',flexDirection:'row',justifyContent:'space-between',}}>
        <LoadingIcon name='rotate-ccw' size={20} color='#999999'/>
        <Text style={{color:'#999999',fontFamily:'SpaceGrotesk-Bold',paddingLeft:'5%'}}>
          Resend Code in 30s
        </Text>
        </Pressable>
    )
}

export default Resend

const styles = StyleSheet.create({})
