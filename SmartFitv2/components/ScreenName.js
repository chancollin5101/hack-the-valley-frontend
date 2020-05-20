import React from 'react'; 
import { Views, Text, StyleSheet} from 'react-native';

export default function ScreenName(props) { 
    return (
        <Text style={styles.titleText}>{props.name}</Text>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFA500"
  }
});