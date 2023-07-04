import React from "react";
import {StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

const SelectBody = () => {
    const navigation = useNavigation();

    return (
        // Access to scroll the screen
        <ScrollView>

            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headtext}>Select User Type</Text>
                </View>


                {/*navigate to  Jogger/Biker/Runner setUp screen*/}
                <View style={styles.runbox}>

                    <Image style={styles.img} source={require('../assets/run.png')}/>
                    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('SetUpUser')}>
                        <View >
                            <Text style={styles.text}>Jogger/Biker/Runner</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/*navigate to Pet setUp screen*/}
                <View style={styles.petbox}>
                    <Image style={styles.img} source={require('../assets/pet.png')}/>
                    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('SetUpPet')}>
                        <View >
                            <Text style={styles.text}>Pet</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1EEF4',

    },

    header: {
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

    headingtext: {
        fontSize: 24,
        color: '#2A92CD',
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    text: {
        fontSize: 17,
        color: 'white',
        alignSelf: 'center',
    },

    textcontainer: {
        marginTop: 10,
        height: 60,
        width: 200,
        alignSelf: 'center',
    },

    img: {

        alignSelf: 'center',
        marginBottom: 5,
        height: 150,
        width: 150,
    },

    runbox: {
        alignSelf: 'center',
        height: 250,
        width: 250,
        padding: 15,
        marginTop: 75,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignContent: 'space-between',
        shadowColor:"#000",
        shadowOpacity: 2500,
        shadowRadius: 10,
        shadowOffset:1000
    },


    petbox: {
        alignSelf: 'center',
        height: 250,
        width: 250,
        padding: 20,
        marginTop: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        alignContent: 'space-between',
        shadowColor:"#000",
        shadowOpacity: 1,
        shadowRadius: 10,
    },

    button: {
        marginTop: 5,
        backgroundColor: '#8c80f9',
        borderRadius: 10,
        padding: 5,
    },


});

export default SelectBody;