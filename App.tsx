import React from 'react';
import { RootNavigation } from './src/RootNavigation';
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const App = () => {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootNavigation/>
    </GestureHandlerRootView>
  );
};

export default App;
