import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, ScrollView,Text, View, TextInput, Button, Alert, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';
import BASE_URL from '../config';

export default function MyProfile({ navigation }) {
    const [userId, setUserId] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    const fetchUserDetails = () => {
        // Make an API request to fetch user details based on the provided user ID
        axios
            .get(`${BASE_URL}/pet/getPetDetails/${userId}`)
            .then((response) => {
                // Handle the successful response
                setUserDetails(response.data);
                toggleModal();
            })
            .catch((error) => {
                // Handle errors
                console.error('Error fetching user details:', error);
                Alert.alert('Error', 'Failed to fetch user details');
            });
    };

    return (
        <View >
            <View style={styles.headContainer}>
                <Text style={styles.headtext}>Display Pet Details</Text>
            </View>
            <ScrollView>
                <View style={styles.maincontainer}>
                    <Image style={styles.img} source={require('../assets/animal-care.png')}/>

                    <View style={styles.container}>
                        <Text>Enter Pet ID</Text>
                        <TextInput
                            style={styles.input}
                            // placeholder="Enter Your User ID"
                            value={userId}
                            onChangeText={setUserId}
                        />
                        <TouchableOpacity  style={styles.button} onPress={fetchUserDetails}>
                            <View >
                                <Text style={styles.text}>Display Pet Details</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {userDetails && (
                <View style={styles.detailsContainer}>

                    <Modal isVisible={isModalVisible}>
                        <View style={styles.popupContainer}>
                            <Text style={styles.popupText}>Pet Name: {userDetails.petName} {userDetails.lastName}</Text>
                            <Text style={styles.popupText}>Age: {userDetails.age}</Text>
                            <Text style={styles.popupText}>Gender: {userDetails.gender} </Text>
                            <Text style={styles.popupText}>Category: {userDetails.category} </Text>

                            <TouchableOpacity  style={styles.button} onPress={toggleModal}>
                                <View >
                                    <Text style={styles.text}>Close</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    headContainer: {
        color: 'white',
        marginTop: 0,
        height: 55,
        backgroundColor: '#B181EA',
        paddingTop: 5,
        alignItems: 'center',
        marginBottom:10,
    },
    headtext: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    img: {

        alignSelf: 'center',
        marginBottom: 5,
        height: 300,
        width: '80%',
    },
    maincontainer:{
        backgroundColor: '#E8E0EF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width:'85%',
        alignSelf:'center',
        paddingTop: 20,
        borderRadius:10,
    },

    container: {

        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width:'100%',
        alignSelf:'center',
        paddingTop: 20,
        borderRadius:10,
    },

    button: {
        width: '50%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        paddingTop:8,
        backgroundColor: '#8c80f9',
        alignItems:'center',

    },

    text: {
        fontSize: 15,
        color: 'white',
    },
    input: {
        width: '60%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    popupContainer: {
        width:'90%',
        marginTop: 20,
        alignSelf:'center',
        alignItems:'center',
        padding:20,
        backgroundColor: 'white',
    },
    popupText: {
        fontSize: 18,
        marginBottom: 10,
        backgroundColor:'white',
        width:'90%',
        padding:5,
        borderRadius: 5,
    },
});
