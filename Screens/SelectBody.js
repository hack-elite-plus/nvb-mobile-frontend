import React from "react";
import {StyleSheet, Text, View, Image, Button, ScrollView} from "react-native";
import {useNavigation} from '@react-navigation/native';

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
                    <Button onPress={() => navigation.navigate('SetUpUser')} title="Jogger/Biker/Runner"/>
                </View>

                {/*navigate to Pet setUp screen*/}
                <View style={styles.petbox}>
                    <Image style={styles.img} source={require('../assets/pet.png')}/>
                    <Button onPress={() => navigation.navigate("SetUpPet")} title="Pet"/>
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({

    header: {
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
        marginTop: 10,
        height: 60,
        width: 200,
        alignSelf: 'center',
    },

    img: {

        alignSelf: 'center',
        marginBottom: 5,
        height: 100,
        width: 105,
    },

    runbox: {
        alignSelf: 'center',
        height: 175,
        width: 200,
        padding: 20,
        marginTop: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        alignContent: 'space-between',
    },


    petbox: {
        alignSelf: 'center',
        height: 175,
        width: 200,
        padding: 20,
        marginTop: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        alignContent: 'space-between',
    },


});

export default SelectBody;