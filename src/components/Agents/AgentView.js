import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { findAgentById } from "../../actions/AgentsActions";

export function AgentView({ navigation }) {
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAgentById());
  }, []);

  console.log("Redux store ", reduxStore);

  return (
    <View>
      <Button
        title="Go to Agents List"
        onPress={() => navigation.navigate("AgentsList")}
      />
    </View>
  );
}
