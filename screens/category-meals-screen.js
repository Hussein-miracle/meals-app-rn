import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import DefaultText from "../components/default-text/default-text";
import MealItem from "../components/meal-item/meal-item";
import MealList from "../components/meal-list/meal-list";

import Colors from "../constants/colors";
import { CATEGORIES, MEALS } from "../data/dummy";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const bgColor = navigation.getParam("bgColor");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  // const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  const displayedMeals = availableMeals.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const handlePress = () => {
    navigation.navigate({
      routeName: "MealDetail",
    });
  };
  const handleBack = () => {
    navigation.goBack();
  };

  if (displayedMeals.length <= 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>No Meals Found.Maybe check your filters?</DefaultText>
      </View>
    );
  }

  return (
    <MealList data={displayedMeals} navigation={navigation} bgColor={bgColor} />
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  return {
    headerTitle: selectedCategory.title.toUpperCase(),
  };
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
  btn: {
    backgroundColor: "green",
    marginVertical: 4,
  },
});

export default CategoryMealScreen;
