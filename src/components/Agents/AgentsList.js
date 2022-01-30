import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { agentsFetch } from "../../actions/AgentsActions";

export function AgentsList({ navigation }) {
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(agentsFetch());
  }, []);

  console.log("Redux store  ", reduxStore);

  return (
    <View>
      <Button
        title="Go to agent View"
        onPress={() => navigation.navigate("AgentView")}
      />
    </View>
  );
}
