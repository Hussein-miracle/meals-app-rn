import { StatusBar } from "expo-status-bar";
import { useState, useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AppLoading } from "expo";

import MealsNavigator from "./navigation/meals-navigator";

// const fetchFonts = () => {
//   return useFonts({
//     "open-sans": `${require("./assets/fonts/OpenSans-Regular.ttf")}`,
//     "open-sans-bold":`${require("./assets/fonts/OpenSans-Bold.ttf")}`,
//   });
// }; m

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
      <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: 50,
    flex: 1,
  },
});
