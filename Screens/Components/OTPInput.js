import React,{useState} from 'react';
import {View, StyleSheet,TextInput} from 'react-native';

const Otpinput = () => {
    const d=Array(6).fill()
    const [num,setNum]=useState()
    const [num1,setNum1]=useState()
    const [num2,setNum2]=useState()
    const [num3,setNum3]=useState()
    const [num4,setNum4]=useState()
    const [num5,setNum5]=useState()
    const valueOfTextInput=(i)=>{
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

const TextChange=(text)=>{
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
}
    return (
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around' ,marginHorizontal:'10%',marginTop:'15%'}}>
            {d.map((_,i)=>(
                    <TextInput value={
                        valueOfTextInput(i)
                    } 
                    style={{borderBottomColor:'#333333',color:'#000',
                    borderBottomWidth:0.5,width:'10%'}} keyboardType='number-pad' 
                    maxLength={1} 
                    onChangeText={TextChange}/>  
            ))}
            </View>
    );
}

const styles = StyleSheet.create({})

export default Otpinput;
