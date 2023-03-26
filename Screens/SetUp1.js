

import { StyleSheet, Text, View } from 'react-native';
import SelectBody from './SelectBody';

const SetUp1 = () => {
    return(
        <View style={StyleSheet.Setup1Container}>
            
        <View style={styles.headContainer}>
            <Text style={styles.headtext}>Profile Setup</Text>
        </View> 
            <SelectBody/>
        </View>

    );

 };

 const styles = StyleSheet.create({
    
    Setup1Container:{
        flex:1,
    },

    headContainer: {
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

 });

 export default SetUp1;
