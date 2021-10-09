/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {ScrollView, VStack} from "native-base";
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";

function ViewPackages(props) {
  return (
      <NativeBaseProvider>
      <ScrollView>
    <View style={styles.container}>
      <Text style={styles.wiFiPacakages}>Wi-Fi Pacakages</Text>

      <VStack space={4} alignItems="center">
      <TouchableOpacity style={styles.button}>
        <View style={styles.bellsFamilyPackColumnRow}>
          <View style={styles.bellsFamilyPackColumn}>
            <Text style={styles.bellsFamilyPack}>Bells Family Pack</Text>
            <Text style={styles.rs150000}>Rs. 1500.00</Text>
            <Text style={styles.bellsFamilyPack1}>30 Days (One Time)</Text>
          </View>
          <View style={styles.group}>
            <View style={styles.rect}>
              <Text style={styles.loremIpsum}>80 GB</Text>
              <Text style={styles.anytime40Gb}>Anytime 40 GB</Text>
              <Text style={styles.night40Gb}>Night 40 GB</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.bellsFamilyPackColumnRow}>
          <View style={styles.bellsFamilyPackColumn}>
            <Text style={styles.bellsFamilyPack}>Bells Double Pack</Text>
            <Text style={styles.rs150000}>Rs. 2500.00</Text>
            <Text style={styles.bellsFamilyPack1}>30 Days (One Time)</Text>
          </View>
          <View style={styles.group}>
            <View style={styles.rect}>
              <Text style={styles.loremIpsum}>130 GB</Text>
              <Text style={styles.anytime40Gb}>Anytime 80 GB</Text>
              <Text style={styles.night40Gb}>Night 50 GB</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.bellsFamilyPackColumnRow}>
            <View style={styles.bellsFamilyPackColumn}>
              <Text style={styles.bellsFamilyPack}>Bells Deal Pack</Text>
              <Text style={styles.rs150000}>Rs. 1700.00</Text>
              <Text style={styles.bellsFamilyPack1}>30 Days (One Time)</Text>
            </View>
            <View style={styles.group}>
              <View style={styles.rect}>
                <Text style={styles.loremIpsum}>100 GB</Text>
                <Text style={styles.anytime40Gb}>Anytime 30 GB</Text>
                <Text style={styles.night40Gb}>Night 60 GB</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </VStack>

      {/*<View style={styles.showMoreRow}>*/}
      {/*  <Text style={styles.showMore}>Show More</Text>*/}
      {/*  /!*<Icon name="chevron-small-down" style={styles.icon}></Icon>*!/*/}
      {/*</View>*/}

      <Text style={styles.workAndLearn}>Work and Learn</Text>
      <VStack space={4} alignItems="center">

      <TouchableOpacity style={styles.button2}>
        <View style={styles.videoConfereingColumnRow}>
          <View style={styles.videoConfereingColumn}>
            <Text style={styles.videoConfereing}>Video Confereing</Text>
            <Text style={styles.rs250001}>Rs. 2500.00</Text>
            <Text style={styles.bellsFamilyPack6}>30 Days Valid</Text>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.loremIpsum2}>30 GB</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
        <View style={styles.videoConfereingColumnRow}>
          <View style={styles.videoConfereingColumn}>
            <Text style={styles.videoConfereing}>Office Package</Text>
            <Text style={styles.rs250001}>Rs. 1500.00</Text>
            <Text style={styles.bellsFamilyPack6}>30 Days Valid</Text>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.loremIpsum2}>30 GB</Text>
          </View>
        </View>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <View style={styles.videoConfereingColumnRow}>
            <View style={styles.videoConfereingColumn}>
              <Text style={styles.videoConfereing}>School Package</Text>
              <Text style={styles.rs250001}>Rs. 1000.00</Text>
              <Text style={styles.bellsFamilyPack6}>30 Days Valid</Text>
            </View>
            <View style={styles.rect2}>
              <Text style={styles.loremIpsum2}>20 GB</Text>
            </View>
          </View>
        </TouchableOpacity>
      </VStack>

      {/*<View style={styles.showMore1Row}>*/}
      {/*  <Text style={styles.showMore1}>Show More</Text>*/}
      {/*  /!*<EntypoIcon name="chevron-small-down" style={styles.icon1}></EntypoIcon>*!/*/}
      {/*</View>*/}

    </View>
</ScrollView>
      </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.86,
    backgroundColor: "rgba(255,255,255,1)"
  },
  wiFiPacakages: {
    fontFamily: "roboto-700",
    color: '#002b80',
    height: 39,
    width: 195,
    fontSize: 20,
    marginTop: "8%",
    marginLeft: "5%",
    fontWeight:'bold'
  },
  button: {
    width: 318,
    height: 124,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 11,
    marginLeft: "1%"
  },
  bellsFamilyPack: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 17
  },
  rs150000: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontWeight:"bold",
    fontSize: 19,
    marginTop: "5%"
  },
  bellsFamilyPack1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    opacity: 0.54,
    marginTop: "5%"
  },
  bellsFamilyPackColumn: {
    width: 166,
    marginTop: "6%",
    // marginBottom: 19
  },
  group: {
    width: 122,
    height: 124,
    marginLeft: "5%"
  },
  rect: {
    width: 122,
    height: 124,
    backgroundColor: "#E6E6E6",
    borderRadius: 4,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontWeight:"bold",
    fontSize: 24,
    marginTop: "12%",
    marginLeft: "17%"
  },
  anytime40Gb: {
    fontFamily: "roboto-700",
    color: "rgba(0,80,171,1)",
    fontWeight:"bold",
    marginTop: "5%",
    marginLeft: "12%"
  },
  night40Gb: {
    fontFamily: "roboto-700",
    color: "rgba(0,80,171,1)",
    fontWeight:"bold",
    marginTop: "5%",
    marginLeft: "12%"
  },
  bellsFamilyPackColumnRow: {
    height: 124,
    flexDirection: "row",
    marginLeft: "5%"
  },

  showMore: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    marginTop: "5%",
    fontWeight:"bold",
  },

  showMoreRow: {
    height: 37,
    flexDirection: "row",
    marginTop: "5%",
    marginLeft: "40%",
  },
  workAndLearn: {
    fontFamily: "roboto-700",
    color: '#002b80',
    height: 39,
    width: 195,
    fontSize: 20,
    marginTop: "4%",
    marginLeft: "5%",
    fontWeight:'bold'
  },
  button2: {
    width: 318,
    height: 124,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 11,
    marginLeft: "1%"
  },
  videoConfereing: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 17
  },
  rs250001: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontSize: 19,
    fontWeight:"bold",
    marginTop: "5%"
  },
  bellsFamilyPack6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    opacity: 0.54,
    marginTop: "5%"
  },
  videoConfereingColumn: {
    width: 142,
    marginTop:"5%",
    // marginBottom: 19
  },
  rect2: {
    width: 122,
    height: 124,
    backgroundColor: "#E6E6E6",
    borderRadius: 4,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    marginLeft: "12%"
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontSize: 24,
    fontWeight:"bold",
    marginTop: "33%",
    marginLeft: "26%"
  },
  videoConfereingColumnRow: {
    height: 124,
    flexDirection: "row",
    marginLeft: "6%"
  },
  showMore1: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontWeight:"bold",
    marginTop: "7%"
  },

  showMore1Row: {
    height: 37,
    flexDirection: "row",
    marginTop: "5%",
    marginLeft: "42%",
  }

});

export default ViewPackages;
