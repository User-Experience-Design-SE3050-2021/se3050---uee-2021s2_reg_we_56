import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

import Payment from "../Payment/Payment";
import ViewDataAddOn from "../DataAddOn/ViewDataAddOn";
import PaymentHistory from "../PaymentHistory/PaymentHistory";
import PaymentGateway from "../PaymentGateway/PaymentGateway";

const Tab = createBottomTabNavigator();

const Footer =()=>{
    return(
      <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                elevation:0,
                backgroundColor:'#ffffff',
                ...styles.shadow
            }
      }}
      >
          <Tab.Screen name="Payment" component={Payment} options={{
              tabBarIcon:({focused})=>(
                  <View style={{alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../Images/home.jpg')}
                      resizeMode='contain'
                             style={{
                                 width:25,
                                 height:25,
                                 tinColor: focused ? 'rgba(16,40,254,1)' :'#5D5C5C',
                             }}
                      />
                      <Text style={{color: focused ? 'rgba(16,40,254,1)' :'#5D5C5C',fontSize:12}}>
                          Home
                      </Text>
                  </View>
              )

          }}/>
          <Tab.Screen name="Data Add On" component={ViewDataAddOn} options={{
              tabBarIcon:({focused})=>(
                  <View style={{alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../Images/headset.jpg')}
                             resizeMode='contain'
                             style={{
                                 width:25,
                                 height:25,
                                 tinColor: focused ? 'rgba(16,40,254,1)' :'#5D5C5C',
                             }}
                      />
                      <Text style={{color: focused ? 'rgba(16,40,254,1)' :'#5D5C5C',fontSize:12}}>
                          Add On
                      </Text>
                  </View>
              )
          }}/>
          <Tab.Screen name="Payment History" component={PaymentHistory} options={{
              tabBarIcon:({focused})=>(
                  <View style={{alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../Images/bill.png')}
                             resizeMode='contain'
                             style={{
                                 width:25,
                                 height:25,
                                 tinColor: focused ? 'rgba(16,40,254,1)' :'#5D5C5C',
                             }}
                      />
                      <Text style={{color: focused ? 'rgba(16,40,254,1)' :'#5D5C5C',fontSize:12}}>
                          Add On
                      </Text>
                  </View>
              )
          }}/>
          <Tab.Screen name="Payment Gateway" component={PaymentGateway} options={{
              tabBarIcon:({focused})=>(
                  <View style={{alignItems:'center', justifyContent:'center'}}>
                      <Image source={require('../Images/profile.png')}
                             resizeMode='contain'
                             style={{
                                 width:25,
                                 height:25,
                                 tinColor: focused ? 'rgba(16,40,254,1)' :'#5D5C5C',
                             }}
                      />
                      <Text style={{color: focused ? 'rgba(16,40,254,1)' :'#5D5C5C',fontSize:12}}>
                          Profile
                      </Text>
                  </View>
              )
          }}/>
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.38,
        shadowRadius: 0,

    },
})
export default Footer;