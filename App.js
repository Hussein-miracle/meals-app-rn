import { StatusBar } from "expo-status-bar";
import { useState  , useCallback} from "react";
import { StyleSheet, View } from "react-native";

import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { AppLoading } from "expo";


// const fetchFonts = () => {
//   return useFonts({
//     "open-sans": `${require("./assets/fonts/OpenSans-Regular.ttf")}`,
//     "open-sans-bold":`${require("./assets/fonts/OpenSans-Bold.ttf")}`,
//   });
// };

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);
  const [fontsLoaded,error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold":require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }


  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
    
  },[fontsLoaded])

 

  return (
    <View style={styles.screen} onLayout={onLayoutRootView}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: 50,
    flex: 1,
  },
});
