import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || "large"} color="#4050B5" />
      <Text style={styles.textStyle}>Loading...</Text>
    </View>
  );
};

// Align the spinner in center of screen
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "#4050B5",
  },
};

export { Spinner };
