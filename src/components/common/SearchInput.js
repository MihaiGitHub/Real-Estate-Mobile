import React from 'react';
import { View } from 'react-native';
import { Item, Icon, Input } from 'native-base';

const SearchInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {

    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Item>
                <Icon style={{color: '#808080'}} name="search" />
                <Input
                    placeholder="Address or city" 
                    value={value}
                    onChangeText={onChangeText} />
            </Item>
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
};

export { SearchInput };