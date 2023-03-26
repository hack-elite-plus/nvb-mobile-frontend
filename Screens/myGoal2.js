import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Stack, Button, TextInput } from "@react-native-material/core";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons  from "@expo/vector-icons/MaterialCommunityIcons";


const width_proportion = "30%";
const width_list = "90%";
const widthbutton = "45%";
const widthbtn = "30%";
const height_proportion = "40%";
const MyGoal2 = () => {
  const [click1, setClick1] = useState("");
  const handleClick1 = (x) => {
    setClick1(x);
  };
  const [click2, setClick2] = useState("");
  const handleClick2 = (x) => {
    setClick2(x);
  };
  const [click3, setClick3] = useState("");
  const handleClick3 = (x) => {
    setClick3(x);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Cancel</Text>
        <Text style={styles.text2}>ADD GOAL</Text>
        <Text style={styles.text3}>Save</Text>
      </View>
      <View>
        <Text style={styles.titletext}>SPORT TYPE</Text>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            style={styles.btn}
            title="Running"
            onPress={() => handleClick1(1)}
            variant={click1 === 1  ? "contained" : "outlined"}
            
          ></Button>
          <Button
            style={styles.btn}
            title="Walking"
            onPress={() => handleClick1(2)}
            variant={click1 === 2 ? "contained" : "outlined"}
          ></Button>
          <Button
            style={styles.btn}
            title="Walking"
            onPress={() => handleClick1(3)}
            variant={click1 === 3 ? "contained" : "outlined"}
          ></Button>
        </Stack>
      </View>
      <View style={styles.btnflex}>
        <Text style={styles.titletext}>TIME FRAME</Text>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            style={styles.btn2}
            title="Per Day"
            onPress={() => handleClick2(1)}
            variant={click2 === 1 ? "contained" : "outlined"}
          ><Icon name="soccer" size={24} color="black"/></Button>
          <Button
            style={styles.btn2}
            title="Per Week"
            onPress={() => handleClick2(2)}
            variant={click2 === 2 ? "contained" : "outlined"}
          ></Button>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            style={styles.btn2}
            title="Per Month"
            onPress={() => handleClick2(3)}
            variant={click2 === 3 ? "contained" : "outlined"}
          ></Button>
          <Button
            style={styles.btn2}
            title="Per Year"
            onPress={() => handleClick2(4)}
            variant={click2 === 4 ? "contained" : "outlined"}
          ></Button>
        </Stack>
      </View>
      <View style={styles.btnflex}>
        <Text style={styles.titletext}>GOAL TYPE</Text>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            style={styles.btn2}
            title="Distance"
            onPress={() => handleClick3(1)}
            variant={click3 === 1 ? "contained" : "outlined"}
          ></Button>
          <Button
            style={styles.btn2}
            title="Duration"
            onPress={() => handleClick3(2)}
            variant={click3 === 2 ? "contained" : "outlined"}
          ></Button>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            style={styles.btn2}
            title="Caluries"
            onPress={() => handleClick3(3)}
            variant={click3 === 3 ? "contained" : "outlined"}
          ></Button>
          <Button
            style={styles.btn2}
            title="Per Week"
            onPress={() => handleClick3(4)}
            variant={click3 === 4 ? "contained" : "outlined"}
          ></Button>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <TextInput
            style={styles.txtinp}
            placeholder={
              click3 === 1
                ? "KM"
                : click3 === 2
                ? "Duration"
                : click3 === 3
                ? "Caluries"
                : "sd"
            }
          ></TextInput>
        </Stack>
      </View>
    </View>
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
    marginLeft:20,
    fontSize: 20,
  },
  text2: {
    float: "center",
    width: width_proportion,
    textAlign: "center",
    fontSize: 20,
  },
  text3: {
    float: "right",
    width: width_proportion,
    textAlign: "right",
    color: "red",
    fontSize: 20,
  },
  btn: {
    width: widthbtn,
    margin: 3,
    padding: 10,
  },
  btn2: {
    width: widthbutton,
    margin: 5,
    padding: 10,
    // marginRight: 10,
    // marginLeft: 8,
  },
  txtinp: {
    width: width_list,
    margin: 10,
  },
  titletext: {
    fontSize: 20,
    margin: 20,
  },
  // btnflex:{

  // }
});

export default () => (
  <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <MyGoal2/>
  </IconComponentProvider>
);
