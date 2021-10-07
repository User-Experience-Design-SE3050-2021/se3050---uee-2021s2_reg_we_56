/* eslint-disable prettier/prettier */

import React from 'react';
// import ViewPackages from "./Component/Packages/ViewPackages/ViewPackages";
// import LoginView from "./Component/Login/LoginView/LoginView";
import ViewDataAddOn from "./Component/DataAddOn/ViewDataAddOn";

// import DataReloadBtn from "./Component/DataAddOn/DataReloadBtn";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator,Screen} = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
       <Navigator>
         {/*<Screen  name={"ViewPackages"} component={ViewPackages}/>*/}
         <Screen name={"ViewDataAdd"} component={ViewDataAddOn}/>
         {/*  <Screen name={"btn"} component={DataReloadBtn}/>*/}
         {/*<Screen  name={"ViewLogin"} component={LoginView}/>*/}
       </Navigator>
     </NavigationContainer>
  );
}
export default App;
