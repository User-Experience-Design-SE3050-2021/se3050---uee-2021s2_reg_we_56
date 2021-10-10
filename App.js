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
import PaymentHistory from "./Component/PaymentHistory/PaymentHistory";

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
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const {Navigator,Screen} = createStackNavigator()
import ContactUsSample from "./Component/ContactUs/ContactUsSample";
import Feedback from "./Component/ContactUs/Feedback";
import ComplaintSubmission from "./Component/ContactUs/ComplaintSubmission";
import BranchNetwork from "./Component/ContactUs/BranchNetwork"
import AccountOptions from "./Component/UserAccount/AccountOptions";
import UserProfile from "./Component/UserAccount/UserProfile";
import AccountDetails from "./Component/UserAccount/AccountDetails";
import LoginDetails from "./Component/UserAccount/LoginDetails";


function App() {
  return (
    <NavigationContainer>
       <Navigator>
         {/*<Screen  name={"ViewLogin"} component={LoginView}/>*/}
         <Screen name={"ViewHomePage"} component={HomePage}/>
         {/*<Screen  name={"ViewPackages"} component={ViewPackages}/>*/}
         {/*<Screen name={"ViewDataAdd"} component={ViewDataAddOn}/>*/}
         {/*<Screen  name={"ViewDuePayment"} component={DuePayment}/>*/}
         {/*<Screen name={"ViewUsageHistory"} component={UsageHistory}/>*/}
         {/*<Screen name={"ViewPayment"} component={Payment}/>*/}
         {/*<Screen name={"ViewPaymentGateway"} component={PaymentGateway}/>*/}
         {/*<Screen name={"ViewPaymentHistory"} component={PaymentHistory}/>*/}
         {/*<Screen  name={"CONTACT US"} component={ContactUsSample}/>*/}
         {/*<Screen  name={"FEEDBACK"} component={Feedback}/>*/}
         {/*<Screen  name={"COMPLAINT SUBMISSION"} component={ComplaintSubmission}/>*/}
         {/*<Screen  name={"BRANCH NETWORK"} component={BranchNetwork}/>*/}
         {/*  <Screen  name={"ACCOUNT OPTION"} component={AccountOptions}/>*/}
         {/*  <Screen  name={"USER PROFILE"} component={UserProfile}/>*/}
         {/*  <Screen  name={"ACCOUNT DETAILS"} component={AccountDetails}/>*/}
         {/*  <Screen  name={"LOGIN DETAILS"} component={LoginDetails}/>*/}

       </Navigator>
     </NavigationContainer>
  );
}
export default App;
