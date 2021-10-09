import React from "react";
import {
    StyleSheet,
    View,
    Text,
} from "react-native";
import { Divider } from 'react-native-paper';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Button, HStack, Stack} from "native-base";


function PaymentHistory() {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.accView}>
                    <HStack space={2} alignItems="center">
                    <Text style={styles.acc}>
                        Account No :
                    </Text>
                        <Text style={styles.accNo}>
                            007180075
                        </Text>
                    </HStack>
                </View>
                <View style={styles.card1}>
                    <View>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.transactionDate}>Transaction Date</Text>
                        <Text style={styles.date}>06.Jul.2021</Text>
                    </HStack>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.transactionDate}>Receipt Number</Text>
                        <Text style={styles.date}>  IBP_335644</Text>
                    </HStack>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.transactionDate}>Payment Branch</Text>
                        <Text style={styles.date}> Internet Bill</Text>
                    </HStack>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.transactionDate}>Amount</Text>
                        <Text style={styles.date}>                Rs 1500.00</Text>
                    </HStack>
                    <HStack space={2} alignItems="center">
                        <Text style={styles.transactionDate}>Payment Mode</Text>
                        <Text style={styles.date}>   Cash</Text>
                    </HStack>
                    <View>
                        <Text style={styles.totAmount}>Total Payable Amount : Rs 1536.00</Text>
                        <Divider style={styles.divider} />
                    </View>
                    <View style={styles.divider} >
                        <Divider style={styles.div} />
                    </View>
                    </View>
                    <View style={styles.view}>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Transaction Date</Text>
                            <Text style={styles.date}>06.Jul.2021</Text>
                        </HStack>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Receipt Number</Text>
                            <Text style={styles.date}>  IBP_335644</Text>
                        </HStack>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Payment Branch</Text>
                            <Text style={styles.date}> Internet Bill</Text>
                        </HStack>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Amount</Text>
                            <Text style={styles.date}>                Rs 1500.00</Text>
                        </HStack>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Payment Mode</Text>
                            <Text style={styles.date}>   Cash</Text>
                        </HStack>
                        <View>
                            <Text style={styles.totAmount}>Total Payable Amount : Rs 1536.00</Text>
                            <Divider style={styles.divider} />
                        </View>
                        <View style={styles.divider} >
                            <Divider style={styles.div} />
                        </View>
                    </View>
                    <View style={styles.view1}>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Transaction Date</Text>
                            <Text style={styles.date}>06.Jul.2021</Text>
                        </HStack>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Receipt Number</Text>
                            <Text style={styles.date}>  IBP_335644</Text>
                        </HStack>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Payment Branch</Text>
                            <Text style={styles.date}> Internet Bill</Text>
                        </HStack>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Amount</Text>
                            <Text style={styles.date}>                Rs 1500.00</Text>
                        </HStack>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.transactionDate}>Payment Mode</Text>
                            <Text style={styles.date}>   Cash</Text>
                        </HStack>
                        <View>
                            <Text style={styles.totAmount}>Total Payable Amount : Rs 1536.00</Text>
                            <Divider style={styles.divider} />
                        </View>
                        <View style={styles.divider} >
                            <Divider style={styles.div} />
                        </View>
                    </View>
                </View>
            </View>

        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
        },
    accView:{
        width: wp('90%'),
        top:hp('2.5%'),
    },
    acc:{
        fontSize: hp('2.2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        fontWeight: "bold"
    },
    accNo:{
        fontSize: hp('2.2%'),
        color: "#ff0000",
        padding: hp('.5%'),
        fontWeight: "bold"
    },
    card1:{
        width: wp('85%'),
        height: hp('82%'),
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
    transactionDate:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        fontWeight: "bold",
        left:hp('3%')
    },

    view:{
        top:hp('2%'),
    },
    view1:{
        top:hp('4%'),
    },

    date:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        fontWeight: "bold",
        left:hp('8%')
    },
    totAmount:{
        fontSize: hp('2%'),
        color: "#ff0000",
        padding: hp('.5%'),
        fontWeight: "bold",
        left:hp('3%')

    },
    divider:{
        alignItems:'center',
        width: wp('55%'),
        left:hp('8%'),
        top:hp('1%'),

    },
    div:{
        alignItems:'center',
        width: wp('55%'),
        backgroundColor:"rgba(16,40,254,1)",

    },

})

export default PaymentHistory;