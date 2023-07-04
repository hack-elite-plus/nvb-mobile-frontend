import React, { useState } from 'react';
import {Button, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import BASE_URL from "../config";

const SignupSchema = Yup.object().shape({

    fName: Yup.string()
        .min(3, 'Too Short!')
        .max(25, 'Too long!')
        .required('Please enter your first name.'),
    lName: Yup.string()
        .min(3, 'Too Short!')
        .max(25, 'Too long!')
        .required('Please enter your last name.'),
    gender: Yup.string()
        .required('Please select a gender.'),
    height: Yup.number()
        .typeError('Height must be a number')
        .positive('Height must be a positive number')
        .required('Please enter your height in meter.'),
    weight: Yup.number()
        .typeError('Weight must be a number')
        .positive('Weight must be a positive number')
        .required('Please enter your weight in kilograms.'),
    contact: Yup.string()
        .min(10, 'invalid')
        .max(10, 'invalid')
        .matches(/^[0-9]+$/,  'can only contain digits')
        .required('Please enter your mobile number.'),
    state: Yup.string()
        .min(3, 'Too Short!'),
    province: Yup.string()
        .min(3, 'Too Short!')
        .required('Please enter your province.'),
    city: Yup.string()
        .min(3, 'Too Short!')
        .required('Please enter your city.'),
    // post: Yup.string()
    //     .min(3, 'invalid')
    //     .max(10, 'invalid')
    //     .matches(/^[0-9]+$/,  'can only contain digits'),

});




const SetUpUser = () => {
    const navigation = useNavigation();

    const handleSubmit = (values) => {
        axios.post(`${BASE_URL}/user/addUser`, {
            firstName: values.fName,
            lastName: values.lName,
            gender: values.gender,
            height: values.height,
            weight: values.weight,
            contact: values.contact,
            state: values.state,
            province: values.province,
            city: values.city,
            postcode: values.post,

        })
            .then((response) => {
                // Handle the response from the backend
                console.log('User registration successful!');
                // Redirect or navigate to the next screen
                alert("User Details Add successfully!!");
                navigation.navigate('SelectUserType');
            })
            .catch((error) => {
                // Handle any errors
                console.error('Error registering User:', error);
            });
    };


    return (
        <ScrollView>
            <View>
                <View style={styles.headContainer}>
                    <Text style={styles.headtext}>Jogger / Biker /Runner</Text>
                </View>

                <View>
                    <Image style={styles.img} source={require('../assets/run.png')} />

                </View>

                <Formik
                    initialValues={{
                        fName: '',
                        lName: '',
                        gender: '',
                        height: '',
                        weight: '',
                        contact: '',
                        state: '',
                        province: '',
                        post: '',
                        city: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, handleChange, handleSubmit, setFieldTouched, isValid }) => (
                        <View style={styles.container}>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="First Name *"
                                    onChangeText={handleChange('fName')}
                                    value={values.fName}
                                    onBlur={()=> setFieldTouched('fName')}

                                />
                                {touched.fName && errors.fName && (
                                    <Text style={styles.error}>{errors.fName}</Text>
                                )}
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last Name *"
                                    onChangeText={handleChange('lName')}
                                    value={values.lName}
                                    onBlur={()=> setFieldTouched('lName')}

                                />
                                {touched.lName && errors.lName && (
                                    <Text style={styles.error}>{errors.lName}</Text>
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
                            </View>

                            {touched.gender && errors.gender && (
                                <Text style={styles.error}>{errors.gender}</Text>
                            )}

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Height (m) *"
                                    onChangeText={handleChange('height')}
                                    value={values.height}
                                    onBlur={()=> setFieldTouched('height')}
                                    keyboardType="numeric"

                                />
                                {touched.height && errors.height && (
                                    <Text style={styles.error}>{errors.height}</Text>
                                )}
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Weight (kg) *"
                                    onChangeText={handleChange('weight')}
                                    value={values.weight}
                                    onBlur={()=> setFieldTouched('weight')}
                                    keyboardType="numeric"

                                />
                                {touched.weight && errors.weight && (
                                    <Text style={styles.error}>{errors.weight}</Text>
                                )}
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Contact Number *"
                                    onChangeText={handleChange('contact')}
                                    value={values.contact}
                                    onBlur={()=> setFieldTouched('contact')}
                                    keyboardType="numeric"

                                />
                                {touched.contact && errors.contact && (
                                    <Text style={styles.error}>{errors.contact}</Text>
                                )}
                            </View>

                            <View>
                                <Text style={styles.addText}>Address</Text>
                                <TextInput
                                    style={styles.address}
                                    placeholder="State"
                                    onChangeText={handleChange('state')}
                                    value={values.state}
                                    onBlur={()=> setFieldTouched('state')}

                                />
                                {touched.state && errors.state && (
                                    <Text style={styles.error}>{errors.state}</Text>
                                )}
                                <TextInput
                                    style={styles.address}
                                    placeholder="Province *"
                                    onChangeText={handleChange('province')}
                                    value={values.province}
                                    onBlur={()=> setFieldTouched('province')}

                                />
                                {touched.province && errors.province && (
                                    <Text style={styles.error}>{errors.province}</Text>
                                )}
                                <TextInput
                                    style={styles.address}
                                    placeholder="City *"
                                    onChangeText={handleChange('city')}
                                    value={values.city}
                                    onBlur={()=> setFieldTouched('city')}

                                />
                                {touched.city && errors.city && (
                                    <Text style={styles.error}>{errors.city}</Text>
                                )}
                                <TextInput
                                    style={styles.address}
                                    placeholder="Post Code"
                                    onChangeText={handleChange('post')}
                                    value={values.post}
                                    onBlur={()=> setFieldTouched('post')}

                                />
                                {touched.post && errors.post && (
                                    <Text style={styles.error}>{errors.post}</Text>
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
        width: 155,
    },
    text: {
        fontWeight: 'bold',
        fontSize:18,
        alignSelf: 'center',
        color:'white',
        shadowColor:'#B181EA',
        shadowOpacity: 1,
    },
    input: {
        borderWidth: 1,
        padding: 5,
        width: '90%',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 0,
        marginTop:30,
        borderColor:'#461974'
    },
    button: {
        width: '35%',
        height: 60,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 15,
        paddingTop: 20,
        backgroundColor: '#8c80f9',

    },
    address: {
        borderWidth: 1,
        padding: 5,
        width: '90%',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 5,
    },
    addText: {
        marginTop: 30,
        marginLeft: 20,
        fontSize: 18,
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
    // button: {
    //     marginTop: 5,
    //     backgroundColor: '#8c80f9',
    //     borderRadius: 10,
    //     padding: 5,
    //     width:"45%",
    // },

});

export default SetUpUser;