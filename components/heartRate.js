import { Button, Text } from "@react-native-material/core";
import React, { useState,useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
const width_proportion = "30%";

const HeartRate = ({ navigation }) => {
  const [heartValue,setHeartValue]=useState(0);
  // const [heartRateValue,setHeartRateValue]=useState(0);
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/goal/running/value")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setHeartRateValue(data);
  //       alert("ADD VALUE TO RUNNING");
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // }, []);

  const getHeartRate=()=>{
    fetch("http://localhost:8080/api/goal/running/value")
    .then((response) => response.json())
    .then((data) => {
      setHeartValue(data);
      alert("ADD VALUE TO RUNNING");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  //  setHeartValue(heartRateValue)
  }
  
  
  
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text
          style={styles.text1}
          onPress={() => navigation.navigate("Report")}
        >
          Cancel
        </Text>
        <Text style={styles.text2}>Heart Rate</Text>
        <Text style={styles.text3}>Results</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.title1}>Tap START to BEGAN</Text>
        <Text style={styles.title2}>Finished</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentRate}>
          <Text variant="displayMedium" style={styles.rateValue}>
           {heartValue}
          </Text>
          <View style={styles.image}>
            <Icon
              style={{ marginTop: 55 }}
              name="heartbeat"
              size={30}
              color="black"
            />
          
            <Text style={{ textAlign: "center" }}>BPM</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            Measuring Heart Rate
          </Text>
          <Icon
            style={{ marginTop: 20 }}
            name="heartbeat"
            size={150}
            color="red"
          />
        </View>
      </View>
      <View style={styles.bottomBtn}>
        <Button
          title="Check"
          style={{
            width: width_proportion,
          }}
          Icon="heart"
          color="white"
          borderWidth="1"
          onPress={getHeartRate}
        ></Button>
      </View>

 
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
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
  contentRate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rateValue: {
    color: "red",
    fontSize: 70,
    paddingTop: 50,
  },
  bottomBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
export default HeartRate;
