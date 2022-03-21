import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeScreen, ProfileScreen, SensorControl} from '../screens/';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../components/CustomDrawer';
import {SignalScreen} from '../screens/SignalScreen';
import {InfoScreen} from '../screens/InfoScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const HomeTab = () => (
//   <Tab.Navigator
//     tabBarOptions={{
//       activeTintColor: '#3578E5',
//       inactiveTintColor: '#aaaaaa',
//       showLabel: false,
//     }}>
//     <Tab.Screen
//       component={SensorControl}
//       name="HomeScreen"
//       options={({route}) => ({
//         tabBarIcon: ({color}) => (
//           <Ionicons name="home" size={25} color={color} />
//         ),
//       })}
//     />
//     <Tab.Screen
//       component={ProfileScreen}
//       name="Profile"
//       options={({route}) => ({
//         tabBarIcon: ({color}) => (
//           <Ionicons name="person-outline" size={25} color={color} />
//         ),
//       })}
//     />
//   </Tab.Navigator>
// );

export const AppStack = () => (
  // <Stack.Navigator headerMode={'none'}>
  //   <Stack.Screen name="Home" component={HomeTab} />
  // </Stack.Navigator>
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <CustomDrawer {...props} />}>
    <Drawer.Screen name="Home" component={SensorControl} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Signal" component={SignalScreen} />
    <Drawer.Screen name="Info" component={InfoScreen} />
  </Drawer.Navigator>
);
