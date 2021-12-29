import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './Screens/Home'
import Icon from 'react-native-vector-icons/Ionicons'



const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
       options={{
        title: '',
        headerTintColor: '#000',
        headerLeft: () => (
          <Icon.Button
            name="arrow-back"
            size={25}
            style={{borderRadius:25,borderWidth:0.5,borderColor:'#E6E6E6'}}
            backgroundColor="#fff"
            color="#000"
            onPress={() => console.log("Go back")}
          />
        ),
      }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
