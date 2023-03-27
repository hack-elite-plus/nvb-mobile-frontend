import {useState} from 'react';
import {Button, ScrollView, TextInput} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from "formik";
import {useNavigation} from "@react-navigation/native";

const SignupSchema = Yup.object().shape({
    FirstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please enter your first name.'),
    LastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
});


const Human1 = () => {
    const navigation = useNavigation();


    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setdob] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [contact, setContact] = useState('');
    const [state, setState] = useState('');
    const [province, setProvince] = useState('');
    const [post, setPost] = useState('');
    const [City, setCity] = useState('');


    return (
        <ScrollView>

            <View>
                <View style={styles.headContainer}>
                    <Text style={styles.headtext}>Profile Setup</Text>
                </View>


                <View>
                    <Image style={styles.img} source={require("../assets/run.png")}/>
                    <Text style={styles.text}>Jogger/ Biker/ Runner</Text>
                </View>

                <Formik initialValues={{
                    FirstName: '',
                    LastName: '',
                    Gender: '',
                    DoB: ''

                }}
                        validationSchema={SignupSchema}
                >
                    {({values, errors, touched, handleSubmit}) => (

                        <View>
                            <View>
                                <TextInput style={styles.input}
                                           placeholder='First Name'
                                           onChangeText={setfName}
                                >
                                </TextInput>
                            </View>

                            <View>
                                <TextInput style={styles.input}
                                           placeholder='Last Name'
                                           onChangeText={setlName}
                                ></TextInput>
                            </View>

                            <View>
                                <TextInput style={styles.input}
                                           placeholder='Gender'
                                           onChangeText={setGender}
                                >

                                </TextInput>
                            </View>

                            <View>
                                <TextInput style={styles.input}
                                           placeholder='Date of Birth'
                                           onChangeText={setdob}
                                >

                                </TextInput>
                            </View>


                            <View>
                                <TextInput style={styles.input}
                                           placeholder='Height'
                                           onChangeText={setHeight}
                                >

                                </TextInput>
                            </View>

                            <View>
                                <TextInput style={styles.input}
                                           placeholder='Weight'
                                           onChangeText={setWeight}
                                >

                                </TextInput>
                            </View>

                            <View>
                                <TextInput style={styles.input}
                                           placeholder='Contact Number'
                                           onChangeText={setContact}
                                >

                                </TextInput>
                            </View>

                            <View>
                                <Text style={styles.addText}>Address</Text>
                                <TextInput style={styles.address}
                                           placeholder='State'
                                           onChangeText={setState}
                                >

                                </TextInput>
                                <TextInput style={styles.address}
                                           placeholder='Province'
                                           onChangeText={setProvince}
                                >

                                </TextInput>
                                <TextInput style={styles.address}
                                           placeholder='City'
                                           onChangeText={setCity}
                                >

                                </TextInput>

                                <TextInput style={styles.address}
                                           placeholder='Post Code'
                                           onChangeText={setPost}
                                >

                                </TextInput>
                            </View>

                            <View style={styles.button}>
                                <Button title="SUBMIT"/>
                            </View>
                        </View>

                    )}

                </Formik>

            </View>
        </ScrollView>


    )

}

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
    }
});

export default Human1;