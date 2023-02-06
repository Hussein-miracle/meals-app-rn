import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  FlatList,
} from "react-native";

import MealItem from "../components/meal-item/meal-item";

import Colors from "../constants/colors";
import { CATEGORIES, MEALS } from "../data/dummy";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const bgColor = navigation.getParam("bgColor");

  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  //console.log(displayedMeals.length, "dpM");

  const renderMealItem = (itemData) => {
    const { item } = itemData;

    const handleSelectMeal = () => {

    }

    return <MealItem meal={item} handleSelectMeal={handleSelectMeal} bgColor={bgColor}/>;
  };

  const handlePress = () => {
    navigation.navigate({
      routeName: "MealDetail",
    });
  };
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        ...styles.screen,
        //  backgroundColor: bgColor
      }}
    >
      {/* <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Check details" onPress={handlePress} />
      <View style={styles.btn}>
        <Button title="Go Back" onPress={handleBack} />
      </View> */}

      <FlatList
        data={displayedMeals}
        keyExtractor={(m) => m.id}
        renderItem={renderMealItem}
        style={{width:'100%',padding:8}}
      />
    </View>
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
