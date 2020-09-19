import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import Router from "./Router";
import { Root } from "native-base";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const App = () => {
  const [loading, setLoading] = useState(true);

  async function fontLoad() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });

    setLoading(false);
  }

  const init = () => {
    fontLoad();
  };

  useEffect(() => {
    init();
  }, []);

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  if (loading) {
    return (
      <Root>
        <AppLoading />
      </Root>
    );
  } else {
    return (
      <Root>
        <Provider store={store}>
          <Router />
        </Provider>
      </Root>
    );
  }
};

export default App;
