import React,{useState, useRef, useCallback} from "react";
import { StyleShee, SafeAreaView, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Constants } from 'expo-constants';
import result from "./result";
import control from "./control";
import { displayTime } from "./util";

export default function Stopwatch(){
    const [time, setTime] = useState(0);
    const [isRunning, setRunning] = useState(false);
    const timer =useReference(null);
}

const handleLeftButtonPress  = useCallback ( () => {    
    if (isRunning){
        setResults((previousResults) => [time, previousResults.length, previousResults]);
    }

    else{
        clearInterval (timer.current);
    }
    setRunning((previousState) => !previousState);
}, [isRunning, time, previousResults]);

return(
    <SafeAreaView style={Styles.container}>
        <StatusBar style='light'/>
        <View style={Styles.display}>
            <Control
                isRunning={isRunning}
                handleLeftButtonPress={handleLeftButtonPress}
                handleRightButtonPress={handleRightButtonPress}
            />
        </View>

        <View style={styles.result}>
             <Result results={results} />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
        paddingTop: Constants.StatusBarHeight,
    },

    display: {
        flex:3/5,
        justifyContent:'center',
        alignItems: 'center',
    },
    displayText: {
        color:'#fff',
        fontSize: 70,
        fontWeight: "200",
        fontFamily: Platform.OS === 'android' ? "Helvetica" : "Helvetica" ,
    },

    Control:{
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    result: {flex: 2/5},
});