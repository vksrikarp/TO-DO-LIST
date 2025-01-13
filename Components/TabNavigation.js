import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import About from './About';
import Home from './Home';
import Settings from './Settings';
import ToDos from './ToDos';


const Tab = createBottomTabNavigator()
// Tab Navigator (Available across all screens)
const TabNavigation = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="ToDos" component={ToDos} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
  

export default TabNavigation