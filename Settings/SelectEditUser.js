import React from "react";
import {StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

const SelectEditUser = () => {
    const navigation = useNavigation();

    return (
        // Access to scroll the screen
        <ScrollView>

            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headtext}>Select User Type</Text>
                </View>


                <View style={styles.selectionContainer}>
                    {/*<Image style={styles.image} source={require('../assets/SelectEditUser.jpg')}/>*/}
                    {/*<Text style={styles.headtext}>Select User Type to Update Profile</Text>*/}
                    <View style={styles.runbox}>
                        <View style={styles.box}>
                            <View style={styles.line}></View>
                    <Image style={styles.img} source={require('../assets/running_man.png')}/>
                    <TouchableOpacity   onPress={() => navigation.navigate('EditProfile')}>
                        <View >
                            <Text style={styles.text}>Jogger/Biker/Runner</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>

                    <View style={styles.petbox}>
                        <View style={styles.box}>
                            <View style={styles.line}></View>
                            <Image style={styles.img} source={require('../assets/dog.png')}/>
                            <TouchableOpacity   onPress={() => navigation.navigate('EditPetProfile')}>
                                <View >
                                    <Text style={styles.text}>Pet</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

           </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1EEF4',
        height:1000,



    },

    selectionContainer:{
        backgroundColor: '#E8E0EF',
        marginTop: 170,
        width:'85%',
        alignSelf:'center',
        // paddingTop: 20,
        borderRadius:10,
        justifyContent:'center'

    },

    box: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
        color: 'black',
        alignSelf: 'center',
        marginLeft:15,
    },

    textPet: {
        fontSize: 17,
        color: 'black',
        alignSelf: 'center',
        marginLeft:25,
    },

    textcontainer: {
        marginTop: 10,
        height: 60,
        width: 200,
        alignSelf: 'center',
    },
    line: {
        height: '100%',
        width: 10,
        backgroundColor:'#AB3FE1',
        borderRadius:10,
    },

    img: {

        alignSelf: 'center',
        marginLeft: 25,
        height: '90%',
        width: 100,
        marginTop:10,
        marginBottom:10,
    },

    image: {

        alignSelf: 'center',
        marginLeft: 8,
        height:250,
        width: '90%',
        marginTop:10,
        marginBottom: 10,

    },

    runbox: {
        alignSelf: 'center',
        height: 105,
        width: '90%',
        backgroundColor: '#8BA8EE',
        borderRadius: 10,
        marginTop:20,
        alignContent: 'space-between',
        shadowColor:"#000",
        shadowOpacity: 2500,
        shadowRadius: 10,
        shadowOffset:1000
    },


    petbox: {
        backgroundColor: '#66ACF2',
        alignSelf: 'center',
        height: 105,
        width: '90%',
        // paddingTop:10,
        // paddingBottom:10,
        marginTop: 20,
        marginBottom:20,
        borderRadius: 10,
        alignContent: 'space-between',
        shadowColor:"#000",
        shadowOpacity: 2500,
        shadowRadius: 10,
        shadowOffset:1000

    },

    button: {
        marginTop: 5,
        backgroundColor: '#8c80f9',
        borderRadius: 10,
        padding: 5,
    },


});

export default SelectEditUser;