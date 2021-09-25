import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
//import Svg, { Ellipse } from "react-native-svg";

function LoginView(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStack}>
        {/*<Svg viewBox="0 0 781.3 372.87" style={styles.ellipse}>*/}
        {/*  <Ellipse*/}
        {/*    stroke="rgba(230, 230, 230,1)"*/}
        {/*    strokeWidth={0}*/}
        {/*    fill="rgba(167,192,220,1)"*/}
        {/*    cx={391}*/}
        {/*    cy={186}*/}
        {/*    rx={391}*/}
        {/*    ry={186}*/}
        {/*  ></Ellipse>*/}
        {/*</Svg>*/}

        <Image
          source={require("../../Images/logo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>

      </View>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.loremIpsum}>Please Sign In to Continue</Text>
      <Text style={styles.userName}>User Name</Text>
      <View style={styles.rect}>
        <Text style={styles.enterTheUserName}>Enter the User name</Text>
      </View>
      <View style={styles.rect1}>
        <Text style={styles.enterThePassword}>Enter the Password</Text>
      </View>
      <Text style={styles.password}>Password</Text>
      <View style={styles.rect2}>
        <Text style={styles.login2}>Login</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 631,
    height: 318,
    position: "absolute"
  },
  image: {
    top: 195,
    left: 289,
    width: 177,
    height: 81,
    position: "absolute"
  },
  ellipseStack: {
    width: 631,
    height: 318,
    marginTop: -144,
    marginLeft: -271
  },
  login: {
    fontFamily: "georgia-regular",
    color: "rgba(97,109,173,1)",
    fontSize: 37,
    marginTop: 24,
    marginLeft: 18
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 10,
    marginLeft: 18
  },
  userName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 186,
    fontSize: 17,
    marginTop: 25,
    marginLeft: 27
  },
  rect: {
    width: 303,
    height: 49,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 10,
    marginLeft: 27
  },
  enterTheUserName: {
    fontFamily: "roboto-regular",
    color: "rgba(152,144,144,1)",
    opacity: 0.83,
    fontSize: 15,
    marginTop: 16,
    marginLeft: 38
  },
  rect1: {
    width: 303,
    height: 49,
    backgroundColor: "rgba(233,233,233,1)",
    borderRadius: 10,
    marginTop: 54,
    marginLeft: 27
  },
  enterThePassword: {
    fontFamily: "roboto-regular",
    color: "rgba(152,144,144,1)",
    opacity: 0.83,
    fontSize: 15,
    marginTop: 15,
    marginLeft: 38
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 31,
    width: 186,
    fontSize: 17,
    marginTop: -80,
    marginLeft: 27
  },
  rect2: {
    width: 219,
    height: 53,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 44,
    marginTop: 90,
    marginLeft: 65
  },
  login2: {
    fontFamily: "roboto-regular",
    color: "rgba(243,240,240,1)",
    height: 31,
    width: 93,
    fontSize: 18,
    marginTop: 12,
    marginLeft: 83
  }
});

export default LoginView;
