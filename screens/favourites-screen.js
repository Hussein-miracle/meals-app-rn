import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import CustomHeaderButton from "../components/header-button/header-button";
import MealList from "../components/meal-list/meal-list";

import { MEALS } from "../data/dummy";
import Colors from "../constants/colors";

const FavouritesScreen = ({ navigation }) => {
  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);
  if (favouriteMeals.length <= 0) {
    return (
      <View style={styles.screen}>
        <Text>No Favourite meals found.Start adding some!.</Text>
      </View>
    );
  }
  return (
    <MealList
      data={favouriteMeals}
      navigation={navigation}
      bgColor={Colors.accent}
    />
  );
};

FavouritesScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  return {
    headerTitle: "Your Favourites",
    headerLeft: () => {
      const onPress = () => {
        //console.log(navigation,'n prss');
        navigation.toggleDrawer();
      };
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item iconName="menu" iconSize={22} onPress={onPress} />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content:{

  }
});

export default FavouritesScreen;
