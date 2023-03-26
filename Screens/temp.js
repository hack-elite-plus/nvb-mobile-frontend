import { Button, Text } from "@react-native-material/core";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
const width_proportion = "30%";
const width_content = "70%";

const Temp = ({ navigation }) => {
  const [tempValue,setTempValue]=useState(0);
  const getTempValue=()=>{
    setTimeout(()=>{
      setTempValue(Math.floor(Math.random()*13)+27)
    },2000)
    
  }
  return (
    <View>
      <View style={styles.header}>
        <Text
          style={styles.text1}
          onPress={() => navigation.navigate("Report")}
        >
          Cancel
        </Text>
        <Text style={styles.text2}>Temperature</Text>
        <Text style={styles.text3}>Results</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.title1}>Tap START to BEGAN</Text>
        <Text style={styles.title2}>Finished</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.box}>
          <Icon
            style={{ paddingLeft: 40, paddingTop: 10 }}
            name="dot-circle"
            size={20}
            color="#000"
            variant="contained"
          />
          <View style={styles.contentRate}>
            <Text variant="displayMedium" style={styles.rateValue}>
              {tempValue}<Text style={styles.rateValue}>C</Text>
            </Text>
            {/* <View style={styles.image}>
              <List.Image
                style={{ textAlign: "center", marginTop: 10 }}
                variant="image"
                source={{
                  uri: "https://www.freeiconspng.com/thumbs/temperature-icon-png/temperature-icon-png-1.png",
                }}
              />
              <Text style={{ textAlign: "center" }}>Temperature</Text>
            </View> */}
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 15, marginTop: 10 }}>
              Measuring Heart Rate
            </Text>
            <Icon
              style={{ marginTop: 15 }}
              name="temperature-high"
              size={60}
              color="red"
            />
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <Button
            title="Check"
            // style={{
            //   width: width_proportion,
            // }}
            Icon="heart"
            color="white"
            borderWidth="1"
            onPress={getTempValue}
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 30,
  },
  text1: {
    marginLeft: 20,
    fontSize: 18,
    width: width_proportion,
  },
  text2: {
    textAlign: "center",
    width: width_proportion,
    fontSize: 20,
  },
  text3: {
    textAlign: "right",
    width: width_proportion,
    fontSize: 18,
  },
  title: {
    backgroundColor: "lightgrey",
    height: 80,
    marginTop: 10,
  },
  title1: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 20,
  },
  title2: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 20,
    color: "red",
  },
  content: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "lightgrey",
    borderWidth: 15,
    width: width_content,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  contentRate: {
    marginTop: -25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rateValue: {
    color: "red",
    fontSize: 80,
    paddingTop: 0,
  },
  bottomBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
    width: width_proportion,
  },
});
export default Temp;
