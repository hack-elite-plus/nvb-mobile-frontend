import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const [isDurationSelected, setIsDurationSelected] = useState(false);

//   const toggle = () => {
//     setIsActive(!isActive);
//   };

//   const reset = () => {
//     setSeconds(0);
//     setIsActive(false);
//   };

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

 

  return <Text style={styles.timer}>{getDisplayTime()}</Text>;
};

const styles = StyleSheet.create({
 
 
  timer: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
 
});

export default Stopwatch;
