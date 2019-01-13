import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
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

export default CardSection;