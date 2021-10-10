import React from "react";
import RadioButton from "./RadioButton";
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import Slider from '@react-native-community/slider';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {Button, HStack, Stack} from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';

function ViewDataAddOn({navigation}) {
    const [onChange, setOnChange] = React.useState(0);
    const [finalValue, setFinalValue] = React.useState('')

    const handleSliderValue = (value) => {
        setOnChange(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (onChange === 1) {
            await setFinalValue('1 GB');
        } else if (onChange === 2) {
            await setFinalValue('2 GB');
        } else if (onChange === 3) {
            await setFinalValue('3 GB');
        } else if (onChange === 4) {
            await setFinalValue('4 GB');
        } else if (onChange === 5) {
            await setFinalValue('5 GB');
        } else if (onChange === 6) {
            await setFinalValue('6 GB');
        } else if (onChange === 7) {
            await setFinalValue('7 GB');
        } else {
            await setFinalValue('0 GB');
        }

        const data = {
            data: onChange
        }

        console.log(data)

        await AsyncStorage.setItem('data', JSON.stringify(data));
        const value = await AsyncStorage.getItem('data')
        setFinalValue(value)

        navigation.navigate('ViewPayment')
    }

    const getChange = () => {
        if (onChange === 1) {
           return '1 GB';
        } else if (onChange === 2) {
            return '2 GB';
        } else if (onChange === 3) {
            return '3 GB';
        } else if (onChange === 4) {
            return '4 GB';
        } else if (onChange === 5) {
            return '5 GB';
        } else if (onChange === 6) {
            return '6 GB';
        } else if (onChange === 7) {
            return '7 GB';
        } else {
            return '0 GB';
        }
    }
    return (
        <NativeBaseProvider>
            {/****************SlideBar and data Amount********************************************/}
            <View style={styles.container}>
                <Text style={styles.dataValue}> {getChange()} </Text>
                <Text style={styles.dataNumber}> GB </Text>
                <Slider style={styles.slider} size="md" minimumTrackTintColor="#ff0000" thumbTintColor="#ff0000"
                        minimumValue={0} maximumValue={7} step={1} onValueChange={handleSliderValue}
                />
                {/*****************************Radio Button Options Called Here********************************/}
                <RadioButton/>
                {/***************************Reload and Cancel Button**********************************/}
                <Stack space={2} alignItems="center">
                    <HStack space={2} alignItems="center">
                        <Button
                            size="lg"
                            variant="outline"
                            colorScheme="danger"
                            style={styles.btn}
                            onPress={() => navigation.navigate('ViewHomePage')}
                        >
                            Cancel
                        </Button>

                        <Button
                            size="lg"
                            colorScheme="danger"
                            style={styles.btn}
                            //  onPress={() => console.log('hello world')}
                            onPress={handleSubmit}
                        >
                            Reload
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
    justifyContent: 'center'
},
    slider:{
        top: hp('16%'),
        width: wp('90%'),
        // height: hp('10%'),
    },

    dataValue:{
        top: hp('14%'),
        fontFamily: "roboto-regular",
        fontSize: hp('4%'),
        color: "#ff0000",
        fontWeight: "bold"
    },

    dataNumber:{
        fontSize: hp('2%'),
        color: "#5D5C5C",
        left: wp('38%'),
        top: hp('17%'),
        fontWeight: "bold"
    },
    btn: {
        fontWeight: 'bold' ,
        borderRadius:50,
        borderColor:'rgb(246,41,41)',
        borderWidth:2,
        bottom: hp('13%'),
        width: wp('43%')
    }
})

export default ViewDataAddOn;
