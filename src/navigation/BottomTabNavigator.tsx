import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Feed' component={HomeScreen}/>
            <Tab.Screen name='MyProfile' component={ProfileScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;