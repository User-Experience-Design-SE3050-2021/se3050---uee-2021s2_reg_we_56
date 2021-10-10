import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";


export default function UserProfile() {
  return (
    <View style={styles.body}>
      <View style={styles.heading}>
        <Text style={styles.headingFont}>USER PROFILE</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={{width: "80%", fontSize: 17, fontWeight: 'bold' }}
          //onChangeText={onChangeNumber}
          value= 'John'
          //placeholder="John"
          keyboardType="numeric"
        />
      </View>
      <View style={{ width: "80%", marginBottom: '20%' }}>
        <Text style={{fontSize: 17}}>Name</Text>
      </View>



      <View style={styles.row}>
        <TextInput
          style={{width: "80%", fontSize: 17, fontWeight: 'bold' }}
          //onChangeText={onChangeNumber}
          value= 'john@xyz.com'
          //placeholder="john@xyz.com"
          keyboardType="numeric"
        />
      </View>
      <View style={{ width: "80%", marginBottom: '20%' }}>
        <Text style={{fontSize: 17}}>Email</Text>
      </View>



      <View style={styles.row}>
        <TextInput
          style={{width: "80%", fontSize: 17, fontWeight: 'bold' }}
          //onChangeText={onChangeNumber}
          value='0771234567'
          // placeholder="011234567"
          keyboardType="ascii-capable"
        />
      </View>
      <View style={{ width: "80%", marginBottom: '20%' }}>
        <Text style={{fontSize: 17}}>Email</Text>
      </View>



      <View style={styles.row}>
        <TextInput
          style={{width: "80%", fontSize: 17, fontWeight: 'bold' }}
          //onChangeText={onChangeNumber}
          value='127, Nugegoda, Sri Lanka'
          //placeholder="011234567"
          keyboardType="numeric"
        />
      </View>
      <View style={{ width: "80%", marginBottom: '20%' }}>
        <Text style={{fontSize: 17}}>Address</Text>
      </View>

      {/* <View style={{ width: "80%" }}>
        <Text>Account Username</Text>
      </View> */}
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
    padding: 5
    //marginBottom: 50,
    //marginTop: 10,
    // marginBottom: 80,
    //marginBottom: 35,
  },
  button: {
    //backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    //padding: 20,
    padding: 10,
    marginRight: 40,
    marginLeft: 40,
  },
  submitButton: {
    flex: 1,
    borderWidth: 1,
    //backgroundColor: "green",
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
    marginBottom: '10%',
    marginTop: '15%'
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
