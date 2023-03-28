import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
const width_content = "50%";
import { Button, TextInput, Text } from "@react-native-material/core";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
const widthInput = "50%";
const Bmi = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [desc, setDesc] = useState("");

  //   const getWeight = (x) => {
  //     setWeight(x);
  //   };
  //   const getHeight = (x) => {
  //     setWeight(x);
  //   };
  const getbmi = () => {
    const bmi = weight / (height * height);
    setBmi(bmi.toFixed(1));
    if (bmi >= 20 && bmi <= 30) {
      setDesc("normal");
    } else if (bmi <= 20) {
      setDesc("law");
    } else {
      setDesc("over");
    }
  };
  return (
    <View style={styles.container}>
      <Button
        style={styles.btn}
        color="rgb(105, 89, 203)"
        title="cancel"
        onPress={() => navigation.navigate("Report")}
      ></Button>
      <View style={styles.box}>
        <Text style={styles.header}>BMI</Text>
        <Text style={{ fontSize: 35, color: "white" }}>{bmi}</Text>
        <Text style={{ fontSize: 25, color: "white" }}> {desc}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Weight:</Text>
        <TextInput
          label="Weight"
          variant="outlined"
          trailing={(props) => (
            <IconButton
              icon={(props) => <Icon name="eye" {...props} />}
              {...props}
            />
          )}
          onChangeText={(x) => setWeight(x)}
        />

        <Text style={styles.text}>Height:</Text>
        <TextInput
          label="Height"
          variant="outlined"
          trailing={(props) => (
            <IconButton
              icon={(props) => <Icon name="eye" {...props} />}
              {...props}
            />
          )}
          onChangeText={(x) => setHeight(x)}
        />
        <Button
          style={styles.btn}
          color="rgb(105, 89, 203)"
          title="Check"
          onPress={getbmi}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  // input: {
  //   borderColor: "#7a42f4",
  //   borderWidth: 1,
  //   width: widthInput,
  //   height: 40,
  // },
  box: {
    borderRadius: 120,
    borderWidth: 5,
    borderColor: "rgb(76, 90, 129)",
    backgroundColor: "rgb(105, 89, 203)",
    width: width_content,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    marginTop: 20,
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  btn: {
    color: "white",
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    color: "white",
  },
});

export default Bmi;
