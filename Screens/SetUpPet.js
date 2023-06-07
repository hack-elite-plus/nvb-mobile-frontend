// Imports
import React from "react";
import {useState} from 'react';
import {Button, ScrollView, TextInput} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';

const SetUpPet = () => {
    const navigation = useNavigation();

    const [petName, setpetName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');


    return (
        <ScrollView>
            <View>
                {/*Input Fields in Form*/}

                <View style={styles.headContainer}>
                    <Text style={styles.headtext}>Pet</Text>
                </View>

                <View>
                    <Image style={styles.img} source={require("../assets/pet.png")}/>
                    {/*<Text style={styles.text}>Pet</Text>*/}
                </View>

                <View>
                    <TextInput style={styles.input}
                               placeholder='Pet Name'
                               onChangeText={setpetName}
                    >

                    </TextInput>
                </View>

                <View>
                    <TextInput style={styles.input}
                               placeholder='Age'
                               onChangeText={setAge}
                    >

                    </TextInput>
                </View>

                <View style={styles.input}>
                    <Text style={styles.label}>Gender</Text>

                    <View style={styles.radioButtonContainer}>
                        <View style={styles.radioButton}>
                            <RadioButton.Android
                                value="male"
                                status={gender === 'male' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('male')}
                            />
                            <Text style={styles.radioButtonLabel}>Male</Text>
                        </View>

                        <View style={styles.radioButton}>
                            <RadioButton.Android
                                value="female"
                                status={gender === 'female' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('female')}
                            />
                            <Text style={styles.radioButtonLabel}>Female</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.input}>
                    <Text style={styles.label}>Category</Text>

                    <View style={styles.radioButtonContainer}>
                        <View style={styles.radioButton}>
                            <RadioButton.Android
                                value="cat"
                                status={category === 'cat' ? 'checked' : 'unchecked'}
                                onPress={() => setCategory('cat')}
                            />
                            <Text style={styles.radioButtonLabel}>Cat</Text>
                        </View>

                        <View style={styles.radioButton}>
                            <RadioButton.Android
                                value="female"
                                status={category === 'dog' ? 'checked' : 'unchecked'}
                                onPress={() => setCategory('dog')}
                            />
                            <Text style={styles.radioButtonLabel}>Dog</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.button}>
                    <Button title="SUBMIT"/>
                </View>

            </View>
        </ScrollView>

    );

};

const styles = StyleSheet.create({

    headContainer: {
        color: 'white',
        marginTop: 0,
        height: 55,
        backgroundColor: '#2A92CD',
        paddingTop: 5,
        alignItems: 'center',
    },

    headtext: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },

    img: {
        marginTop: 25,
        alignSelf: 'center',
        height: 150,
        width: 150,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 30

    },

    input: {
        borderWidth: 1,
        padding: 5,
        width: '90%',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 30,

    },


    button: {
        width: '35%',
        height: 60,
        fontWeight: 'bold',
        alignSelf: 'center',
        borderRadius: 35,

    },

    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,

    },

    radioButtonLabel: {
        marginLeft: 5,

    },

});

export default SetUpPet;