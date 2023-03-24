import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
const widthInput = "50%";
const Bmi = () => { 
  const navigation=useNavigation();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [desc, setDesc] = useState('');

//   const getWeight = (x) => {
//     setWeight(x);
//   };
//   const getHeight = (x) => {
//     setWeight(x);
//   };
  const getbmi = () => {
    
    const bmi=weight/(height*height);
    setBmi(bmi.toFixed(1))
    if (bmi>=20 && bmi<=30) {
      setDesc("normal")
    }
    else if (bmi<=20) {
      setDesc("law")
    }
    else
    {
      setDesc('over')
    }
  };
  return (
    <View style={styles.container}>
       <Button title="cancel" onPress={()=>navigation.navigate("Report")}></Button>
      <Text>Weight:</Text>
      <TextInput
        style={styles.input}
        value={weight}
        placeholder="weight"
        onChangeText={(x) => setWeight(x)}
        keyboardType="numeric"
      ></TextInput>
      <Text>Height:</Text>
      <TextInput
        style={styles.input}
        value={height}
        placeholder="height"
        onChangeText={(x) => setHeight(x)}
        keyboardType="numeric"
      ></TextInput>
      <TouchableOpacity
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 100,
          marginTop: 20,
          padding: 10,
        }}
        onPress={getbmi}
      >
        <Text style={{ textAlign: "center" }}>Press</Text>
      </TouchableOpacity>
      <Text>{bmi}</Text>
      <Text>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "#7a42f4",
    borderWidth: 1,
    width: widthInput,
    height: 40,
  },
});

export default Bmi;
