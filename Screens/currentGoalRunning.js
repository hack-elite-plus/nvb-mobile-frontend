import React, { useState, useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { IconButton, Button } from "@react-native-material/core";
import { Text, View, StyleSheet, Image, ScrollView, Alert } from "react-native";
const width_proportion = "30%";
const width_content = "60%";
const templateButton = "90%";
import { useNavigation } from "@react-navigation/native";
import Stopwatch from "../components/stopwatch";
// import { Text } from "react-native-paper";

const CurrentGoalRunning = () => {
  const navigation = useNavigation();

  const [templates, setTemplates] = useState([]);
  const [goalValue, setGoalValue] = useState("");
  const [count, setCount] = useState(0);
  const [goaltype, setGoalType] = useState("");
  const [isADistance, setIsGoalType] = useState(false);

  //stopwatch
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const getDisplayTime = () => {
    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor((seconds % 3600) / 60);
    const second = Math.floor(seconds % 60);
    return `${hour < 10 ? "0" : ""}${hour}:${minute < 10 ? "0" : ""}${minute}:${
      second < 10 ? "0" : ""
    }${second}`;
  };

  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  React.useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isActive]);
  //end stopwatch

  //when press strt button value goes to 0
  const updateValue = () => {
    fetch("http://localhost:8080/running-update-value", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: goalValue }),
    }).then(() => {
      console.log("Value updated!");
      setCount(0);
    });
  };

  const handlePausePress = () => {
    fetch("http://localhost:8080/running-pause-counting", {
      method: "POST",
    });
  };
  const resumeCounting = () => {
    fetch("http://localhost:8080/running-resume-counting", {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to resume counting");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //get counting value after 5 min
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8080/running-get-value")
        .then((response) => response.json())
        .then((json) => {
          setCount(json.value);
          console.log("Current value:", json.value);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/goal/running/value")
      .then((response) => response.json())
      .then((data) => {
        setGoalValue(data);
        alert("ADD goalValue TO RUNNING");
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Create a New Goal in MyGoal");
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/goal/running/goalType")
      .then((response) => response.text())
      .then((data) => {
        setGoalType(data);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("error");
      });
  }, []);
  useEffect(() => {
    if (goaltype === "duration") {
      setIsGoalType(false);
    } else if (goaltype === "distance") {
      setIsGoalType(true);
    } else {
      console.log("error");
    }
  });
  // const getdata = () => {
  //   useEffect(() => {
  //     fetch("http://localhost:8080/api/goal/running/value")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setGoalValue(data);
  //         alert("ADD VALUE TO RUNNING");
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error);
  //       });
  //   }, []);
  // };

  const createTemplate = () => {
    if (templates.length < 1) {
      const newTemplate = {};
      // const newTemplate = { title: input };
      setTemplates([...templates, newTemplate]);
    } else {
      alert("You cannot create any more templates.");
    }
  };

  const deleteTemplate = (index) => {
    fetch("http://localhost:8080/api/goal/running", {
      method: "DELETE",
    })
      .then(() => {
        alert("Delete data");
      })
      .catch((error) => {
        console.error(error);
      });
    const newTemplates = [...templates];
    newTemplates.splice(index, 1);
    setTemplates(newTemplates);
  };

  return (
    <ScrollView>
      <View style={styles.sportNavigate}>
        <Button
          raised
          primary
          style={styles.text1}
          title="Running"
          // titleStyle={{ color: "black" }}
          variant="contained"
          color="rgb(105, 89, 203)"
         
        />
        <Button
          style={styles.text2}
          title="Walking"
          variant="outlined"
          titleStyle={{ color: "rgb(76, 90, 129)" }}
          onPress={() => navigation.navigate("Walking")}
          // onPress={() => navigation.navigate("Walking", { input: "" })}
        />
        <Button
          style={styles.text3}
          title="Biking"
          variant="outlined"
          titleStyle={{ color: "rgb(76, 90, 129)" }}
          onPress={() => navigation.navigate("Biking")}
          // onPress={() => navigation.navigate("Biking", { input: "" })}
        />
      </View>
      <View style={styles.template}>
        <Button
          style={styles.templatebutton}
          titleStyle={{color:"rgb(76, 90, 129)"}}
          title="Create template"
          onPress={() => createTemplate()}
          variant="outlined"
        />
      </View>

      {templates.map((template, index) => (
        <View key={index} style={styles.content}>
          <View style={styles.box}>
            <View style={styles.boxContent}>
              <Text style={{ fontSize: 20, color: "white" }}>THIS WEEK</Text>
              {isADistance ? (
                <Text style={{ fontSize: 40, color: "rgb(76, 30, 129)" }}>
                  {count}
                </Text>
              ) : (
                <Text style={{ fontSize: 40, color: "white" }}>
                  {getDisplayTime()}
                </Text>
              )}
              {/* <Text style={{ fontSize: 40 }}>{count}</Text> */}
              <Text style={{ fontSize: 20, color: "white" }}>
                <Text style={{ fontSize: 20 }}>{goalValue}</Text>{" "}
                {isADistance ? "km" : "minites"}
              </Text>

              <Icon
                style={{ marginTop: 10 }}
                name="running"
                size={30}
                color="white"
              />
              <Text style={{ fontSize: 20, color: "white" }}>Running</Text>
            </View>
          </View>
          <View style={styles.bottomContent}>
            <View>
              <Icon
                style={{ marginRight: 5 }}
                name="calendar-alt"
                size={30}
                color="rgb(76, 90, 129)"
              />
            </View>
            <View>
              <Text style={{ color: "rgb(76, 90, 129)" }}>
                <Text>7</Text> Days{" "}
              </Text>
              <Text style={{ color: "rgb(76, 90, 129)" }}>Remain</Text>
            </View>
          </View>
          <View>
            <Button
              style={styles.bottomButton}
              onPress={isADistance ? updateValue : toggle}
              title={isADistance ? "start" : isActive ? "pause" : "start"}
              color="white"
              titleStyle={{ color: "rgb(76, 90, 129)" }}
              marginTop={10}
              leading={(props) => (
                <Icon
                  name="hourglass-start"
                  {...props}
                  color="rgb(76, 90, 129)"
                />
              )}
            ></Button>
            <Button
              style={styles.bottomButton}
              title="Delete"
              color="white"
              titleStyle={{ color: "rgb(76, 90, 129)" }}
              leading={(props) => (
                <Icon name="trash-alt" {...props} color="rgb(76, 90, 129)" />
              )}
              marginTop={20}
              onPress={() => deleteTemplate(index)}
            ></Button>
            {isADistance ? (
              <View style={styles.pause_resume_btn}>
                <Button
                  leading={(props) => (
                    <Icon
                      name="pause"
                      {...props}
                      color="rgb(76, 90, 129)"
                      size={20}
                    />
                  )}
                  color="white"
                  titleStyle={{ color: "rgb(76, 90, 129)" }}
                  onPress={handlePausePress}
                />

                <Button
                  leading={(props) => (
                    <Icon
                      name="caret-right"
                      {...props}
                      color="rgb(76, 90, 129)"
                      size={30}
                    />
                  )}
                  color="white"
                  titleStyle={{ color: "rgb(76, 90, 129)" }}
                  onPress={resumeCounting}
                />
              </View>
            ) : (
              <Button
                title="reset"
                leading={(props) => <Icon name="stop" {...props} size={20} />}
                color="rgb(76, 90, 129)" 
                
                titleStyle={{ color: "rgb(76, 90, 129)" }}
                onPress={reset}
              />
            )}

            <View></View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  template: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  header: {
    flexDirection: "row",
    marginTop: 30,
  },
  sportNavigate: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
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
  box: {
    borderRadius: 150,
    borderWidth: 5,
    borderColor: "rgb(76, 90, 129)",
    backgroundColor: "rgb(105, 89, 203)",
    width: width_content,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  boxContent: {
    alignItems: "center",
  },
  bottomContent: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  template: {
    alignItems: "center",
    justifyContent: "center",
  },
  templatebutton: {
    width: templateButton,
    marginTop: 5,
  },
  bottomButton: {
    marginBottom: 5,
  },
  pause_resume_btn: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CurrentGoalRunning;
