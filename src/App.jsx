import React from "react";
import Main from "./components/MainPage/Main";
import {Provider} from "react-redux"
import appStore from "./store/appStore";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
      <Main />
      </Provider>
    </div>
  );
};

export default App;
