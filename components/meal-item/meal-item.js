import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import DefaultText from "../default-text/default-text";

const MealItem = ({ meal, handleSelectMeal, bgColor }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={handleSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: meal.imgUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {meal.title}
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              ...styles.mealRow,
              ...styles.mealDetail,
              backgroundColor: bgColor,
            }}
          >
            <DefaultText>{meal.duration} mins</DefaultText>
            <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    marginVertical: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%",
  },
  mealDetail: {
    paddingHorizontal: 8,
    justifyContent: "space-between",
    width: "100%",
    color: "#fff",
    alignItems:'center',
    // height:'15%',
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent:'flex-end',
  },
  title: {
    color: "#fff",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.57)",
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
});
export default MealItem;
