import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { StartButton, PauseButton, ResetButton } from './Stopwatchbutton';

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    };

    const pauseTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    const resetTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    useEffect(() => {
        if (seconds === 60) {
            setSeconds(0);
            setMinutes((prevMinutes) => prevMinutes + 1);
        }
        if (minutes === 60) {
            setMinutes(0);
            setHours((prevHours) => prevHours + 1);
        }
    }, [seconds]);

    return (
        <SafeAreaView>
            <View className="flex-row items-center justify-center absolute top-0 left-0 w-full h-20 bg-black border-l-1 border-r-1 border-b-0 border-t-2 border-[#a4d9ee]">
                <Text className="text-6xl text-[#16a34a]">
                    {hours.toString().padStart(2, '0')}:{minutes
                        .toString()
                        .padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                </Text>
            </View>
            <View>
            <View  className="flex-row items-center absolute left-4 top-96 w-11/12 h-20 space-x-28 bg-black rounded-xl border-l-1 border-r-1 border-b-2 border-[#c7e5f1]">
                <View className="left-4 ">
                    {!isRunning && <StartButton onPress={startTimer} />}
                    {isRunning && <PauseButton onPress={pauseTimer} />}

                </View>
                <View className="absolute right-6">
                    <ResetButton onPress={resetTimer} />
                </View>
            </View>
            </View>
        </SafeAreaView>
    );
};

export default Stopwatch;

