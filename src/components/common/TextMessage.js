import React, { Component, Fragment } from 'react';
import { Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Communications from 'react-native-communications';

class TextMessage extends Component {

    renderButton = () => {
        return (
            <Button 
                full 
                info 
                onPress={() => Communications.text(this.props.phoneNumber)} 
                style={{ minWidth: this.props.btnWidth, marginBottom: 5, marginRight: 5 }}>
                <Icon active name="sms" size={22} color="#ffffff" />
                <Text>TEXT</Text>
            </Button>
        )
    }

    render(){
        return (
            <Fragment>
                {this.renderButton()}
            </Fragment>
        );
    }
}

export default TextMessage;