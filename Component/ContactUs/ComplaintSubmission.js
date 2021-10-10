import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ComplaintSubmission({navigation}) {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Contact, setContact] = useState('');
    const [Description, setDescription] = useState('');
    const [NameValue, setNameValue] = useState('');
    const [EmailValue, setEmailValue] = useState('');
    const [ContactValue, setContactValue] = useState('');
    const [DescriptionValue, setDescriptionValue] = useState('');

    const saveValue = () => {
        if(true) {
            if (Name.length > 3) {
                AsyncStorage.setItem('name', Name);
                // setName('');
                if (Email.length > 10) {
                    AsyncStorage.setItem('email', Email);
                    // setEmail('');
                    if (Contact.length >= 10) {
                        AsyncStorage.setItem('contact', Contact);
                        // setContact('');
                        if (Description.length > 10) {
                            AsyncStorage.setItem('description', Description);
                            ToastAndroid.show('Complaint has been successfully submitted, we will get back to you soon',ToastAndroid.LONG)

                            setName('');
                            setEmail('');
                            setContact('');
                            setDescription('');

                        } else {
                            ToastAndroid.show('Please fill every required detail',ToastAndroid.LONG)
                        }
                    } else {
                        ToastAndroid.show('Please fill every required detail',ToastAndroid.LONG)
                    }
                } else {
                    ToastAndroid.show('Please fill every required detail',ToastAndroid.LONG)
                }
            } else {
                ToastAndroid.show('Please fill every required detail',ToastAndroid.LONG)
            }


            // if (Name.length > 3 ) {
            //     AsyncStorage.setItem('name', Name);
            //     setName('');
            // } else {
            //     alert('Please fill name')
            // }
            //
            // if (Email.length > 10) {
            //     AsyncStorage.setItem('email', Email);
            //     setEmail('');
            // } else {
            //     alert('Please fill your email')
            // }
            //
            // if (Contact.length > 10) {
            //     AsyncStorage.setItem('contact', Contact);
            //     setContact('');
            // } else {
            //     alert('Please fill your contact')
            // }
            //
            // if (Description.length > 10) {
            //     AsyncStorage.setItem('description', Description);
            //     setDescription('');
            // } else {
            //     alert('Please fill Description')
            // }


        }else{
            ToastAndroid.show('Please fill every required detail',ToastAndroid.LONG)
        }

        //alert('Complaint Message Successful, We will get back to you shortly');

    };

    const getValue = () => {

        AsyncStorage.getItem('name').then((NameValue) => {
            setNameValue(NameValue)
        })


        AsyncStorage.getItem('email').then((EmailValue) => {
            setEmailValue(EmailValue)
        })


        AsyncStorage.getItem('contact').then((ContactValue) => {
            setContactValue(ContactValue)
        })


        AsyncStorage.getItem('description').then((DescriptionValue) => {
            setDescriptionValue(DescriptionValue)
        })
    }

    return (
        <View style={styles.body}>
            <View style={styles.heading}>
                <Text style={styles.headingFont}>Complaint Submission</Text>
            </View>
            <View style={{ width: "80%" }}>
                <Text style={{fontSize: 17}}>Login Name</Text>
            </View>
            <View style={styles.row}>
                <TextInput
                    style={{ padding: 10, width: "80%" }}
                    placeholder='John'
                    value={Name}
                    onChangeText={(data) => setName(data)}
                />
            </View>
            <View style={{ width: "80%" }}>
                <Text style={{fontSize: 17}}>Email</Text>
            </View>
            <View style={styles.row}>
                <TextInput
                    style={{ padding: 10, width: "80%" }}
                    //onChangeText={onChangeNumber}
                    //value={number}
                    value={Email}
                    placeholder="john@xyz.com"
                    keyboardType="email-address"
                    onChangeText={(data) => setEmail(data)}
                />
            </View>
            <View style={{ width: "80%" }}>
                <Text style={{fontSize: 17}}>Alternative Contact</Text>
            </View>
            <View style={styles.row}>
                <TextInput
                    style={{ padding: 10, width: "80%" }}
                    //onChangeText={onChangeNumber}
                    //value={number}
                    value={Contact}
                    placeholder="011234567"
                    keyboardType="numeric"
                    onChangeText={(data) => setContact(data)}
                />
            </View>
            <View style={{ width: "80%" }}>
                <Text style={{fontSize: 17}}>Complaint Description</Text>
            </View>
            <View style={styles.row}>
                <TextInput
                    style={{ padding: 20, width: "80%" }}
                    //onChangeText={onChangeNumber}
                    //value={number}
                    value={Description}
                    placeholder="Internet is slow"
                    keyboardType="ascii-capable"
                    onChangeText={(data) => setDescription(data)}
                />
            </View>
            <View style={styles.button}>
                <View style={styles.cancelButton}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CONTACT US')}
                        // onPress={getValue}
                        underlayColor="#fff"
                    >
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: 'black' }}>
                            CANCEL
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.submitButton}>
                    <TouchableOpacity
                        onPress={saveValue}
                        underlayColor="#fff"
                    >
                        <Text style={{ fontSize: 18, fontWeight: "bold", color:'white' }}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
             {/*<Text>Name: {NameValue},  Email: {EmailValue}, Contact: {ContactValue}, Description: {DescriptionValue}</Text>*/}

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // backgroundColor: "#00ffff",
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        //backgroundColor: "brown",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
        //marginTop: 10,
        // marginBottom: 80,
        //marginBottom: 35,
    },
    button: {
        //backgroundColor: "green",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        //marginTop: 10,
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
    heading: {
        width: "100%",
        alignItems: "center",
        //backgroundColor: "brown",
        marginBottom: 35,

    },
    headingFont: {
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "blue",
    },
    input: {
        borderWidth: 3,
        // paddingRight: 80,
        // paddingLeft: 80,
    },
    inputArea: {
        borderWidth: 3,
        // paddingRight: 80,
        // paddingLeft: 80,
        // paddingTop: 20,
        // paddingBottom: 20,
        width: "100%",
    },
    button1: {
        marginTop: 30,
        padding: 10,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "red",
        // flex: 1,
        alignItems: "center",
        marginRight: 40,
    },
    button2: {
        marginTop: 30,
        padding: 10,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "red",
        backgroundColor: "red",
        // flex: 1,
        alignItems: "center",
        marginLeft: 40,
    },
});
