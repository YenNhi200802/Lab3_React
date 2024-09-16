import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {} from '@expo/vector-icons'
import Contacts from './screen/Contacts';
import StackNavigator from './navigation/StackNavigator'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';

const App =() => {
  return (

      <NavigationContainer>
        {/* <StackNavigator></StackNavigator> */}
      <TabNavigator></TabNavigator>
    </NavigationContainer>

    
  );
}


export default App