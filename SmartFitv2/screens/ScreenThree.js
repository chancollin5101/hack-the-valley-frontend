import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
//pull in the ScrrenName 
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import ScreenName from '../components/ScreenName.js';
import textStyle from '../config/textStyle';

const TabIcon3 = (props) => (
    <MaterialCommunityIcons
        name={'food-croissant'}
        size={35}
        color={props.focused ? 'orange' : 'darkgrey'}
    />
)


export default class ScreenThree extends React.Component { 
    
    static navigationOptions = { 
        tabBarIcon: TabIcon3
    }; 

    render() { 
        return (
            <View style={textStyle.titleContainer}>
                <ScreenName name={'Profile'}/>
            </View>
        );
    }
}