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

function ViewDataAddOn({navigation}){
    const [onChange, setOnChange] = React.useState(0);

    const getChange =() =>{
        if (onChange === 1){
            return '1 GB Anytime';
        }else if (onChange === 2){
            return '2 GB Anytime';
        }else if (onChange === 3){
            return '5 GB Anytime';
        }else if (onChange === 4){
            return '10 GB Anytime';
        }else if (onChange === 5){
            return '15 GB Anytime';
        }else if (onChange === 6){
            return '20 GB Anytime';
        }else if (onChange === 7){
            return '30 GB Anytime';
        }else {
            return '0 GB Anytime';
        }
    }
    return (
        <NativeBaseProvider>
            {/****************SlideBar and data Amount********************************************/}
   <View style={styles.container}>
       <Text style={styles.dataValue}> {getChange()} </Text>
       <Text style={styles.dataNumber}> GB  </Text>
    <Slider  style={styles.slider} size="md"  minimumTrackTintColor="#ff0000" thumbTintColor="#ff0000"
             minimumValue={0} maximumValue={7} step={1} onValueChange={setOnChange}
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
                       //  onPress={() => console.log('hello world')}
                       onPress={() => navigation.navigate('ViewHomePage')}
                   >
                       Cancel
                   </Button>

                   <Button
                       size="lg"
                       colorScheme="danger"
                       style={styles.btn}
                       //  onPress={() => console.log('hello world')}
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
