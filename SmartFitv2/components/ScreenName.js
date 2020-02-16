import React from 'react'; 
import { Views, Text } from 'react-native';

export default function ScreenName(props) { 
    return (
        <Text>{props.name}</Text>
    );
}