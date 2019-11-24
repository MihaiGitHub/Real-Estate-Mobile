import React, { Component, Fragment } from 'react';
import { Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Communications from 'react-native-communications';

class PhoneCall extends Component {

    renderButton = () => {
        return (
            <Button 
                full 
                info 
                onPress={() => Communications.phonecall(this.props.phoneNumber, true)} 
                style={{ minWidth: this.props.btnWidth, marginBottom: 5 }}>
                <Icon active name="phone-volume" size={22} color="#ffffff" />
                <Text>CALL</Text>
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

export default PhoneCall;