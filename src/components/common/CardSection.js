import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {

    var mystyle = props.style ? props.style : styles.containerStyle;

    return (
        <View style={mystyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start', // Applies horizontally in this case due to flexDirection
        flexDirection: 'row', // Use flexbox to position elements horizontally using justifyContent
        borderColor: '#ddd',
        position: 'relative'
    }
}

export { CardSection };