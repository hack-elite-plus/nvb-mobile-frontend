// Imports
import React from "react";
import { useState } from 'react';
import {Button, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from "axios";
import BASE_URL from "../config";

const SignupSchema = Yup.object().shape({
    petName: Yup.string()
        .min(3, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Please enter pet name.'),
    age: Yup.number()
        .typeError('Age must be a number')
        .positive('Age must be a positive number')
        .required('Please enter pet age'),
    gender: Yup.string()
        .required('Please select a gender.'),
    category: Yup.string()
        .required('Please select a category.'),
});

const SetUpPet = () => {

    const navigation = useNavigation();

    const handleSubmit = (values) => {
        axios.post(`${BASE_URL}/pet/addPet`, {

            petName: values.petName,
            age: values.age,
            gender: values.gender,
            category: values.category,

        })
            .then((response) => {
                // Handle the response from the backend
                console.log('Pet registration successful!');
                // Redirect or navigate to the next screen
                alert("Pet Details Add successfully!!");
                navigation.navigate('SelectUserType');
            })
            .catch((error) => {
                // Handle any errors
                console.error('Error registering Pet:', error);
            });
    };

    return (
        <ScrollView>
            <View>
                {/* Input Fields in Form */}
                <View style={styles.headContainer}>
                    <Text style={styles.headtext}>Pet</Text>
                </View>

                <View>
                    <Image style={styles.img} source={require("../assets/pet.png")} />
                </View>

                <Formik
                    initialValues={{
                        petName: '',
                        age: '',
                        gender: '',
                        category: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}

                >
                    {({ values, errors, touched, handleChange, handleSubmit, setFieldTouched, isValid }) => (
                        <View style={styles.container}>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Pet Name *"
                                    onChangeText={handleChange('petName')}
                                    value={values.petName}
                                    onBlur={() => setFieldTouched('petName')}
                                />
                                {touched.petName && errors.petName && (
                                    <Text style={styles.error}>{errors.petName}</Text>
                                )}
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Age *"
                                    onChangeText={handleChange('age')}
                                    value={values.age}
                                    onBlur={() => setFieldTouched('age')}
                                    keyboardType="numeric"
                                />
                                {touched.age && errors.age && (
                                    <Text style={styles.error}>{errors.age}</Text>
                                )}
                            </View>

                            <View style={styles.input}>
                                <Text style={styles.label}>Gender *</Text>
                                <RadioButton.Group
                                    onValueChange={handleChange('gender')}
                                    value={values.gender}
                                >
                                    <View style={styles.radioButton}>
                                        <RadioButton.Android value="male" />
                                        <Text style={styles.radioButtonLabel}>Male</Text>
                                    </View>
                                    <View style={styles.radioButton}>
                                        <RadioButton.Android value="female" />
                                        <Text style={styles.radioButtonLabel}>Female</Text>
                                    </View>
                                </RadioButton.Group>
                                {touched.gender && errors.gender && (
                                    <Text style={styles.error}>{errors.gender}</Text>
                                )}
                            </View>

                            <View style={styles.input}>
                                <Text style={styles.label}>Category *</Text>
                                <RadioButton.Group
                                    onValueChange={handleChange('category')}
                                    value={values.category}
                                >
                                    <View style={styles.radioButton}>
                                        <RadioButton.Android value="cat" />
                                        <Text style={styles.radioButtonLabel}>Cat</Text>
                                    </View>
                                    <View style={styles.radioButton}>
                                        <RadioButton.Android value="dog" />
                                        <Text style={styles.radioButtonLabel}>Dog</Text>
                                    </View>
                                </RadioButton.Group>
                                {touched.category && errors.category && (
                                    <Text style={styles.error}>{errors.category}</Text>
                                )}
                            </View>

                            <View >
                                <TouchableOpacity  style={styles.button} onPress={handleSubmit}>
                                    <View >
                                        <Text style={styles.text}>SUBMIT</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F1EEF4',
    },

    headContainer: {
        color: 'white',
        marginTop: 0,
        height: 55,
        backgroundColor: '#B181EA',
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
        fontSize: 18,
        color:'white',
        alignSelf: 'center',
    },

    input: {
        borderWidth: 1,
        padding: 5,
        width: '90%',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 30,
        borderColor:'#461974'

    },


    button: {
        width: '35%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 15,
        paddingTop: 12,
        backgroundColor: '#8c80f9',

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
    error: {
        color: 'red',
        marginLeft: 20,
        marginTop: 0,
    },

});

export default SetUpPet;
