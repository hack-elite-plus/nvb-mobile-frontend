import { View } from 'react-native'
import React from 'react'
import Stopwatch from '../components/Stopwatch';
import Headingbar from '../components/Headerbar';


const Running = () => {
  return (
    <View >
      <View>
        <Stopwatch />
      </View>
      <View>
        <Headingbar />
      </View>
    </View>


  )
}

export default Running