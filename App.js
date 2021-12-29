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
        headerTitle: '',
        headerTintColor: '#000',
        headerLeft: () => (
          <Icon.Button
            name="arrow-back"
            size={25}
            style={{}}
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
