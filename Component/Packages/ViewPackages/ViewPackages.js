/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function ViewPackages(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.wiFiPacakages}>Wi-Fi Pacakages</Text>
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
      <TouchableOpacity style={styles.button1}>
        <View style={styles.bellsDoublePackColumnRow}>
          <View style={styles.bellsDoublePackColumn}>
            <Text style={styles.bellsDoublePack}>Bells Double Pack</Text>
            <Text style={styles.rs250000}>Rs. 2500.00</Text>
            <Text style={styles.bellsFamilyPack5}>30 Days (One Time)</Text>
          </View>
          <View style={styles.rect1}>
            <Text style={styles.loremIpsum1}>130 GB</Text>
            <Text style={styles.anytime41}>Anytime 40 GB</Text>
            <Text style={styles.night41}>Night 40 GB</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.showMoreRow}>
        <Text style={styles.showMore}>Show More</Text>
        {/*<Icon name="chevron-small-down" style={styles.icon}></Icon>*/}
      </View>
      <Text style={styles.workAndLearn}>Work and Learn</Text>
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
      <View style={styles.showMore1Row}>
        <Text style={styles.showMore1}>Show More</Text>
        {/*<EntypoIcon name="chevron-small-down" style={styles.icon1}></EntypoIcon>*/}
      </View>
    </View>
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
    color: "#121212",
    height: 39,
    width: 195,
    fontSize: 20,
    marginTop: 55,
    marginLeft: 22
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
    marginLeft: 21
  },
  bellsFamilyPack: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 17
  },
  rs150000: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontSize: 19,
    marginTop: 11
  },
  bellsFamilyPack1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    opacity: 0.54,
    marginTop: 9
  },
  bellsFamilyPackColumn: {
    width: 166,
    marginTop: 16,
    marginBottom: 19
  },
  group: {
    width: 122,
    height: 124,
    marginLeft: 14
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
    fontSize: 24,
    marginTop: 13,
    marginLeft: 29
  },
  anytime40Gb: {
    fontFamily: "roboto-700",
    color: "rgba(0,80,171,1)",
    marginTop: 11,
    marginLeft: 14
  },
  night40Gb: {
    fontFamily: "roboto-700",
    color: "rgba(0,80,171,1)",
    marginTop: 12,
    marginLeft: 15
  },
  bellsFamilyPackColumnRow: {
    height: 124,
    flexDirection: "row",
    marginLeft: 16
  },
  button1: {
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
    marginTop: 27,
    marginLeft: 22
  },
  bellsDoublePack: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 17
  },
  rs250000: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontSize: 19,
    marginTop: 11
  },
  bellsFamilyPack5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    opacity: 0.54,
    marginTop: 9
  },
  bellsDoublePackColumn: {
    width: 166,
    marginTop: 16,
    marginBottom: 19
  },
  rect1: {
    width: 122,
    height: 124,
    backgroundColor: "#E6E6E6",
    borderRadius: 4,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    marginLeft: 14
  },
  loremIpsum1: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontSize: 24,
    marginTop: 16,
    marginLeft: 22
  },
  anytime41: {
    fontFamily: "roboto-700",
    color: "rgba(0,80,171,1)",
    marginTop: 11,
    marginLeft: 15
  },
  night41: {
    fontFamily: "roboto-700",
    color: "rgba(0,80,171,1)",
    marginTop: 9,
    marginLeft: 15
  },
  bellsDoublePackColumnRow: {
    height: 124,
    flexDirection: "row",
    marginLeft: 16
  },
  showMore: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    marginTop: 10
  },
  icon: {
    color: "rgba(208,2,27,1)",
    fontSize: 34,
    marginLeft: 2
  },
  showMoreRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 139,
    marginRight: 114
  },
  workAndLearn: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 39,
    width: 195,
    fontSize: 20,
    marginTop: 12,
    marginLeft: 23
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
    marginLeft: 23
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
    marginTop: 14,
    marginLeft: 2
  },
  bellsFamilyPack6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    opacity: 0.54,
    marginTop: 13,
    marginLeft: 1
  },
  videoConfereingColumn: {
    width: 142,
    marginTop: 16,
    marginBottom: 19
  },
  rect2: {
    width: 122,
    height: 124,
    backgroundColor: "#E6E6E6",
    borderRadius: 4,
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
    marginLeft: 35
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    fontSize: 24,
    marginTop: 44,
    marginLeft: 29
  },
  videoConfereingColumnRow: {
    height: 124,
    flexDirection: "row",
    marginLeft: 19
  },
  showMore1: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    marginTop: 10
  },
  icon1: {
    color: "rgba(208,2,27,1)",
    fontSize: 34,
    marginLeft: 2
  },
  showMore1Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 147,
    marginRight: 106
  }

});

export default ViewPackages;
