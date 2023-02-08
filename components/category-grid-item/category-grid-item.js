import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridItem = ({ onSelect, data }) => {
  let TouchableComponent = TouchableOpacity;
  // console.log(Platform,'plat')
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={{ ...styles.listItem }}>
      <TouchableComponent onPress={onSelect} style={styles.touch}>
        <View style={{ ...styles.gridItem, backgroundColor: data.color }}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    // height: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    borderRadius: 8,

    // shadow for ios
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 10,

    // shadow for Android
    elevation: 5,
  },
  listItem: {
    height: 200,
    flex: 1,
    width: "50%",
    margin: 5,
    // overflow:'hidden',
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
  touch:{
    flex:1,
  }
});

export default CategoryGridItem;
