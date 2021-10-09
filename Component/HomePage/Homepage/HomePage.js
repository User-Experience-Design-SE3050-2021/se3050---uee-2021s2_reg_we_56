import React from "react";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {  StyleSheet, Text, View, Image} from "react-native";
import {Center, Divider, Heading, Stack, VStack, ScrollView, Box, HStack, Button, Fab} from "native-base";

function HomePage(){
    return(
        <NativeBaseProvider>
            <View style={styles.initialContainer}>
            <Image
                source={require("../../Images/logo.png")}
                resizeMode="contain"
                style={styles.image}
            >
            </Image>
                    {/********************horizontalView*****************************************/}
                <View style={styles.secondContainer}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            >
            <VStack  mt="3">
                <Stack direction="row" space={3}>

                    <Image
                        source={require("../../Images/offerr7.jpg")}
                        resizeMode="stretch"
                        style={styles.offer1}
                    >
                    </Image>

                    <Image
                        source={require("../../Images/offer2.jpg")}
                        resizeMode="stretch"
                        style={styles.offer1}
                    >
                    </Image>

                    <Image
                        source={require("../../Images/offer3.jpg")}
                        resizeMode="stretch"
                        style={styles.offer1}
                    >
                    </Image>

                    <Image
                        source={require("../../Images/offer6.png")}
                        resizeMode="stretch"
                        style={styles.offer1}
                    >
                    </Image>
                </Stack>
            </VStack>
        </ScrollView>
</View>

                <VStack w="100%" h="62%">
                    <ScrollView>
                        <Text style={styles.headerText}>Data Usage </Text>

                        <Box
                            p="4"
                            style={styles.mainDataBox}
                        >
                            <Text style={styles.mainText}>Data </Text>

                            <HStack space={3} alignItems="center">
                                <Box
                                    style={styles.subBox}
                                    bg="primary.500"
                                    p="3"
                                >
                                    <Text style={styles.subBoxSubText1}>AnyTime </Text>
                                    <Text style={styles.subBoxSubText2}>500 MB</Text>
                                    <Text style={styles.subBoxSubText3}>remaining </Text>
                                </Box>

                                <Box
                                    style={styles.subBox1}
                                    bg="primary.500"
                                    p="3"

                                >
                                    <Text style={styles.subBox1SubText1}>NightTime </Text>
                                    <Text style={styles.subBox1SubText2}>800 MB</Text>
                                    <Text style={styles.subBox1SubText3}>remaining </Text>
                                </Box>
                            </HStack>

                            <HStack space={2} alignItems="center">
                                <Button
                                    size="lg"
                                    colorScheme="danger"
                                    style={styles.butn}
                                    //  onPress={() => console.log('hello world')}
                                >
                                    Adds On
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    colorScheme="danger"
                                    style={styles.butn}
                                    //  onPress={() => console.log('hello world')}
                                >
                                    Usuage
                                </Button>
                            </HStack>
                            <View
                                style={{
                                    borderBottomColor: 'dimgrey',
                                    borderBottomWidth: 1,
                                    marginTop:"4%",
                                    elevation: 3,
                                }}
                            />
                            <HStack space={2} alignItems="center">
                                <View>
                                <Text style={styles.bottomText1}>Total Outstanding Bill </Text>
                                <Text style={styles.bottomText2}> 2500.00 LKR</Text>
                                </View>
                                <Button
                                    size="lg"
                                    colorScheme="danger"
                                    style={styles.butn}
                                    //  onPress={() => console.log('hello world')}
                                >
                                    Pay Now
                                </Button>
                            </HStack>

                        </Box>

                        <Text style={styles.headerText2}>Data Packages </Text>
                        <Box
                            p="3"
                            style={styles.mainDataBox}
                        >
                            <HStack space={2} alignItems="center">
                                <View>
                            <Text style={styles.packageText}>Activate Data </Text>
                            <Text style={styles.packageText2}> Packages</Text>
                            <Text></Text>
                                </View>

                                <Button
                                    size="lg"
                                    colorScheme="danger"
                                    style={styles.butnDown}
                                    //  onPress={() => console.log('hello world')}
                                >
                                    <Text style={styles.arrow}> GO</Text>
                                </Button>

                            </HStack>
                        </Box>

                        <Box
                            p="3"
                            style={styles.mainDataBox}
                        >
                            <Text style={styles.packageCurrentText}>Currently Activated Package </Text>
                            <Text style={styles.packageCurrentText2}> Bell's Double Pack</Text>
                            <Text style={styles.packageCurrentText3}> Change</Text>
                            {/*<Text></Text>*/}
                        </Box>

                    </ScrollView>
                </VStack>

                </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    initialContainer:{
        flex:1,
        // alignItems:'center',
        justifyContent: 'center'
    },

    image: {
        // marginTop:"2%",
        marginRight:"60%",
        // position: "absolute",
        width:"30%",
        height:"15%"
    },

    offer1: {
        width: 241,
        height: 130,
        borderRadius: 21,
        shadowColor: "rgba(0,0,0,1)",
            shadowOffset: {
                width: 28,
                height: 28
            },
    },

    secondContainer:{

    },
    headerText: {
        fontSize: 20,
       marginLeft:"8%",
        marginTop:"4%",
        fontWeight: "bold"
    },

    mainDataBox:{
        width:"89%",
        marginLeft: "5%",
        marginTop: "5%",
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "rgb(193,185,185)",
        shadowOffset: {
            width: 3,
            height: 5
        },
        elevation: 5,
        shadowOpacity: 0.38,
        shadowRadius: 0,
    },

    mainText:{
        color: '#002b80',
        fontSize: 20,
        textDecorationLine: 'underline'
    },

    subBox:{
        backgroundColor: '#1742b0',
        marginTop:"7%",
        borderRadius: 15,
        marginLeft:"4%",
        width:"44%"

    },

    subBoxSubText1:{
        color: "white",
        fontSize: 16
    },

    subBoxSubText2:{
        color: "white",
        fontSize: 19,
        marginTop:"1%",
        fontWeight:'bold'
    },

    subBoxSubText3:{
        color: "white",
        fontSize: 16,
        marginTop:"1%",
    },

    subBox1:{
        backgroundColor: '#1742b0',
        marginTop:"7%",
        borderRadius: 15,
        width:"44%"
    },

    subBox1SubText1:{
        color: "white",
        fontSize: 16
    },

    subBox1SubText2:{
        color: "white",
        fontSize: 19,
        marginTop:"1%",
        fontWeight:'bold'
    },

    subBox1SubText3:{
        color: "white",
        fontSize: 16,
        marginTop:"1%",
    },

    butn: {
        fontWeight: 'bold' ,
        borderRadius:50,
        borderColor:'rgb(246,41,41)',
        borderWidth:2,
        marginLeft:"3%",
        marginTop:"7%",
        width:"44%"
    },
    bottomText1:{
        color: "black",
        fontSize: 15,
        marginTop:"12%",
    },
    bottomText2:{
        color: "red",
        fontSize: 18,
        marginTop:"1%",
        fontWeight:'bold',
        marginLeft:'9%'
    },
    headerText2: {
        fontSize: 20,
        marginLeft:"8%",
        marginTop:"4%",
        fontWeight: "bold"
    },

    packageText:{
        fontSize: 20,
        marginLeft:"12%",
        marginTop:"4%",
        color:"#969696"
    },

    packageText2:{
        fontSize: 22,
        marginLeft:"14%",
        marginTop:"2%",
        color: '#1742b0',
        fontWeight:'bold'
    },

    butnDown:{
      borderRadius:100,
        width: 70,
        height: 43,
        marginLeft:"15%"
    },
    arrow:{
        fontWeight:'bold',
        color:'white',
        fontSize:18,
        marginRight: "3%"
    },
    packageCurrentText:{
        fontSize: 18,
        marginLeft:"7%",
        marginTop:"2%",
        color:"#969696",
    },
    packageCurrentText2:{
        fontSize: 22,
        marginLeft:"7%",
        marginTop:"2%",
        color: '#1742b0',
        fontWeight:'bold'
    },
    packageCurrentText3:{
        color: 'red',
        fontWeight:'bold',
        fontSize: 19,
        marginTop:'3%',
        marginLeft:'70%'
    }
});

export default HomePage;
