import React from "react";
import {StyleSheet, Text, View, Image, Button, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';

const SelectBody= () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headtext}>Profile SetUp</Text>
            </View>

            <View style={styles.textcontainer}>
                <Text style={styles.headingtext}>Select User Type</Text>
            </View>


            <View style={styles.runbox}>

                <Image style={styles.img} source={require('../assets/run.png')} />
                <Button onPress={() => navigation.navigate("Human1")} title="Jogger/Biker/Runner"/>
            </View>

            <View style={styles.petbox}>
                <Image style={styles.img} source={require('../assets/pet.png')} />
                <Button onPress={() => navigation.navigate("SetUpPet")} title="Pet"/>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({

    header: {
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

    headingtext: {
        fontSize: 24,
        color: '#2A92CD',
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    text: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
    },

    textcontainer: {
        marginTop: 30,
        height: 60,
        width: 200,

        alignSelf: 'center',
    },

    img:{

        alignSelf: 'center',
        marginBottom:5,
        height:100,
        width: 105,
    },

    runbox: {
        alignSelf: 'center',
        height: 175,
        width: 200,
        padding:20,
        marginTop: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        alignContent: 'space-between',
    },


    petbox: {
        alignSelf: 'center',
        height: 175,
        width: 200,
        padding:20,
        marginTop:50,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        alignContent: 'space-between',
    },




});

export default SelectBody;