import React, {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';

export default function ListScrollView() {
    const [Items, setItems] = useState([
        {key: 1, location: 'Head Office', address: 'No. 344, Galle Road, Colombo 03', hotline: 1575, email: 'bellcare@mail.lankabell.com'},
        {key: 2, location: 'Ampara', address: 'No. 14/1, New Galle Road, Ambalangoda', telephone: '0911234584'},
        {key: 3, location: 'Ampara', address: 'No. 14/1, New Galle Road, Ambalangoda', telephone: '0911234584'},
        {key: 4, location: 'Ampara', address: 'No. 14/1, New Galle Road, Ambalangoda', telephone: '0911234584'},
        {key: 5, location: 'Ampara', address: 'No. 14/1, New Galle Road, Ambalangoda', telephone: '0911234584'},
        {key: 6, location: 'Ampara', address: 'No. 14/1, New Galle Road, Ambalangoda', telephone: '0911234584'},
        {key: 7, location: 'Ampara', address: 'No. 14/1, New Galle Road, Ambalangoda', telephone: '0911234584'},
        {key: 8, location: 'Ampara', address: 'No. 14/1, New Galle Road, Ambalangoda', telephone: '0911234584'},
        {key: 9, location: 'Ampara', address: 'No. 14/1, New Galle Road, Ambalangoda', telephone: '0911234584'},
    ]);
    // const [Refresh, setRefresh] = useState(false);

    // const onRefresh = () => {
    //   setRefresh(true);
    //   setItems([...Items, {key: 9, item: 'Item 20'}]);
    //   setRefresh(false);
    // };

    return (
        <View style={styles.body}>
            <View style={styles.heading}>
                <Text style={styles.headingFont}>BRANCH NETWORK</Text>
            </View>

            <ScrollView
                style={styles.body}
                // refreshControl={
                //   <RefreshControl
                // refreshing={Refresh}
                // onRefresh={onRefresh}
                // colors={['#ff00ff', '#00ffff']}
                ///>
            >

                <View style={styles.row}>
                    <TextInput
                        style={{ padding: 10, width: "80%" }}
                        //onChangeText={onChangeNumber}
                        //value={number}
                        placeholder="Search"
                        keyboardType="ascii-capable"
                    />
                </View>

                {Items.map(i => {
                    return (
                        // <View style={styles.item} key={i.key}>
                        //   <Text style={styles.text}>{i.item}</Text>
                        // </View>
                        <View style={[styles.ContactUsrow, styles.elevation]}>
                            <View style={styles.headOfficeDetail}>
                                <View style={styles.conactUsHeadingView}>
                                    <Text style={styles.conactUsHeadingFont}>{i.location}</Text>
                                </View>

                                <View style={styles.contactUsDetailView}>
                                    <Text style={{ fontWeight: "bold", fontSize: 17, margin: 5 }}>
                                        {i.address}
                                    </Text>
                                    <Text style={{ fontSize: 18, margin: 5 }}>
                                        {
                                            i.location === 'Head Office' ? <Text>Hotline: {i.hotline}</Text> : <Text>Telephone: {i.telephone}</Text>
                                        }
                                        {/* <Text style={{ fontWeight: "bold" }}>{i.telephone}</Text> */}
                                    </Text>

                                    {
                                        i.location === 'Head Office' ?  <Text style={{ fontSize: 18, margin: 5}}><Text>Email :{" "} {i.email}</Text> </Text> : null
                                    }


                                    {/* <Text style={{ fontWeight: "bold" }}>
                bellcare@mail.lankabell.com
              </Text> */}

                                </View>
                            </View>
                        </View>

                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // backgroundColor: '#00ffff',
        // alignItems: "center",
        // justifyContent: "center",
    },
    heading: {
        width: "100%",
        alignItems: "center",
        //backgroundColor: "brown",
        marginTop: 100,
        marginBottom: 35,
    },
    headingFont: {
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "blue",
    },
    item: {
        backgroundColor: 'yellow',
        marginTop: 20,
        padding: 10,
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
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
        elevation: 5,
        shadowColor: "white",
        //padding: 15,
        borderRadius: 2,
        borderWidth: 16,
    },
    conactUsHeadingView: {
        // backgroundColor: 'blue',
        marginBottom: 12,
        width: "100%",
        paddingLeft: 10,
    },
    conactUsHeadingFont: {
        fontSize: 20,
        margin: 5,
        fontWeight: "bold",
    },
    contactUsDetailView: {
        // backgroundColor: 'green',
        width: "100%",
        paddingLeft: 10,
    },
    row: {
        //backgroundColor: "brown",
        width: '90%',
        marginLeft: 20,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        //marginTop: 10,
        // marginBottom: 80,
        //marginBottom: 35,
    },
});
