/* eslint-disable prettier/prettier */
import React from 'react';
// import ViewPackages from "./Component/Packages/ViewPackages/ViewPackages";
// import LoginView from "./Component/Login/LoginView/LoginView";
// import ViewDataAddOn from "./Component/DataAddOn/ViewDataAddOn";
// import UsageHistory from "./Component/UsageHistory/UsageHistory";
// import LoginView from "./Component/Login/LoginView/LoginView";
// import DuePayment from "./Component/DuePayment/DuePayment";
// import Payment from "./Component/Payment/Payment";
// import PaymentGateway from "./Component/PaymentGateway/PaymentGateway";
// import PaymentHistory from "./Component/PaymentHistory/PaymentHistory";
import Footer from "./Component/Footer/Footer";



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
// import {createStackNavigator} from '@react-navigation/stack';
// const {Navigator,Screen} = createStackNavigator()

function App() {
  return (
    <NavigationContainer>

         <Footer />
       {/*</Navigator>*/}
     </NavigationContainer>
  );
}
export default App;
