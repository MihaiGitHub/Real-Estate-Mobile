import React, { Component, Fragment } from 'react';
import { Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Communications from 'react-native-communications';

class TextMessage extends Component {

    renderButton = () => {
        return ( 
            <Button
                small
                primary
                onPress={() => Communications.text(this.props.phoneNumber)} 
                style={{ width: this.props.btnWidth, marginBottom: 5, marginRight: 5, borderRadius: 3 }}>
                <Icon active name="sms" size={22} color="#ffffff" style={styles.icon} />
                <Text>TEXT</Text>
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

export default TextMessage;