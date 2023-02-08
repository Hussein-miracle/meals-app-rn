import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
  FlatList
} from "react-native";

import MealItem from "../meal-item/meal-item";

const MealList = ({ data,navigation ,bgColor}) => {
  const renderMealItem = (itemData) => {
    const { item } = itemData;

    const handleSelectMeal = () => {
      navigation.navigate({
        routeName:'MealDetail',
        params:{
          mealId:item.id,
          mealTitle:item.title,
        }
      })
    }

    return <MealItem meal={item} handleSelectMeal={handleSelectMeal} bgColor={bgColor}/>;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        style={{width:'100%',padding:8}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "gold",
    color: "#212121",
  },
});
export default MealList;
