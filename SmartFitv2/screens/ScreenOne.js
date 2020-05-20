import React from 'react'; 
import { View } from 'react-native'; 
//pull in the ScrrenName 
import ScreenName from '../components/ScreenName.js';
import { Ionicons } from '@expo/vector-icons';

import textStyle from '../config/textStyle';

const TabIcon1 = (props) => (
    <Ionicons
        name={'md-home'}
        size={35}
        color={props.focused ? 'orange' : 'darkgrey'}
    />
)

export default class ScreenOne extends React.Component { 
    
    static navigationOptions = { 
        tabBarIcon: TabIcon1
    }; 

    render() { 
        return (
            <View style={textStyle.titleContainer}>
                <ScreenName name={'Home'}/>
            </View>
        );
    }
}