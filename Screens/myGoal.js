import { Button, Stack, Text, TextInput } from "@react-native-material/core";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

const width_proportion = "30%";
const width_list = "20%";
const widthbutton = "45%";
const widthbtn = "50%";
const height_proportion = "40%";

const goals = [
  ["sportType", "SPORT TYPE", ["running", "walking", "biking"]],
  ["timeframe", "TIME FRAME", ["per day", "per week", "per month", "per year"]],
  ["goalType", "GOAL TYPE", ["distance", "duration"]],
  ["value", "Add Goal Value"],
];

const MyGoal = ({ navigation }) => {
  const [goal, setGoal] = useState({
    sportType: "",
    timeframe: "",
    goalType: "",
    value: "",
  });

  const [input, setInput] = useState("");

  const handleGoal = (index, key, item) => {
    const newGoal = { ...goal };
    if (index == 3) {
      alert(input);
      newGoal[key] = input;
    } else {
      // alert("hi")
      newGoal[key] = item;
    }
    setGoal(newGoal);
    // if(key==="goalType"){
    //   newGoal[value]={input}
    // }
    console.log(newGoal);
  };

  const CurrentGoals = () => {
    navigation.navigate("Running");
    // navigation.navigate("Running", { input: "" });
  };

  const submitGoal = () => {
    if (goal.sportType === "running") {
      navigation.navigate("Running");
    } else if (goal.sportType === "walking") {
      navigation.navigate("Walking");
    } else if (goal.sportType === "biking") {
      navigation.navigate("Biking");
    }

    fetch("http://localhost:8080/api/goal/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(goal),
    })
      .then(() => {
        alert("add new one");
      })
      .catch((error) => {
        console.error(error);
      });
    alert(JSON.stringify(goal, null, 3));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text1} onPress={CurrentGoals}>
            MyGoal
          </Text>
          <Text style={styles.text2}>
            ADD GOAL<Text></Text>
          </Text>
          <Text style={styles.text3} onPress={submitGoal}>
            Save
          </Text>
        </View>
        <View style={styles.goalMapStyle}>
          {goals.map(([key, title, items], index) =>
            key != "value" ? (
              <View key={index}>
                <Text raised primary style={styles.titletext}>{title}</Text>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="start"
                  wrap={true}
                >
                  {items.map((item, index) => (
                    <Button
                      
                      key={index}
                      style={styles.btn}
                      title={item}
                      // titleStyle={{ color: "black" }}
                      sx={{
                        "&.Mui-selected": {},
                        "&.Mui-focusVisible": {
                          border: "3px solid #fff",
                        },
                        ":hover": {
                          border: "3px solid #F2A42A",
                        },
                      }}
                      raised primary
                      onPress={() => handleGoal(index, key, item)}
                      variant={goal[key] === item ? "contained" : "contained"}
                      color={goal[key] === item ? "white" : "rgb(105, 89, 203)"}
                      titleStyle={{ color:goal[key]===item?'rgb(76, 90, 129)':"white" }}
                      borderWidth={goal[key] === item ? 1 : 0}
                    ></Button>
                  ))}
                </Stack>
              </View>
            ) : (
              <View key={key + index}>
                <Text style={styles.titletext}>Add Your Goal Value</Text>
                <TextInput
                  placeholder={
                    goal.goalType === "distance" ? "km" : goal.goalType
                  }
                  value={input}
                  onChangeText={(text) => setInput(text)}
                  keyboardType="numeric"
                ></TextInput>
                <Button
                  color="rgb(105, 89, 203)"
                  title="submit"
                  style={styles.btn2}
                  onPress={() => handleGoal(index, key)}
                  
                ></Button>
              </View>
            )
          )}

          {/* <TextInput
            placeholder={goal.goalType === "distance" ? "km" : goal.goalType}
            value={input}
            onChangeText={(text) => setInput(text)}
            keyboardType="numeric"
          ></TextInput> */}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "#fff",
  },
  list: {
    width: width_list,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    float: "left",
    width: width_proportion,
    textAlign: "left",
    color: "blue",
    marginLeft: 20,
    fontSize: 20,
    color:"rgb(105, 89, 203)",
    fontWeight:"500"
  },
  text2: {
    float: "center",
    width: width_proportion,
    textAlign: "center",
    fontSize: 20,
    color:'rgb(76, 90, 129)',
    fontWeight:"500"
  },
  text3: {
    float: "right",
    width: width_proportion,
    textAlign: "right",
    fontSize: 20,
    color:"rgb(105, 89, 203)",
    fontWeight:"500"
  },
  btn: {
    borderColor: "black",
    width: "48%",
    margin: 3,
    padding: 10,
    borderColor: 'rgb(105, 89, 203)',
    color:'rgb(105, 89, 203)'
  },
  btonclick: {
    borderWidth: 2,
  },
  btn2: {
    width: "100%",

    padding: 10,
    // marginRight: 10,
    // marginLeft: 8,
  },
  txtinp: {
    margin: 10,
  },
  titletext: {
    fontSize: 18,
    margin: 10,
    marginLeft: 20,
    fontWeight:'500',
    color: 'rgb(76, 90, 129)'
  },
  goalMapStyle:{
    marginTop:10
  }
});

export default MyGoal;
