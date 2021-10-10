import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, View, Image, Text, ToastAndroid} from "react-native";
import {Button, HStack, Icon, Input} from "native-base";
import * as Alert from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
//import Svg, { Ellipse } from "react-native-svg";

const userDetails = {
    username:'Malindu97',
    password:'malindu123'
}

function LoginView({navigation}) {

    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')

    const handleLogin = () => {

        if(userDetails.username === username){
            if(userDetails.password === password){
                ToastAndroid.show('successfully log In', ToastAndroid.SHORT)
                navigation.navigate('ViewDuePayment')
            }else{
                ToastAndroid.show('Password Does Not Match', ToastAndroid.SHORT)
            }
        }else{
            ToastAndroid.show('User Does Not Exist', ToastAndroid.SHORT)
        }
    }

    return (
        <NativeBaseProvider>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.ellipseStack}>
                        <Image
                            source={require("../../Images/logo.png")}
                            resizeMode="contain"
                            style={styles.image}
                        >

                        </Image>
                    </View>
                    <Text style={styles.login}>Login</Text>
                    <Text style={styles.loremIpsum}>Please Sign In to Continue</Text>
                    <Text style={styles.userName}>User Name</Text>
                    <Input style={styles.enterTheUserName}
                           size="md"
                           placeholder="    Enter User Name"
                           w={{
                               base: "85%",
                               md: "32%",
                           }}
                           onChangeText={text => setUsername(text)}
                    />
                    <Text style={styles.password}>Password</Text>
                    <Input style={styles.enterThePassword}
                           size="md"
                           type={"password"}
                           placeholder="    Enter the Password"
                           w={{
                               base: "85%",
                               md: "32%",
                           }}
                           onChangeText={text => setPassword(text)}
                    />
                    <Button
                        size="lg"
                        colorScheme="danger"
                        style={styles.bttn}
                        //  onPress={() => console.log('hello world')}
                        onPress={handleLogin}
                    >
                        Login
                    </Button>
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ellipse: {
        top: 0,
        left: 0,
        width: 631,
        height: 318,
        position: "absolute"
    },
    image: {
        top: hp('18%'),
        right: wp('53%'),
        width: wp('40%'),
        height: hp('40%'),
        position: "absolute"
    },
    ellipseStack: {
        width: 631,
        height: 318,
        marginTop: -144,
        marginLeft: -271
    },
    login: {
        fontFamily: "georgia-regular",
        color: "rgba(97,109,173,1)",
        fontSize: 37,
        marginTop: 24,
        marginLeft: 18
    },
    loremIpsum: {
        fontFamily: "roboto-regular",
        color: "rgba(97,109,173,1)",
        marginTop: 10,
        marginLeft: 18,
        fontWeight: 'bold'
    },
    userName: {
        fontFamily: "roboto-regular",
        color: "rgba(97,109,173,1)",
        height: 31,
        width: 186,
        fontSize: 18,
        marginTop: 25,
        marginLeft: 27,
    },
    rect: {
        width: 303,
        height: 49,
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 10,
        marginLeft: 27
    },
    enterTheUserName: {
        fontFamily: "roboto-regular",
        // color: "rgb(25,135,195)",
        // opacity: 0.83,
        fontSize: 16,
        borderRadius:7,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.15,
        // marginTop: 16,
        marginLeft: '8%'
    },
    rect1: {
        width: 303,
        height: 49,
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 10,
        marginTop: 54,
        marginLeft: 27
    },
    enterThePassword: {
        fontFamily: "roboto-regular",
        fontSize: 16,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius:7,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.15,
        marginTop: "1%",
        marginLeft: '8%'
    },
    password: {
        fontFamily: "roboto-regular",
        color: "rgba(97,109,173,1)",
        height: 31,
        width: 186,
        fontSize: 18,
        marginTop: "3%",
        marginLeft: 27
    },

    bttn: {
        fontWeight: 'bold' ,
        fontFamily: "roboto-regular",
        borderRadius:50,
        borderColor:'rgb(246,41,41)',
        borderWidth:2,
        // Top: hp('30%'),
        marginTop:"7%",
        marginLeft:"26%",
        width: wp('50%')
    }
});

export default LoginView;
