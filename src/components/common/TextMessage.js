import React, { Fragment } from "react";
import { Text, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import Communications from "react-native-communications";

const TextMessage = (props) => {
  const renderButton = () => {
    return (
      <Button
        small
        primary
        onPress={() => Communications.text(props.phoneNumber)}
        style={{
          width: props.btnWidth,
          marginBottom: 5,
          marginRight: 5,
          borderRadius: 3,
        }}
      >
        <Icon active name="sms" size={22} color="#ffffff" style={styles.icon} />
        <Text>TEXT</Text>
      </Button>
    );
  };

  return <Fragment>{renderButton()}</Fragment>;
};

const styles = {
  icon: {
    paddingLeft: 15,
  },
};

export default TextMessage;
