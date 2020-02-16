import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
//pull in the ScrrenName 
import ScreenName from '../components/ScreenName.js';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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
            <View style={styles.container}>
                <ScreenName name={'Screen Three'}/>
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