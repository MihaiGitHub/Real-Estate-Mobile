import React, { Component, Fragment } from 'react';
import { Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Communications from 'react-native-communications';

class PhoneCall extends Component {

    renderButton = () => {
        return (
            <Button 
                small 
                primary 
                onPress={() => Communications.phonecall(this.props.phoneNumber, true)} 
                style={{ width: this.props.btnWidth, marginBottom: 5, borderRadius: 3 }}>
                <Icon active name="phone-volume" size={22} color="#ffffff" style={styles.icon} />
                <Text>CALL</Text>
            </Button>
        );
    }

    render(){
        return (
            <Fragment>
                {this.renderButton()}
            </Fragment>
        );
    }
}

const styles = {
    icon: {
        paddingLeft: 15
    }
}

export default PhoneCall;