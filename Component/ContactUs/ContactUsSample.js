import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput, TouchableOpacity
} from "react-native";
import { RadioButton } from 'react-native-paper';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Button, HStack, Stack} from "native-base";

function ContactUsSample({navigation}){
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingFont}>Contact Us</Text>
                </View>
                <View style={styles.card1}>
                    <View style={styles.headOfficeDetail}>
                        <View style={styles.conactUsHeadingView}>
                            <Text style={styles.conactUsHeadingFont}>Head Office</Text>
                        </View>
                        <View style={styles.contactUsDetailView}>
                            <Text style={{ fontWeight: "bold", fontSize: 18, margin: 5 }}>
                                No. 344, Galle Road, Colombo 03
                            </Text>
                            <Text style={{ fontSize: 18, margin: 5 }}>
                                Hotline : <Text style={{ fontWeight: "bold" }}>1575</Text>
                            </Text>
                            <Text style={{ fontSize: 18, margin: 5 }}>
                                Email :{" "}
                                <Text style={{ fontWeight: "bold" }}>
                                    bellcare@mail.lankabell.com
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    {/* <Button title="Branch Network"></Button> */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("BRANCH NETWORK")}
                        underlayColor="#fff"
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: "white",
                                fontWeight: "bold",
                                padding: 5,
                            }}
                        >
                            BRANCH NETWORK
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card2}>

                    <Text style={styles.FeedbackView}>
                        <Text style={{ fontSize: 20 }}>Your Opinion Matters!</Text>
                    </Text>
                    <Text
                        onPress={() => navigation.navigate('FEEDBACK')}
                        style={styles.FeedbackView}
                    >
                        Drop Yourstyle{" "}
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: "blue",
                                textDecorationLine: "underline",
                                textTransform: "uppercase",
                                fontSize: 20,
                            }}
                        >
                            feedback
                        </Text>{" "}
                        here
                    </Text>

                </View>


                <View style={styles.card3}>
                    <Text style={styles.ComplaintView}>
                        <Text style={{ fontSize: 20 }}>Had any issues?</Text>
                    </Text>
                    <Text
                        style={styles.ComplaintView}
                        onPress={() => navigation.navigate('COMPLAINT SUBMISSION')}
                    >
                        Drop your{" "}
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: "red",
                                textDecorationLine: "underline",
                                textTransform: "uppercase",
                                fontSize: 20,
                            }}
                        >
                            complaint
                        </Text>{" "}
                        here
                    </Text>
                </View>
        </View>
</NativeBaseProvider>
    )

}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',

        },
        card1: {
            alignItems: 'center',
            width: wp('90%'),
            height: hp('25%'),
            top: hp('3%'),
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
    card2:{
        alignItems:'center',
        width: wp('90%'),
        height: hp('13%'),
        top:hp('3%'),
        //bottom:hp('2%'),
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
    card3:{
        alignItems:'center',
        width: wp('90%'),
        height: hp('13%'),
        top:hp('7%'),
        //bottom:hp('2%'),
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
    ContactUsrow: {
        // backgroundColor: 'brown',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        // marginBottom: 80,
        //marginBottom: 35,
    },
    FeedBackCompalaintrow: {
        //backgroundColor: "brown",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        //marginTop: -70,
        marginBottom: 15,
        // boxWithShadow:
    },
    headOfficeDetail: {
        // width: "90%",
        // height: '60%',
        // backgroundColor: 'grey',
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
        // borderColor: "#000000",
        // borderRadius: 10,
        borderColor: "white",
        elevation: 5,
        shadowColor: "white",
        //padding: 15,
        borderRadius: 2,
        borderWidth: 16,
    },
    feedbackBox: {
        // width: "90%",
        // // height: '45%',
        // // backgroundColor: 'grey',
        // alignItems: "center",
        // justifyContent: "center",
        // // borderWidth: 1,
        // // borderColor: "blue",
        // // borderRadius: 10,
        // //marginBottom: -30,
        // height: '45%',
        // backgroundColor: 'grey',
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        elevation: 5,
        shadowColor: "white",
        //padding: 5,
        borderRadius: 3,
        borderWidth: 16,
    },
    ComplaintBox: {
        width: "90%",
        // height: '45%',
        // backgroundColor: 'grey',
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        elevation: 5,
        shadowColor: "white",
        //padding: 15,
        borderRadius: 2,
        borderWidth: 16,
    },
    heading: {
        width: "100%",
        alignItems: "center",
        //backgroundColor: "brown",
        marginTop: 20,
    },
    headingFont: {
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "blue",
    },
    conactUsHeadingView: {
        // backgroundColor: 'blue',
        marginBottom: 12,
        width: "100%",
        //paddingLeft: 10,
        marginRight: "60%"
    },
    contactUsDetailView: {
        // backgroundColor: 'green',
        width: "100%",
        //paddingLeft: 10,
        marginRight: "5%"

    },
    conactUsHeadingFont: {
        fontSize: 20,
        margin: 5,
        fontWeight: "bold",
    },
    contactUsDetailFont: {
        fontSize: 18,
        margin: 5,
    },
    FeedbackView: {
        // backgroundColor: 'blue',
        // margin: 10,
        marginTop: "1%",
        padding: 2,
        width: "100%",
        fontSize: 25,
        paddingLeft: 20,
    },
    ComplaintView: {
        // backgroundColor: 'blue',
        marginTop: "1%",
        width: "100%",
        fontSize: 25,
        //padding: 2,
        paddingLeft: 20,
    },
    button: {
        marginTop: 45,
        marginBottom: 20,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        // borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "red",
    },
})

export default ContactUsSample;