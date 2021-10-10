/* eslint-disable prettier/prettier */
import React from 'react';
import ViewPackages from "./Component/Packages/ViewPackages/ViewPackages";
import LoginView from "./Component/Login/LoginView/LoginView";
import ViewDataAddOn from "./Component/DataAddOn/ViewDataAddOn";
import HomePage from "./Component/HomePage/Homepage/HomePage";
import DuePayment from "./Component/DuePayment/DuePayment";
import UsageHistory from "./Component/UsuageHistory/UsuageHistory/UsuageHistory";
import Payment from "./Component/Payment/Payment";
import PaymentGateway from "./Component/PaymentGateway/PaymentGateway";

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
         <Screen  name={"ViewLogin"} component={LoginView}/>
         <Screen name={"ViewHomePage"} component={HomePage}/>
         <Screen  name={"ViewPackages"} component={ViewPackages}/>
         <Screen name={"ViewDataAdd"} component={ViewDataAddOn}/>
         <Screen  name={"ViewDuePayment"} component={DuePayment}/>
         <Screen name={"ViewUsageHistory"} component={UsageHistory}/>
         <Screen name={"ViewPayment"} component={Payment}/>
         <Screen name={"ViewPaymentGateway"} component={PaymentGateway}/>
       </Navigator>
     </NavigationContainer>
  );
}
export default App;
