import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    // Switch,
} from "react-native";

import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Button, HStack, Stack, Switch, VStack} from "native-base";
import {ScrollView} from "react-native-gesture-handler";
// import ToggleSwitch from "toggle-switch-react-native";


function UsageHistory() {
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.card1}>
                    <VStack w="100%" h="96%">
                    <ScrollView>
                    <View style={styles.listView}>
                        <Text style={styles.list}>Usage List View</Text>
                    </View>
                    <View>
                        <HStack space={2} alignItems="center">
                            <Text style={styles.date}>Date</Text>
                            <Text style={styles.type}>Type</Text>
                            <Text style={styles.data}>Data</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>11.Sep.2021</Text>
                            <Text style={styles.type1}>AnyTime</Text>
                            <Text style={styles.data1}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>11.Sep.2021</Text>
                            <Text style={styles.type1}>Night Time</Text>
                            <Text style={styles.data2}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>10.Sep.2021</Text>
                            <Text style={styles.type1}>AnyTime</Text>
                            <Text style={styles.data1}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>11.Sep.2021</Text>
                            <Text style={styles.type1}>Night Time</Text>
                            <Text style={styles.data2}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>10.Sep.2021</Text>
                            <Text style={styles.type1}>AnyTime</Text>
                            <Text style={styles.data1}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>09.Sep.2021</Text>
                            <Text style={styles.type1}>Night Time</Text>
                            <Text style={styles.data2}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>09.Sep.2021</Text>
                            <Text style={styles.type1}>AnyTime</Text>
                            <Text style={styles.data1}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>08.Sep.2021</Text>
                            <Text style={styles.type1}>Night Time</Text>
                            <Text style={styles.data2}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>08.Sep.2021</Text>
                            <Text style={styles.type1}>AnyTime</Text>
                            <Text style={styles.data1}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>07.Sep.2021</Text>
                            <Text style={styles.type1}>Night Time</Text>
                            <Text style={styles.data2}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>07.Sep.2021</Text>
                            <Text style={styles.type1}>AnyTime</Text>
                            <Text style={styles.data1}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style=
                                      {styles.date1}>06.Sep.2021</Text>
                            <Text style={styles.type1}>Night Time</Text>
                            <Text style={styles.data2}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>06.Sep.2021</Text>
                            <Text style={styles.type1}>AnyTime</Text>
                            <Text style={styles.data1}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>05.Sep.2021</Text>
                            <Text style={styles.type1}>Night Time</Text>
                            <Text style={styles.data2}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>05.Sep.2021</Text>
                            <Text style={styles.type1}>AnyTime</Text>
                            <Text style={styles.data1}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>04.Sep.2021</Text>
                            <Text style={styles.type1}>Night Time</Text>
                            <Text style={styles.data2}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>04.Sep.2021</Text>
                            <Text style={styles.type1}>AnyTime</Text>
                            <Text style={styles.data1}>500 MB</Text>
                        </HStack>
                        <HStack space={3} alignItems="center">
                            <Text style={styles.date1}>03.Sep.2021</Text>
                            <Text style={styles.type1}>Night Time</Text>
                            <Text style={styles.data2}>500 MB</Text>
                        </HStack>
                    </View>
                    </ScrollView>
                    </VStack>

                    <View style={styles.card2}>
                        <View>
                            <HStack space={2} alignItems="center">
                                <Text style={styles.dataSaver}>You Tube Data Saver</Text>
                                {/*<Switch*/}
                                {/*    style={styles.switch}*/}
                                {/*        // ios_backgroundColor="#3e3e3e"*/}
                                {/*        value={isEnabled}*/}
                                {/*        onValueChange={(value) => setIsEnabled(value)}*/}
                                {/*        trackColor={{ false: "#767577", true: "#3cd303" }}*/}
                                {/*        thumbColor={isEnabled ? "#ffffff" : "#3cd303"}*/}
                                {/*/>*/}
                                <Switch
                                    style={styles.switch}
                                    offTrackColor="indigo.100"
                                    onTrackColor="indigo.200"
                                    onThumbColor="indigo.500"
                                    offThumbColor="indigo.50"
                                />
                            </HStack>
                            <View style={styles.dataSaverView}>
                                <Text style={styles.description}>Effectively manage your data usage by reducing the quality of YouTube videos.</Text>
                            </View>
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

    },

    card1:{
        width: wp('90%'),
        height: hp('65%'),
        top:hp('5%'),
        left:wp('5%'),
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
    listView:{
        width: wp('85%'),
        height: hp('5%'),
    },

    list:{
        fontSize: hp('3%'),
        color: '#002b80',
        padding: hp('.5%'),
        fontWeight: "bold",
        left:hp('3%')

    },

    date:{
        fontSize: hp('2.6%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        fontWeight: "bold",
        left:hp('4%'),
        top:hp('1%'),
    },
    type:{
        fontSize: hp('2.6%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        fontWeight: "bold",
        top:hp('1%'),
        left:hp('14%')
    },
    data:{
        fontSize: hp('2.6%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        fontWeight: "bold",
        top:hp('1%'),
        left:hp('23%')
    },
    date1:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        left:hp('3%'),
        top:hp('1%'),
    },
    type1:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        top:hp('1%'),
        left:hp('7%')
    },
    data1:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        top:hp('1%'),
        left:hp('12%')
    },

    data2:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        top:hp('1%'),
        left:hp('10%')
    },
    card2:{
        width: wp('100%'),
        height: hp('14%'),
        top:hp('6.2%'),
        right:wp('5%'),
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

    },
    dataSaver:{
        fontSize: hp('2.6%'),
        color: '#002b80',
        padding: hp('.5%'),
        fontWeight: "bold",
        top:hp('1%'),
        left:hp('4%')
    },
    switch:{
        left:hp('15%'),
        top:hp('1%'),
    },
    dataSaverView:{
        width: wp('80%'),
    },
    description:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        padding: hp('.5%'),
        top:hp('1%'),
        left:hp('5%')
    },
})

export default UsageHistory;
