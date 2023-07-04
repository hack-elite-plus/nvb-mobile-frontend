// Imports
import React from "react";
import { useState } from 'react';
import {Alert, Button, ScrollView, TextInput, TouchableOpacity} from 'react-native';
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
        .required('Please enter your age'),
    gender: Yup.string()
        .required('Please select a gender.'),
    category: Yup.string()
        .required('Please select a category.'),
});

const SetUpPet = () => {

    const [userId, setUserId] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const navigation = useNavigation();

    const handleFetchUserDetails = () => {
        fetchUserDetails(userId);
    };

    const handleUpdateUser = (values, userId) => {
        axios
            .put(`${BASE_URL}/pet/updatePetDetails/${userId}`, {

            petName: values.petName,
            age: values.age,
            gender: values.gender,
            category: values.category,

        })
            .then((response) => {
                // Handle the response from the backend
                console.log('Pet update successful!');
                // Redirect or navigate to the next screen
                alert("Pet Update successful!!");
                navigation.navigate('SelectEditUser');
            })
            .catch((error) => {
                // Handle any errors
                console.error('Error Pet Update:', error);
                Alert.alert('Error', 'Failed to update pet details');

            });
    };

    const fetchUserDetails = (userId) => {
        axios
            .get(`${BASE_URL}/pet/getPetDetails/${userId}`)
            .then((response) => {
                setUserDetails(response.data);

            })
            .catch((error) => {
                console.error('Error fetching pet details:', error);
                Alert.alert('Error', 'Failed to fetch pet details');
            });
    };

    return (
        <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headtext}>Edit Pet</Text>
                    </View>

                    <Text style={styles.texttitle}>Enter Pet ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Pet ID"
                        value={userId}
                        onChangeText={setUserId}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleFetchUserDetails}>
                        <Text style={styles.buttonText}>Fetch User Details</Text>
                    </TouchableOpacity>
                </View>
            <View>
                {/* Input Fields in Form */}

                {userDetails && (
                <Formik
                    initialValues={{
                        petName: userDetails.petName,
                        age: userDetails.age,
                        gender: userDetails.gender,
                        category: userDetails.category,
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => handleUpdateUser(values, userId)}

                >
                    {({
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          values,
                          errors,
                          touched,
                      }) => (
                          <View >
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Pet Name"
                                    onChangeText={handleChange('petName')}
                                    value={values.petName}
                                    onBlur={handleBlur('petName')}
                                />
                                {touched.petName && errors.petName && (
                                    <Text style={styles.error}>{errors.petName}</Text>
                                )}
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Age"
                                    onChangeText={handleChange('age')}
                                    value={values.age}
                                    onBlur={handleBlur('age')}
                                    keyboardType="numeric"
                                />
                                {touched.age && errors.age && (
                                    <Text style={styles.error}>{errors.age}</Text>
                                )}
                            </View>

                            <View style={styles.input}>
                                <Text style={styles.label}>Gender</Text>
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
                                <Text style={styles.label}>Category</Text>
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
                                        <Text style={styles.text}>UPDATE</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
                    )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({


    header: {
        color: 'white',
        height: 55,
        backgroundColor: '#B181EA',
        alignItems: 'center',
        marginBottom:5,
        borderRadius:10,
    },
    buttonText:{
        color:"white"
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white',
    },
    container:{
        backgroundColor: '#E2D6F3',
        height:230,
        width: '90%',
        alignSelf:'center',
        // justifyContent:'center',
        marginTop:50,
        borderRadius:10,

    },

    texttitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:10,
        color:'black',
        alignItems:'center',
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

    input: {
        borderWidth: 1,
        padding: 5,
        width: '90%',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 30,
        backgroundColor:"white",
        borderColor:'#461974'

    },


    button: {
        width: '35%',
        height: 40,
        alignItems:"center",
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 15,
        paddingTop: 8,
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
