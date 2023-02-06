import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";

const MealItem = ({ meal, handleSelectMeal,bgColor }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={handleSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{uri:meal.imgUrl}} style={styles.bgImage}/>
            <Text>{meal.title}</Text>
          </View>

          <View style={{ ...styles.mealRow, ...styles.mealDetail,backgroundColor:bgColor }}>
            <Text>{meal.duration} mins</Text>
            <Text>{meal.complexity.toUpperCase()}</Text>
            <Text>{meal.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    // flex: 1,
    width: "100%",
    backgroundColor: "#ccc",
    paddingTop: 4,
    marginVertical: 10,
    borderRadius:8,
    overflow:'hidden',
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%",
    paddingHorizontal:2,
  },
  mealDetail: {
    paddingHorizontal:8,
    justifyContent:'space-between',
    // backgroundColor:'#ff2192',
    width:'100%',
    color:'#fff',
  },
  bgImage:{
    width:'100%',
    height:'100%',
  }
});
export default MealItem;
