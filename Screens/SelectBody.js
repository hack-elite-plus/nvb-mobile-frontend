import { StyleSheet,Text, View, Image, Button } from "react-native";


function SelectBody(){
    return(
        <View style={styles.container}>

            <View style={styles.textcontainer}>
                <Text style={styles.headingtext}>Select User Type</Text>
            </View>
            

             <View style={styles.runbox}> 
             
            <Image style={styles.img} source={require('../assets/run.png')} />
           <Button title="Jogger/Biker/Runner"/>
            </View>

            <View style={styles.petbox}>
            <Image style={styles.img} source={require('../assets/pet.png')} />
            <Button title="Pet"/>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,      
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