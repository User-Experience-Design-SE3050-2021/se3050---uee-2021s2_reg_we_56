import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function DuePayment(props) {
    return (
        <View style={styles.container}>
            <View style={styles.rect1Stack}>
                <View style={styles.rect1}>
                    <View style={styles.rect3}>
                        <View style={styles.directoryNumberRow}>
                            <Text style={styles.directoryNumber}>Directory Number :</Text>
                            <Text style={styles.directoryNumber1}>0110238876</Text>
                        </View>
                        <View style={styles.accountNumberRow}>
                            <Text style={styles.accountNumber}>Account Number :</Text>
                            <Text style={styles.directoryNumber2}>007180075</Text>
                        </View>
                    </View>
                    <Text style={styles.duePaymentDetails}>Due Payment Details</Text>
                    <View style={styles.rect4}>
                        <View style={styles.march7180076Row}>
                            <Text style={styles.march7180076}>March</Text>
                            <Text style={styles.rs200000}>Rs 2000.00</Text>
                        </View>
                    </View>
                    <View style={styles.rect5}>
                        <View style={styles.aprilRow}>
                            <Text style={styles.april}>April</Text>
                            <Text style={styles.rs200001}>Rs 2000.00</Text>
                        </View>
                    </View>
                    <View style={styles.rect6}>
                        <View style={styles.mayRow}>
                            <Text style={styles.may}>May</Text>
                            <Text style={styles.rs200002}>Rs 2000.00</Text>
                        </View>
                    </View>
                    <View style={styles.rect7}>
                        <Text style={styles.billAmount3}>Total Due Amount Rs 5000.00</Text>
                        <Text style={styles.cardType3}>Card Type :</Text>
                        <View style={styles.rect8Row}>
                            <View style={styles.rect8}></View>
                            <Text style={styles.visa}>Visa</Text>
                            <View style={styles.rect9}></View>
                            <Text style={styles.master}>Master</Text>
                            <View style={styles.rect10}></View>
                            <Text style={styles.amex}>Amex</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("Untitled")}
                        style={styles.button1}
                    >
                        <Text style={styles.proceed}>Proceed</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rect2}>
                    <Text style={styles.duePayments}>Due Payments</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rect1: {
        top: 0,
        left: 0,
        width: 400,
        height: 790,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)"
    },
    rect3: {
        width: 350,
        height: 99,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.38,
        shadowRadius: 0,
        borderRadius: 15,
        marginTop: 87,
        marginLeft: 25
    },
    directoryNumber: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        height: 27,
        width: 190,
        fontSize: 20
    },
    directoryNumber1: {
        fontFamily: "roboto-700",
        color: "rgba(248,13,13,1)",
        height: 27,
        width: 150,
        fontSize: 20,
        marginLeft: 10
    },
    directoryNumberRow: {
        height: 28,
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 20,
        marginRight: 16
    },
    accountNumber: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        height: 27,
        width: 190,
        fontSize: 20
    },
    directoryNumber2: {
        fontFamily: "roboto-700",
        color: "rgba(248,13,13,1)",
        height: 27,
        width: 150,
        fontSize: 20,
        marginLeft: 9
    },
    accountNumberRow: {
        height: 28,
        flexDirection: "row",
        marginTop: 5,
        marginLeft: 20,
        marginRight: 16
    },
    duePaymentDetails: {
        fontFamily: "roboto-700",
        color: "rgba(16,40,254,1)",
        lineHeight: 20,
        fontSize: 21,
        width: 266,
        height: 20,
        marginTop: 40,
        marginLeft: 25
    },
    rect4: {
        width: 350,
        height: 52,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.38,
        shadowRadius: 0,
        borderRadius: 15,
        flexDirection: "row",
        marginTop: 14,
        marginLeft: 25
    },
    march7180076: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        height: 27,
        width: 89,
        fontSize: 20
    },
    rs200000: {
        fontFamily: "roboto-700",
        color: "rgba(248,13,13,1)",
        height: 27,
        width: 129,
        fontSize: 20,
        marginLeft: 73
    },
    march7180076Row: {
        height: 28,
        flexDirection: "row",
        flex: 1,
        marginRight: 25,
        marginLeft: 44,
        marginTop: 11
    },
    rect5: {
        width: 350,
        height: 52,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.38,
        shadowRadius: 0,
        borderRadius: 15,
        flexDirection: "row",
        marginTop: 22,
        marginLeft: 28
    },
    april: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        height: 30,
        width: 89,
        fontSize: 20
    },
    rs200001: {
        fontFamily: "roboto-700",
        color: "rgba(248,13,13,1)",
        height: 30,
        width: 129,
        fontSize: 20,
        marginLeft: 69
    },
    aprilRow: {
        height: 28,
        flexDirection: "row",
        flex: 1,
        marginRight: 32,
        marginLeft: 41,
        marginTop: 11
    },
    rect6: {
        width: 350,
        height: 52,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.38,
        shadowRadius: 0,
        borderRadius: 15,
        flexDirection: "row",
        marginTop: 24,
        marginLeft: 25
    },
    may: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        height: 30,
        width: 89,
        fontSize: 20
    },
    rs200002: {
        fontFamily: "roboto-700",
        color: "rgba(248,13,13,1)",
        height: 27,
        width: 129,
        fontSize: 20,
        marginLeft: 69
    },
    mayRow: {
        height: 30,
        flexDirection: "row",
        flex: 1,
        marginRight: 29,
        marginLeft: 44,
        marginTop: 11
    },
    rect7: {
        width: 350,
        height: 154,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.38,
        shadowRadius: 0,
        borderRadius: 12,
        marginTop: 32,
        marginLeft: 28
    },
    billAmount3: {
        fontFamily: "roboto-700",
        color: "rgba(248,13,13,1)",
        height: 27,
        width: 320,
        fontSize: 20,
        marginTop: 26,
        marginLeft: 28
    },
    cardType3: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        height: 30,
        width: 134,
        fontSize: 20,
        marginTop: 17,
        marginLeft: 28
    },
    rect8: {
        width: 22,
        height: 17,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "rgba(18,29,130,1)",
        marginTop: 8
    },
    visa: {
        fontFamily: "roboto-700",
        color: "rgba(16,40,254,1)",
        height: 27,
        width: 56,
        fontSize: 20,
        marginLeft: 14
    },
    rect9: {
        width: 22,
        height: 17,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "rgba(18,29,130,1)",
        marginLeft: 10,
        marginTop: 8
    },
    master: {
        fontFamily: "roboto-700",
        color: "rgba(16,40,254,1)",
        height: 27,
        width: 85,
        fontSize: 20,
        marginLeft: 8
    },
    rect10: {
        width: 22,
        height: 17,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "rgba(18,29,130,1)",
        marginLeft: 8,
        marginTop: 8
    },
    amex: {
        fontFamily: "roboto-700",
        color: "rgba(16,40,254,1)",
        height: 27,
        width: 60,
        fontSize: 20,
        marginLeft: 8
    },
    rect8Row: {
        height: 28,
        flexDirection: "row",
        marginTop: 13,
        marginLeft: 28,
        marginRight: 21
    },
    button1: {
        width: 267,
        height: 55,
        backgroundColor: "rgba(248,13,13,1)",
        borderRadius: 15,
        marginTop: 26,
        marginLeft: 72
    },
    proceed: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        lineHeight: 25,
        fontSize: 26,
        width: 129,
        height: 32,
        marginTop: 16,
        marginLeft: 80
    },
    rect2: {
        top: 0,
        width: 415,
        height: 57,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 5,
        shadowOpacity: 0.15,
        shadowRadius: 0,
        left: 0
    },
    duePayments: {
        fontFamily: "roboto-regular",
        color: "rgba(16,40,254,1)",
        lineHeight: 20,
        fontSize: 21,
        width: 170,
        height: 20,
        marginTop: 18,
        marginLeft: 81
    },
    rect1Stack: {
        width: 417,
        height: 790
    }
});

export default DuePayment
