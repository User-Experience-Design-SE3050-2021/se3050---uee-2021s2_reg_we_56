import React from "react";
import {
    Button,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export default function AccountOptions({navigation}) {
    return (

        <View style={styles.body}>
            <View style={styles.heading}>
                <Text style={styles.headingFont}>ACCOUNT OPTIONS</Text>
            </View>

            <View style={styles.FeedBackCompalaintrow}>
                <View style={styles.feedbackBox}>
                    {/* <Text style={styles.FeedbackView}>
            <Text style={{ fontSize: 20 }}>Your Opinion Matters!</Text>
          </Text> */}
                    <Text
                        onPress={() => navigation.navigate('USER PROFILE')}
                        style={styles.FeedbackView}
                    >
                        USER PROFILE
                        {/* <Text
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
            here */}
                    </Text>
                </View>
            </View>



            <View style={styles.FeedBackCompalaintrow}>
                <View style={styles.ComplaintBox}>
                    {/* <Text style={styles.ComplaintView}>
            <Text style={{ fontSize: 20 }}>Had any issues?</Text>
          </Text> */}
                    <Text
                        style={styles.ComplaintView}
                        onPress={() => navigation.navigate('ACCOUNT DETAILS')}
                    >
                        ACCOUNT DETAILS
                        {/* <Text
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
            here */}
                    </Text>
                </View>
            </View>

            <View style={styles.FeedBackCompalaintrow}>
                <View style={styles.ComplaintBox}>
                    {/* <Text style={styles.ComplaintView}>
            <Text style={{ fontSize: 20 }}>Had any issues?</Text>
          </Text> */}
                    <Text
                        style={styles.ComplaintView}
                        onPress={() => navigation.navigate('LOGIN DETAILS')}
                    >
                        LOGIN DETAILS
                        {/*<Text
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
            here */}
                    </Text>
                </View>
            </View>


        </View>

    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        // backgroundColor: '#00ffff',
        alignItems: "center",
        justifyContent: "center",
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
        marginBottom: 25,
        // boxWithShadow:
    },
    headOfficeDetail: {
        width: "90%",
        // height: '60%',
        // backgroundColor: 'grey',
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
        // borderColor: "#000000",
        // borderRadius: 10,
        borderColor: "white",
        elevation: 4,
        shadowColor: "white",
        //padding: 15,
        borderRadius: 2,
        borderWidth: 16,
    },
    feedbackBox: {
        // // width: "90%",
        // // // height: '45%',
        // // // backgroundColor: 'grey',
        // // alignItems: "center",
        // // justifyContent: "center",
        // // // borderWidth: 1,
        // // // borderColor: "blue",
        // // // borderRadius: 10,
        // // //marginBottom: -30,
        // // height: '45%',
        // // backgroundColor: 'grey',
        // width: "90%",
        // alignItems: "center",
        // justifyContent: "center",
        // borderColor: "white",
        // elevation: 5,
        // shadowColor: "white",
        // //padding: 5,
        // borderRadius: 3,
        // borderWidth: 16,
        alignItems:'center',
        width: wp('90%'),
        height: hp('12%'),
        top:hp('1%'),
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
    ComplaintBox: {
        // width: "90%",
        // // height: '45%',
        // // backgroundColor: 'grey',
        // alignItems: "center",
        // justifyContent: "center",
        // borderColor: "white",
        // elevation: 5,
        // shadowColor: "white",
        // //padding: 15,
        // borderRadius: 2,
        // borderWidth: 16,
        alignItems:'center',
        width: wp('90%'),
        height: hp('12%'),
        top:hp('1%'),
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
    heading: {
        width: "100%",
        alignItems: "center",
        //backgroundColor: "brown",
        marginBottom: 30,
        // paddingBottom: 70
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
        paddingLeft: 10,
    },
    contactUsDetailView: {
        // backgroundColor: 'green',
        width: "100%",
        paddingLeft: 10,
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
        //margin: 10,
        padding: 20,
        width: "100%",
        fontSize: 25,
        paddingLeft: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    ComplaintView: {
        // backgroundColor: 'blue',
        //marginBottom: 12,
        width: "100%",
        fontSize: 25,
        padding: 20,
        paddingLeft: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        marginTop: 25,
        marginBottom: 50,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        // borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "red",
    },
});
