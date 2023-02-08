import { StatusBar } from "expo-status-bar";
import { useState, useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MealsNavigator from "./navigation/meals-navigator";

import mealsReducer from "./store/reducers/meals.reducer";

enableScreens(true);
// const fetchFonts = () => {
//   return useFonts({
//     "open-sans": `${require("./assets/fonts/OpenSans-Regular.ttf")}`,
//     "open-sans-bold":`${require("./assets/fonts/OpenSans-Bold.ttf")}`,
//   });
// }; m

const rootReducer = combineReducers({
  meals: mealsReducer,
});

//console.log(process.env.NODE_ENV,'nEnv');

const store = process.env.NODE_ENV === 'development' ? createStore(rootReducer,composeWithDevTools()) : createStore(rootReducer);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const [fontsLoaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    const loadFonts = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    loadFonts();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: 50,
    flex: 1,
  },
});
