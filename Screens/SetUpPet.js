


import { useState } from 'react';
import {Button, ScrollView, TextInput} from 'react-native';
import { Image, StyleSheet, Text, View} from 'react-native';


 function SetUpPet(){
            const[petName, setpetName]=useState('');
            const[age, setAge]=useState('');
            const[gender, setGender]=useState('');
            const[category, setCategory]=useState('');


    return(
        <ScrollView>
    <View>
        <View style={styles.headContainer}>
            <Text style={styles.headtext}>Profile Setup</Text>
        </View>

      <View>
            <Image style={styles.img} source={require("../assets/pet.png")} />
            <Text style={styles.text}>Pet</Text>
      </View>

      <View>
            <TextInput  style={styles.input} 
            placeholder='Pet Name'
            onChangeText={setpetName}
            >

            </TextInput>
      </View>

      <View>
            <TextInput  style={styles.input} 
            placeholder='Age'
            onChangeText={setAge}
            >

            </TextInput>
      </View>

      <View>
            <TextInput  style={styles.input} 
            placeholder='Gender'
            onChangeText={setGender}
            >

            </TextInput>
      </View>

      <View>
            <TextInput  style={styles.input} 
            placeholder='Category(Dog/Cat)'
            onChangeText={setCategory}
            >

            </TextInput>
      </View>

      <View style={styles.button}>
        <Button  title="SUBMIT"/>
      </View>
       
    </View>
        </ScrollView>

    );

 };

 const styles = StyleSheet.create({
    
   headContainer: {
        color: 'white',
        marginTop: 0,
        height:55,
        backgroundColor: '#2A92CD',
        paddingTop: 5,
        alignItems:'center',
   },

   headtext: {
        margin: 10,
        alignSelf:'center',
        fontSize:24,
        fontWeight:'bold',
        color:'white',
    },

  img:{
        marginTop: 25,
        alignSelf:'center',
        height:150,
        width:150,
  },

  text:{
        fontWeight: 'bold',
        fontSize:24,
        alignSelf:'center',
        marginBottom:30
        
  },

  input:{
        borderWidth: 1,
        padding: 5,
        width:'90%',
        borderRadius: 5,
        alignSelf:'center',
        marginBottom: 30,

  },

  button:{
    width:'35%',
    height:60,
    fontWeight: 'bold',
    alignSelf: 'center',
    borderRadius: 35,

  }

 });

 export default SetUpPet;
