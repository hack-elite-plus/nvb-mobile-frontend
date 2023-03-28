import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps'

const Maps = () => {

    function Map(){
        return (
            <View style={{flex: 1}}>
                <MapView style={{flex1}}>

                </MapView>
                <Text>Map on there</Text>
            </View>
        )
    };

  return (
    <View>
      <Text>Maps</Text>
    </View>
  )
}

export default Maps