import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput
} from "react-native";

const Feedback = () => {
    const [defaultRating, setdefaultRating] = useState(2);
    const [maxRating, setmaxRaing] = useState([1,2,3,4,5]);

    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
    const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

    const CustomRatingBar = () => {
        return(
            <View style={styles.CustomRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return(
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setdefaultRating(item)}
                            >

                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? {uri: starImgFilled}
                                            : {uri: starImgCorner}
                                    }
                                />


                            </TouchableOpacity>
                        )
                    })
                }


            </View>
        )

    }

    return (


        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingFont}>FEEDBACK</Text>
            </View>
            <Text style={styles.textStyle}>Based on your recent experience on our Service, on a scale of 0 to 5, please rate your experience</Text>
            <CustomRatingBar/>
            {/* <Text style = {styles.textStyle}>
                {defaultRating + ' / ' + maxRating.length}
            </Text> */}
            <View style={{ width: "80%" }}>
                <Text style={{fontSize: 17, marginTop: 70, marginLeft: 40, marginBottom: 10}}>Tell Us What You Think</Text>
            </View>
            <View style={styles.row}>
                <TextInput
                    style={{ padding: 3, width: "80%" }}
                    //onChangeText={onChangeNumber}
                    //value={number}
                    //placeholder="Internet is slow"
                    keyboardType="ascii-capable"
                />
            </View>

            {/* <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => {
                    alert(defaultRating)
                    setdefaultRating(2)
                    }
                }
                    >
                    <Text style={{textAlign:'center'}}>Get Selected Value</Text>
                </TouchableOpacity> */}



            <View style={styles.button}>
                <View style={styles.cancelButton}>
                    <TouchableOpacity
                        onPress={() => navigate("HomeScreen")}
                        underlayColor="#fff"
                    >
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: 'black' }}>
                            CANCEL
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.submitButton}>
                    <TouchableOpacity
                        onPress={() => {
                            alert('Thank You for your feedback')
                            setdefaultRating(2)
                        }
                        }
                        underlayColor="#fff"
                    >
                        <Text style={{ fontSize: 18, fontWeight: "bold", color:'white' }}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:10,
        justifyContent:'flex-start'
    },
    row: {
        //backgroundColor: "brown",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 70,
        marginLeft: 40,
        marginRight: 40,
        padding: 10
        // marginTop: 50,
        // marginBottom: 80,
        //marginBottom: 35,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        padding: 30
    },
    CustomRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    buttonStyle:{
        justifyContent:'center',
        alignContent: 'center',
        marginTop: 30,
        padding: 15,
        backgroundColor: 'green'

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
    button: {
        //backgroundColor: "green",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    cancelButton: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: 'red',
        alignItems: "center",
        justifyContent: "center",
        //padding: 20,
        padding: 10,
        marginRight: 40,
        marginLeft: 40,
    },
    submitButton: {
        flex: 1,
        borderWidth: 3,
        backgroundColor: "red",
        borderRadius: 10,
        borderColor: 'red',
        alignItems: "center",
        justifyContent: "center",
        //padding: 20,
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
    },
})

export default Feedback;