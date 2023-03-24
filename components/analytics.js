import React, { useState, useEffect } from "react";
import { Button } from "@react-native-material/core";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
const width_proportion = "24%";

const Analtics = ({ navigation }) => {
  // const [duration, setDuration] = useState(0);
  // const [isDurationPickerVisible, setIsDurationPickerVisible] = useState(false);
  // const handleDuration = (duration) => {
  //   const hours = duration.getHours()
  //   const minutes = duration.getMinutes();

  //   setDuration(hours * 24 + minutes)
  //   closeDurationPicker();
  // };
  // const openDurationPicker = () => {
  //   setIsDurationPickerVisible(true);
  // };

  // const closeDurationPicker = () => {
  //   setIsDurationPickerVisible(false);
  // };
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  const updateValue = () => {
    fetch("http://localhost:8080/update-value", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: value }),
    }).then(() => {
      console.log("Value updated!");
      setCount(0);
    });
  };
  const handlePausePress = () => {
    fetch("http://localhost:8080/pause-counting", {
      method: "POST",
    });
  };
  const resumeCounting = () => {
    fetch('http://localhost:8080/resume-counting', {
      method: 'POST',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to resume counting');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8080/get-value")
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

  return (
    <View>
      <View style={styles.Anlysnavigate}>
        <Button
          style={styles.text1}
          titleStyle={{ color: "black", fontSize: 12, margin: "auto" }}
          title="Report"
          variant="outlined"
        />
        <Button
          style={styles.text2}
          titleStyle={{ color: "black", fontSize: 12, textAlign: "center" }}
          title="Heart Rate"
          variant="outlined"
          onPress={() => navigation.navigate("Heart")}
        />
        <Button
          style={styles.text3}
          titleStyle={{ color: "black", fontSize: 12 }}
          title="Temperature"
          variant="outlined"
          onPress={() => navigation.navigate("Temp")}
        />
        <Button
          style={styles.text4}
          titleStyle={{ color: "black", fontSize: 12 }}
          title="BMI"
          variant="outlined"
          onPress={() => navigation.navigate("BMI")}
        />
      </View>
      <View style={styles.content}>
        <Text>Running</Text>
        <Text>Current value: {value}</Text>
        <Text>value: {count}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setValue(text)}
          value={value.toString()}
        />
        <Button title="Start" onPress={updateValue} />
        <Button title="pause" onPress={handlePausePress}></Button>
        <Button title="resume" onPress={resumeCounting}></Button>
        {/* <Button title="Pick Duration" onPress={openDurationPicker} />
        {duration > 0 && <Text>Duration: {duration}</Text>}
        <DateTimePicker
        themeVariant="light"
          isVisible={isDurationPickerVisible}
          mode="countdown"
          onConfirm={handleDuration}
          onCancel={closeDurationPicker}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 30,
  },
  Anlysnavigate: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    // width: width_proportion,
  },
  text2: {
    textAlign: "left",
    // width: width_proportion,
  },
  text3: {
    textAlign: "right",
    // width: width_proportion,
    fontSize: 18,
  },
  content: {
    alignItems: "center",
  },
});

export default Analtics;
