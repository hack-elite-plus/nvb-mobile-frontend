import { useState } from 'react';
import { Button, ScrollView, TextInput } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

const SignupSchema = Yup.object().shape({
    fName: Yup.string()
        .min(3, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Please enter your first name.'),
    lName: Yup.string()
        .min(3, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Please enter your last name.'),
    dob: Yup.string()
        .matches(/^(?=.*?[0-9])(?=.*?[-/.])/,  'invalid type.')
        .required('Please enter your date of birth.'),
    gender: Yup.string()
        .required('Please select a gender.'),
    height: Yup.string()
        .matches(/^(?=.*?[0-9])(?=.*?[.])/,  'invalid type.')
        .required('Please enter your height in meter.'),
    weight: Yup.string()
        .matches(/^(?=.*?[0-9])(?=.*?[.])/,  'invalid type.')
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
    post: Yup.string()
        .min(3, 'invalid')
        .max(10, 'invalid')
        .matches(/^[0-9]+$/,  'can only contain digits'),

});


const SetUpUser = () => {
    // const navigation = useNavigation();

    return (
        <ScrollView>
            <View>
                <View style={styles.headContainer}>
                    <Text style={styles.headtext}>Profile Setup</Text>
                </View>

                <View>
                    <Image style={styles.img} source={require('../assets/run.png')} />
                    <Text style={styles.text}>Jogger/ Biker/ Runner</Text>
                </View>

                <Formik
                    initialValues={{
                        fName: '',
                        lName: '',
                        gender: '',
                        dob: '',
                        height: '',
                        weight: '',
                        contact: '',
                        state: '',
                        province: '',
                        post: '',
                        city: '',
                    }}
                    validationSchema={SignupSchema}
                >
                    {({ values, errors, touched, handleChange, handleSubmit, setFieldTouched, isValid }) => (
                        <View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="First Name"
                                    onChangeText={handleChange('fName')}
                                    value={values.fName}
                                    onBlur={()=> setFieldTouched('fname')}
                                />
                                { touched.fname && errors.fName && (
                                    <Text style={styles.error} >{errors.fName}</Text>
                                )}
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last Name"
                                    onChangeText={handleChange('lName')}
                                    value={values.lName}
                                    onBlur={()=> setFieldTouched('lname')}

                                />
                                { touched.lname && errors.lName && (
                                    <Text style={styles.error}>{errors.lName}</Text>
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
                            </View>

                            {touched.gender && errors.gender && (
                                <Text style={styles.error}>{errors.gender}</Text>
                            )}

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Date of Birth"
                                    onChangeText={handleChange('dob')}
                                    value={values.dob}
                                    onBlur={()=> setFieldTouched('dob')}

                                />
                                { touched.dob && errors.dob && (
                                    <Text style={styles.error}>{errors.dob}</Text>
                                )}
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Height (m)"
                                    onChangeText={handleChange('height')}
                                    value={values.height}
                                    onBlur={()=> setFieldTouched('height')}

                                />
                                {touched.height && errors.height && (
                                    <Text style={styles.error}>{errors.height}</Text>
                                )}
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Weight (kg)"
                                    onChangeText={handleChange('weight')}
                                    value={values.weight}
                                    onBlur={()=> setFieldTouched('weight')}

                                />
                                {touched.weight && errors.weight && (
                                    <Text style={styles.error}>{errors.weight}</Text>
                                )}
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Contact Number"
                                    onChangeText={handleChange('contact')}
                                    value={values.contact}
                                    onBlur={()=> setFieldTouched('contact')}

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
                                    placeholder="Province"
                                    onChangeText={handleChange('province')}
                                    value={values.province}
                                    onBlur={()=> setFieldTouched('province')}

                                />
                                {touched.province && errors.province && (
                                    <Text style={styles.error}>{errors.province}</Text>
                                )}
                                <TextInput
                                    style={styles.address}
                                    placeholder="City"
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

                            <View style={styles.button}>
                                <Button title="SUBMIT" onPress={handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>
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
        width: 155,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        padding: 5,
        width: '90%',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 0,
        marginTop:30,
    },
    button: {
        width: '35%',
        height: 60,
        alignSelf: 'center',
        borderRadius: 35,
        marginTop: 40,
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
});

export default SetUpUser;
