import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from "react-native";
import { RadioButton } from 'react-native-paper';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Button, HStack, Stack} from "native-base";


function Payment({navigation}){
    const [checked, setChecked] = React.useState('first');


    return (
        <NativeBaseProvider>

            <View style={styles.container}>
                <View style={styles.card1}>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.transactionType}>  Transaction Type :</Text>
                        <Text style={styles.billPayment}> Bill Payment </Text>
                    </HStack>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.transactionType}>Account Number :</Text>
                        <Text style={styles.billPayment}>  007180065 </Text>
                    </HStack>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.transactionType}>Directory Number :</Text>
                        <Text style={styles.billPayment}>007180065 </Text>
                    </HStack>
                </View>
               <View style={styles.pay}>
                   <Text style={styles.paymentdetails}>Payment Details</Text>
               </View>
                <View style={styles.payment}>
                    <HStack space={2} alignItems="center">
                    <Text style={styles.billAmount}>Bill Amount :</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.rect4}> 3000.00 LKR</TextInput>
                    </HStack>
                    <HStack space={2} alignItems="center">
                    <Text style={styles.cardType}>Card Type :</Text>
                            <View style={styles.visa}>
                                <HStack space={2} alignItems="center">
                                 <RadioButton
                                    value="first"
                                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('first')}
                                    />
                                <Text style={styles.radioText}>Visa</Text>
                                </HStack>
                            </View>
                </HStack>
                    <View style={styles.master}>
                        <HStack space={2} alignItems="center">
                            <RadioButton
                                value="second"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('second')}
                            />
                            <Text style={styles.radioText}>Master</Text>
                        </HStack>
                    </View>
                    <View style={styles.amex}>
                        <HStack space={2} alignItems="center">
                            <RadioButton
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
                            onPress={() => navigation.navigate('ViewPaymentGateway')}
                        >
                            Proceed
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
    card1:{
        alignItems:'center',
        width: wp('90%'),
        height: hp('15%'),
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

    transactionType:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        fontWeight: "bold"
    },

    billPayment:{
        fontSize: hp('2%'),
        color: "#ff0000",
        padding: hp('.5%'),
        fontWeight: "bold"
    },
    pay:{
        width: wp('90%'),
        height: hp('5%'),
        top:hp('10%'),

    },
    payment:{
        width: wp('90%'),
        height: hp('30%'),
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

    paymentdetails:{
        fontSize: hp('2.1%'),
        color: "rgba(16,40,254,1)",
        padding: hp('.5%'),
        fontWeight: "bold"
    },
    billAmount:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        top: hp('2%'),
        left:hp('2%')
    },
    rect4: {
        width: wp('50%'),
        height: hp('5%'),
        backgroundColor: "rgba(255,255,255,1)",
        color:"rgb(246,41,41)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(16,40,254,1)",
        borderStyle: "solid",
        top: hp('2%'),
        left:hp('1%')
    },
    cardType:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('1%'),
        top: hp('3%'),
        left:hp('2%')
    },
    visa:{
        top: hp('3%'),
        left:hp('2%')
    },

    master:{
        top: hp('4%'),
        left:hp('16.5%')
    },

    amex:{
        top: hp('5%'),
        left:hp('16.5%')
    },

    radioText:{
        color: "#5D5C5C",
    },

    btn: {
        fontWeight: 'bold' ,
        borderRadius:50,
        borderColor:'rgb(246,41,41)',
        borderWidth:2,
        top: hp('20%'),
        bottom: hp('5%'),
        width: wp('63%')
    }
})

export default Payment;
