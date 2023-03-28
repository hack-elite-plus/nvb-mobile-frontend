import { View } from 'react-native'
import React from 'react'
import Stopwatch from '../components/Stopwatchc';
import Headingbar from '../components/Headingbar';
import Maps from '../components/Maps';


const Running = () => {
  return (
    <View >
      <View>
        <Stopwatch />
      </View>
      <View>
        <Headingbar />
      </View>
      <View>
        <Maps/>
      </View>
    </View>


  )
}

export default Running