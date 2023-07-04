import React, { useState, useEffect } from 'react';
import { Button, ScrollView, TextInput, View, Text, Alert, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import BASE_URL from "../config";
import {useNavigation} from "@react-navigation/native";

const SignupSchema = Yup.object().shape({
    fName: Yup.string().min(3, 'Too Short!').max(25, 'Too Long!'),
    lName: Yup.string().min(3, 'Too Short!').max(25, 'Too Long!'),
    dob: Yup.string().matches(/^(?=.*?[0-9])(?=.*?[-/.])/, 'Invalid type.'),
    height: Yup.number()
        .typeError('Height must be a number')
        .positive('Height must be a positive number')
        .required('Please enter your height in meter.'),
    weight: Yup.number()
        .typeError('Weight must be a number')
        .positive('Weight must be a positive number')
        .required('Please enter your weight in kilograms.'),
    contact: Yup.string()
        .min(10, 'Invalid')
        .max(10, 'Invalid')
        .matches(/^[0-9]+$/, 'Can only contain digits'),
    state: Yup.string().min(3, 'Too Short!'),
    province: Yup.string().min(3, 'Too Short!'),
    city: Yup.string().min(3, 'Too Short!'),
    post: Yup.string()
        .max(10, 'Invalid')
        .matches(/^[0-9]+$/, 'Can only contain digits'),
});

const EditProfile = () => {
    const [userId, setUserId] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const navigation = useNavigation();

    const handleFetchUserDetails = () => {
        fetchUserDetails(userId);
    };

    const handleUpdateUser = (values, userId) => {
        axios
            .put(`${BASE_URL}/user/updateUserDetails/${userId}`, {
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
                console.log('User update successful:', response.data);
                Alert.alert('User update successful');
                navigation.navigate('SelectEditUser');
            })
            .catch((error) => {
                console.error('Error updating user:', error);
                Alert.alert('Error updating user');
            });
    };

    const fetchUserDetails = (userId) => {
        axios
            .get(`${BASE_URL}/user/getUserDetails/${userId}`)
            .then((response) => {
                setUserDetails(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user details:', error);
                Alert.alert('Error', 'Failed to fetch user details');
            });
    };

    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headtext}>Edit User</Text>
                    </View>

                    <Text style={styles.texttitle}>Enter User ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="User ID"
                        value={userId}
                        onChangeText={setUserId}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleFetchUserDetails}>
                        <Text style={styles.buttonText}>Fetch User Details</Text>
                    </TouchableOpacity>
                </View>

                    {userDetails && (
                        <Formik
                            initialValues={{
                                fName: userDetails.firstName,
                                lName: userDetails.lastName,
                                gender: userDetails.gender,
                                height: userDetails.height,
                                weight: userDetails.weight,
                                contact: userDetails.contact,
                                state: userDetails.state,
                                province: userDetails.province,
                                city: userDetails.city,
                                post: userDetails.postcode,
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
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('fName')}
                                        onBlur={handleBlur('fName')}
                                        value={values.fName}
                                        placeholder="First Name"
                                    />
                                    {errors.fName && touched.fName && (
                                        <Text style={styles.errorText}>{errors.fName}</Text>
                                    )}

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('lName')}
                                        onBlur={handleBlur('lName')}
                                        value={values.lName}
                                        placeholder="Last Name"
                                    />
                                    {errors.lName && touched.lName && (
                                        <Text style={styles.errorText}>{errors.lName}</Text>
                                    )}

                                    <RadioButton.Group
                                        onValueChange={handleChange('gender')}
                                        value={values.gender}
                                    >
                                        <View style={styles.input}>
                                            <Text style={styles.label}>Gender:</Text>
                                            <View style={styles.radioButton}>
                                                <RadioButton value="male" />
                                                <Text style={styles.radioLabel}>Male</Text>
                                            </View>
                                            <View style={styles.radioButton}>
                                                <RadioButton value="female" />
                                                <Text style={styles.radioLabel}>Female</Text>
                                            </View>
                                        </View>
                                    </RadioButton.Group>

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('height')}
                                        onBlur={handleBlur('height')}
                                        value={values.height.toString()}
                                        placeholder="Height (m)"
                                        keyboardType="numeric"
                                    />
                                    {errors.height && touched.height && (
                                        <Text style={styles.errorText}>{errors.height}</Text>
                                    )}

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('weight')}
                                        onBlur={handleBlur('weight')}
                                        value={values.weight.toString()}
                                        placeholder="Weight (kg)"
                                        keyboardType="numeric"
                                    />
                                    {errors.weight && touched.weight && (
                                        <Text style={styles.errorText}>{errors.weight}</Text>
                                    )}

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('contact')}
                                        onBlur={handleBlur('contact')}
                                        value={values.contact}
                                        placeholder="Contact Number"
                                        keyboardType="numeric"
                                    />
                                    {errors.contact && touched.contact && (
                                        <Text style={styles.errorText}>{errors.contact}</Text>
                                    )}

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('state')}
                                        onBlur={handleBlur('state')}
                                        value={values.state}
                                        placeholder="State"
                                    />
                                    {errors.state && touched.state && (
                                        <Text style={styles.errorText}>{errors.state}</Text>
                                    )}

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('province')}
                                        onBlur={handleBlur('province')}
                                        value={values.province}
                                        placeholder="Province"
                                    />
                                    {errors.province && touched.province && (
                                        <Text style={styles.errorText}>{errors.province}</Text>
                                    )}

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('city')}
                                        onBlur={handleBlur('city')}
                                        value={values.city}
                                        placeholder="City"
                                    />
                                    {errors.city && touched.city && (
                                        <Text style={styles.errorText}>{errors.city}</Text>
                                    )}

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('post')}
                                        onBlur={handleBlur('post')}
                                        value={values.post}
                                        placeholder="Postal Code"
                                        keyboardType="numeric"
                                    />
                                    {errors.post && touched.post && (
                                        <Text style={styles.errorText}>{errors.post}</Text>
                                    )}

                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={styles.text}>Update</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                    )}
                </View>

        </ScrollView>
    );
};

const styles = {

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

    headtext: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white',
    },
    container:{
        backgroundColor: '#E2D6F3',
        height:220,
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

    input: {
        borderWidth: 1,
        padding: 5,
        width: '90%',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 20,
        borderColor:'#461974',
        backgroundColor:"white"

    },
    formContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    error: {
        color: 'red',
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioLabel: {
        marginRight: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    button: {
        width: '40%',
        height: 40,
        alignSelf: 'center',
        alignItems:'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        paddingTop: 10,
        backgroundColor: '#8c80f9',

    },
};

export default EditProfile;
