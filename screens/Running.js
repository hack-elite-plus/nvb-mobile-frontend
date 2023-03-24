import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
// import Stopwatch from '../components/stopwatch';

const Running = () => {
  return (
    <View className="flex-1 items-ceter justify-center bg-green-400">
     {/* <Stopwatch/> */}
     <Text>This is stopwatch...</Text>
    </View>
  )
}

export default Running