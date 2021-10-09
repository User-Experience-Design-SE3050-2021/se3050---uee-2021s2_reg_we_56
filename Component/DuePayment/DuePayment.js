import React from "react";
import {
    StyleSheet,
    View,
    Text,

} from "react-native";
import { RadioButton } from 'react-native-paper';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Button, HStack, Stack} from "native-base";

function DuePayment() {
    const [checked, setChecked] = React.useState('first');
    return (
        <NativeBaseProvider>
        <View style={styles.container}>
            <View style={styles.card1}>
                <HStack space={2} alignItems="center">
                    <Text style={styles.directory}>Directory number :</Text>
                    <Text style={styles.directoryNo}>0110238876 </Text>
                </HStack>
                <HStack space={2} alignItems="center">
                    <Text style={styles.account}>Account Number :</Text>
                    <Text style={styles.accountNo}> 007180065 </Text>
                </HStack>
            </View>
            <View style={styles.pay}>
                <Text style={styles.duePaymentDetails}>Due Payment Details</Text>
            </View>
            <View style={styles.payment}>
                <HStack space={2} alignItems="center">
                    <Text style={styles.september}>September</Text>
                    <Text style={styles.septemberAmount}>Rs 2000.00</Text>
                </HStack>
            </View>
            <View style={styles.payment1}>
                <HStack space={2} alignItems="center">
                    <Text style={styles.october}>October</Text>
                    <Text style={styles.octoberAmount}>Rs 1500.00</Text>
                </HStack>
            </View>
            <View style={styles.payment2}>
                <HStack space={2} alignItems="center">
                    <Text style={styles.november}>November</Text>
                    <Text style={styles.novemberAmount}>Rs 1500.00</Text>
                </HStack>
            </View>
            <View style={styles.duePayment}>
                    <Text style={styles.total}>Total Due Amount Rs 5000.00</Text>
                    <Text style={styles.cardType}>Card Type :</Text>
                <View style={styles.radioView}>
                    <HStack space={2} alignItems="center">
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                        />
                        <Text style={styles.radioText}>Visa</Text>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                        />
                        <Text style={styles.radioText}>Master</Text>
                        <RadioButton style={styles.radioAmex}
                            value="third"
                            status={ checked === 'third' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('third')}
                        />
                        <Text style={styles.radioText}>Amex</Text>
                    </HStack>
                </View>
            </View>
            <Stack space={2} alignItems="center">
                <HStack space={2} alignItems="center">
                    <Button
                        size="lg"
                        colorScheme="danger"
                        style={styles.btn}
                        //  onPress={() => console.log('hello world')}
                    >
                        Proceed
                    </Button>
                </HStack>
            </Stack>
        </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    card1:{

        width: wp('90%'),
        height: hp('12%'),
        top:hp('5%'),
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

    directory:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        fontWeight: "bold",
        left:hp('5%'),
        top:hp('1%')
    },

    directoryNo:{
        fontSize: hp('2%'),
        color: "#ff0000",
        padding: hp('.5%'),
        fontWeight: "bold",
        left:hp('4%'),
        top:hp('1%')
    },
    account:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        fontWeight: "bold",
        left:hp('5%'),
        top:hp('1%')
    },

    accountNo:{
        fontSize: hp('2%'),
        color: "#ff0000",
        padding: hp('.5%'),
        fontWeight: "bold",
        left:hp('4%'),
        top:hp('1%')
    },

    pay:{
        width: wp('90%'),
        height: hp('5%'),
        top:hp('7%'),

    },
    duePaymentDetails:{
        fontSize: hp('2.1%'),
        color: "rgba(16,40,254,1)",
        padding: hp('.5%'),
        fontWeight: "bold"
    },
    payment:{
        width: wp('90%'),
        height: hp('10%'),
        top:hp('8%'),
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
    september:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        top: hp('1%'),
        left:hp('5%')
    },
    septemberAmount:{
        fontSize: hp('2%'),
        color: "#ff0000",
        padding: hp('1%'),
        top: hp('1%'),
        left:hp('15%')
    },
    payment1:{
        width: wp('90%'),
        height: hp('10%'),
        top:hp('9%'),
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
    october:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        top: hp('1%'),
        left:hp('5%')
    },
    octoberAmount:{
        fontSize: hp('2%'),
        color: "#ff0000",
        padding: hp('1%'),
        top: hp('1%'),
        left:hp('18%')
    },
    payment2:{
        width: wp('90%'),
        height: hp('10%'),
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
    november:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        top: hp('1%'),
        left:hp('5%')
    },
    novemberAmount:{
        fontSize: hp('2%'),
        color: "#ff0000",
        padding: hp('1%'),
        top: hp('1%'),
        left:hp('16%')
    },
    duePayment:{
        width: wp('90%'),
        height: hp('18%'),
        top:hp('12%'),
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
    total:{
        fontSize: hp('2%'),
        color: "#ff0000",
        padding: hp('1%'),
        left:hp('5%'),
        fontWeight: "bold"
    },
    cardType:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        left:hp('5%'),
    },
    radioView:{

        left:hp('5%')
    },
    radioText:{
        color: "#5D5C5C",
    },
    btn: {
        fontWeight: 'bold' ,
        borderRadius:50,
        borderColor:'rgb(246,41,41)',
        borderWidth:2,
        top: hp('17%'),
        bottom: hp('5%'),
        width: wp('63%')
    }

});

export default DuePayment
