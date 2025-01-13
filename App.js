// // started on 4 jan 2025
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import ToDos from './Components/ToDos';
// export default function App() {
//   return (
//     <View style={styles.container}>
//         <StatusBar style="auto" />
//       <ToDos/>
    
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     alignContent:'center',
//     marginTop:'50%',
//     justifyContent: 'center',
//   },
// });
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Settings from './Components/Settings';
import TabNavigation from './Components/TabNavigation';
import ToDos from './Components/ToDos';
// import { Settings } from 'react-native';
// Import Screens


// Create Navigators
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab Navigator (Available across all screens)
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="About" component={About} />
    <Tab.Screen name="ToDos" component={ToDos} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

// Stack Navigator (Wraps Tab Navigator for deeper navigation)
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="MainTabs" 
      component={TabNavigation} 
      options={{ headerShown: false }} // Hide header for tabs
    />
  </Stack.Navigator>
);

// Drawer Navigator (Main navigation for left menu)
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="About" component={StackNavigator} />
        <Drawer.Screen name="ToDo" component={StackNavigator} />
        <Drawer.Screen name="Settings" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
