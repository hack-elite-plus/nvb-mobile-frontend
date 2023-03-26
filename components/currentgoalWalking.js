import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "@react-native-material/core";
import { Text, View, StyleSheet, Image, Alert, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
const width_proportion = "30%";
const width_content = "60%";
const templateButton = "90%";
// import { Text } from "react-native-paper";

const CurrentGoalWalking = () => {
  // const route=useRoute();
  const navigation = useNavigation();
  // const route = useRoute();
  // const { input } = route.params;

  const [templates, setTemplates] = useState([]);
  const [goalValue, setGoalValue] = useState("");
  const [count, setCount] = useState(0);

  const updateValue = () => {
    fetch("http://localhost:8080/walking-update-value", {
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
    fetch("http://localhost:8080/walking-pause-counting", {
      method: "POST",
    });
  };
  const resumeCounting = () => {
    fetch("http://localhost:8080/walking-resume-counting", {
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
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8080/walking-get-value")
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
    fetch("http://localhost:8080/api/goal/walking/value")
      .then((response) => response.json())
      .then((data) => {
        setGoalValue(data);
        alert("ADD VALUE TO Walking");
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Create a New Goal in MyGoal");
      });
  }, []);

  const createTemplate = () => {
    if (templates.length < 1) {
      const newTemplate = {};
      setTemplates([...templates, newTemplate]);
    } else {
      Alert.alert("You cannot create any more templates.");
    }
  };

  const deleteTemplate = (index) => {
    fetch("http://localhost:8080/api/goal/walking", {
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
          style={styles.text1}
          titleStyle={{ color: "black" }}
          title="Running"
          variant="outlined"
          onPress={() => navigation.navigate("Running")}
        />
        <Button
          style={styles.text2}
          title="Walking"
          // titleStyle={{ color: "black" }}
          variant="contained"
          color="black"
        />
        <Button
          style={styles.text3}
          title="Biking"
          titleStyle={{ color: "black" }}
          variant="outlined"
          onPress={() => navigation.navigate("Biking")}
        />
      </View>
      <View style={styles.template}>
        <Button
          style={styles.templatebutton}
          color="black"
          title="Create template"
          onPress={() => createTemplate()}
          variant="outlined"
        />
      </View>
      {templates.map((template, index) => (
        <View key={index} style={styles.content}>
          <View style={styles.box}>
            <View style={styles.boxContent}>
              <Text style={{ fontSize: 20 }}>THIS WEEK</Text>
              <Text style={{ fontSize: 40 }}>{count}</Text>
              <Text style={{ fontSize: 20 }}>
                of <Text style={{ fontSize: 20 }}>{goalValue}</Text> km
              </Text>

              <Icon
                style={{ marginTop: 10 }}
                name="walking"
                size={30}
                color="#000"
              />
              <Text style={{ fontSize: 20 }}>Walking</Text>
            </View>
          </View>
          <View style={styles.bottomContent}>
            <View>
              <Icon
                style={{ marginRight: 5 }}
                name="calendar-alt"
                size={30}
                color="#000"
              />
            </View>
            <View>
              <Text>
                <Text>7</Text> Days{" "}
              </Text>
              <Text>Remain</Text>
            </View>
          </View>
          <View>
            <Button
              style={styles.bottomButton}
              onPress={updateValue}
              title="Start"
              color="white"
              marginTop={10}
              leading={(props) => <Icon name="hourglass-start" {...props} />}
            ></Button>
            <Button
              style={styles.bottomButton}
              title="Delete"
              color="white"
              leading={(props) => <Icon name="trash-alt" {...props} />}
              marginTop={20}
              onPress={() => deleteTemplate(index)}
            ></Button>
            <View style={styles.pause_resume_btn}>
              <Button
                leading={(props) => <Icon name="pause" {...props} size={20} />}
                color="white"
                onPress={handlePausePress}
              />

              <Button
                leading={(props) => (
                  <Icon name="caret-right" {...props} size={30} />
                )}
                color="white"
                onPress={resumeCounting}
              />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    borderWidth: 2,
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

export default CurrentGoalWalking;
