import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    ToastAndroid
} from "react-native";

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Button, HStack, Stack} from "native-base";
import {ScrollView} from "react-native-gesture-handler";



function PaymentGateway({navigation}){

    const handlePayment = () => {

        ToastAndroid.show('Successfully Data Added !', ToastAndroid.SHORT)
        navigation.navigate('ViewHomePage')
    }

    return (
        <NativeBaseProvider>

            <View style={styles.container}>
                <ScrollView>
                <View style={styles.logo}>
                    <HStack space={2} alignItems="center">
                    <Image
                        source={require("../Images/logo.png")}
                        resizeMode="contain"
                        style={styles.logo1}
                    />
                        <Image
                            source={require("../Images/hnb.png")}
                            resizeMode="contain"
                            style={styles.logo2}
                        />
                    </HStack>
                </View>

                <View style={styles.card1}>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.billamount}> Bill Amount :</Text>
                        <Text style={styles.amount}> 3000.00 LKR</Text>
                    </HStack>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.billamount}>Card Type :</Text>
                        <Text style={styles.amount}>  Master </Text>
                    </HStack>
                </View>
                <View style={styles.payment}>
                        <Text style={styles.cardNumber}>Card Number :</Text>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.rect4}/>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.expMonth}>Expiration Month :</Text>
                        <Text style={styles.expYear}>Expiration Year :</Text>
                    </HStack>
                    <View style={styles.master}>
                        <HStack space={2} alignItems="center">
                            <TextInput
                                keyboardType="numeric"
                                style={styles.rect5}/>
                            <TextInput
                                keyboardType="numeric"
                                style={styles.rect5}/>
                        </HStack>
                    </View>
                    <View>
                        <Text style={styles.securityCode}>Security Code :</Text>
                        <Text style={styles.description}>This code is a three or four digit numberprinted on the back or
                            front of credit cards.</Text>
                    </View>
                    <View>
                        <HStack space={2} alignItems="center">
                            <View>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.rect6}/>

                                <Image
                                    source={require("../Images/cvvno.jpg")}
                                    resizeMode="contain"
                                    style={styles.logo3}
                                />
                            </View>
                        </HStack>
                    </View>
                    <Stack space={2} alignItems="center">
                        <HStack space={2} alignItems="center">
                            <Button
                                size="lg"
                                colorScheme="danger"
                                style={styles.btn}
                                //  onPress={() => console.log('hello world')}
                                onPress={() => navigation.navigate('ViewHomePage')}
                            >
                                Pay Now
                            </Button>
                        </HStack>
                    </Stack>
                </View>
            </ScrollView>
                <Stack space={2} alignItems="center">
                    <HStack space={2} alignItems="center">
                        <Button
                            size="lg"
                            colorScheme="danger"
                            style={styles.btn}
                            //  onPress={() => console.log('hello world')}
                            onPress={handlePayment}
                        >
                            Pay Now
                        </Button>
                    </HStack>
                </Stack>
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    logo: {

        width: wp('90%'),
        height: hp('5%'),

    },

    logo1: {
        top: hp('1%'),
        width: wp('25%'),
        height: hp('10%'),
        position: "absolute"
    },
    logo2: {
        top: hp('1%'),
        left: hp('36%'),
        width: wp('20%'),
        height: hp('10%'),
        position: "absolute"
    },
    card1:{
        alignItems:'center',
        width: wp('90%'),
        height: hp('12%'),
        top:hp('7%'),
        paddingTop: hp('1%'),
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.38,
        shadowRadius: 0,
        borderRadius: 10,
    },

    billamount:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        fontWeight: "bold"
    },

    amount:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        fontWeight: "bold"
    },
    payment:{
        width: wp('90%'),
        height: hp('65%'),
        top:hp('10%'),
        paddingTop: hp('1%'),
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.38,
        shadowRadius: 0,
        borderRadius: 10,
    },

    cardNumber:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        top: hp('2%'),
        left:hp('1%')
    },
    rect4: {
        width: wp('82%'),
        height: hp('5%'),
        backgroundColor: "rgba(255,255,255,1)",
        color:"rgb(246,41,41)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(16,40,254,1)",
        borderStyle: "solid",
        top: hp('2%'),
        left:hp('2%')
    },
    expMonth:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        top: hp('3%'),
        left:hp('1%')
    },

    expYear:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        top: hp('3%'),
        left:hp('2%')
    },
    rect5:{
        width: wp('40%'),
        height: hp('5%'),
        backgroundColor: "rgba(255,255,255,1)",
        color:"rgb(246,41,41)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(16,40,254,1)",
        borderStyle: "solid",
        top: hp('2%'),
        left:hp('2%')
    },
    securityCode:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        top: hp('3%'),
        left:hp('1%')
    },
    description:{
        fontSize: hp('1.2%'),
        color: "rgb(246,41,41)",
        padding: hp('1%'),
        top: hp('1%'),
        left:hp('1%')
    },
    rect6: {
        width: wp('30%'),
        height: hp('5%'),
        backgroundColor: "rgba(255,255,255,1)",
        color: "rgb(246,41,41)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(16,40,254,1)",
        borderStyle: "solid",
        top: hp('1%'),
        left: hp('2%')
    },
    logo3: {
        top: hp('1%'),
        left: hp('19%'),
        width: wp('15%'),
        height: hp('5%'),
        position: "absolute"
    },

    btn: {
        fontWeight: 'bold' ,
        borderRadius:50,
        borderColor:'rgb(246,41,41)',
        borderWidth:2,
        top:hp('6%'),
        bottom: hp('5%'),
        width: wp('63%')
    }
})

export default PaymentGateway;
