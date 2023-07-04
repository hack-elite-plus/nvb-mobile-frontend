//Imports
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import Screens
import DashBoard from './NavBarComponent/DashBoard';
import Activity from './NavBarComponent/Activity';
import Analytics from './NavBarComponent/Analytics';
import MyGoal from './NavBarComponent/MyGoal';
import MyProfile from './NavBarComponent/MyProfile';
import Settin from './NavBarComponent/Settin';
import {StyleSheet} from "react-native";


//Screen names
const Dashboard = "DashBoard";
const activity = "Activity";
const Analytic = "Analytics";
const Mygoal = "MyGoal";
const Profile = "Myprofile";
const Setting = "Settings";


const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <NavigationContainer independent={true}>

            <Tab.Navigator
                initialRouteName={DashBoard}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        // Display icons in bottom navigation bar
                        if (rn === Dashboard) {
                            iconName = focused ? 'grid' : 'grid-outline';

                        } else if (rn === activity) {
                            iconName = focused ? 'bicycle' : 'bicycle-outline';

                        } else if (rn === Analytic) {
                            iconName = focused ? 'bar-chart' : 'bar-chart-outline';

                        } else if (rn === Mygoal) {
                            iconName = focused ? 'basketball' : 'basketball-outline';

                        } else if (rn === Profile) {
                            iconName = focused ? 'person' : 'person-outline';

                        } else if (rn === Setting) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        //  return  component..
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#B181EA',
                    inactiveTintColor: 'grey',
                    labelStyle: {paddingBottom: 10, fontSize: 10},
                    style: {padding: 10, height: 70},


                }}>

                <Tab.Screen style ={styles.tab} name={Dashboard} component={DashBoard} />
                <Tab.Screen name={activity} component={Activity} />
                <Tab.Screen name={Analytic} component={Analytics} />
                <Tab.Screen name={Mygoal} component={MyGoal} />
                <Tab.Screen name={Profile} component={MyProfile} />
                <Tab.Screen name={Setting} component={Settin} />


            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});


export default BottomNavigation;