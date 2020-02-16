import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
//pull in the ScrrenName 
import ScreenName from '../components/ScreenName.js';
import { Ionicons } from '@expo/vector-icons';
import { ProgressCircle } from 'react-native-svg-charts';

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
            <View style={styles.container}>
                <ScreenName name={'Home'}/>
                <ProgressCircle style={{ height: 200 }} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
});