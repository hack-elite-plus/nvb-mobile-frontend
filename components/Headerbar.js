import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export class Headingbar extends Component {
    render() {
        return (
            <SafeAreaView>
                <View className="flex-row items-center justify-center absolute top-20 left-0 w-full h-12 bg-slate-50 border-l-2 border-r-2 border-b-2 border-t-2 border-[#b1dced]">
                    {/* Distance */}
                    <View className="right-20 items-center justify-center">
                        <Text className="text-slate-900">Distance</Text>
                        <Text>--m</Text>
                    </View>

                    {/* Speed */}
                    <View className="right-0 items-center justify-center">
                        <Text className="text-slate-900">Speed</Text>
                        <Text>--km/h</Text>
                    </View>

                    {/* CAlories */}
                    <View>
                    <View className="-right-20 items-center justify-center">
                        <Text className="text-slate-900">Calories</Text>
                        <Text>-- kcal</Text>
                    </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Headingbar
