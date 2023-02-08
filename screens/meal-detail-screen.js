import React,{useEffect,useCallback} from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from "react-native";
import { useSelector , useDispatch} from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { toggleFavourite } from "../store/actions/meals.actions";
import CustomHeaderButton from "../components/header-button/header-button";
import DefaultText from "../components/default-text/default-text";


const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const mealId = navigation.getParam("mealId");
  const meals = useSelector((state) => state.meals.meals);
  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);
  const currentMealIsFav = favouriteMeals.some((m) => mealId  === m.id);
  const meal = meals.find((meal) => meal.id === mealId);

  const toggleMeal = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  },[mealId,dispatch])


  useEffect(() => {
    navigation.setParams({
      toggleMeal,
      isFav:currentMealIsFav,
    })
  },[toggleMeal])
  
  useEffect(() => {
    navigation.setParams({
      isFav:currentMealIsFav,
    })
  },[currentMealIsFav])

  const handlePress = () => {
    navigation.popToTop();
  };

  return (
    <ScrollView style={{ paddingBottom: 10 }}>
      <Image source={{ uri: meal.imgUrl }} style={styles.image} />
      <View
        style={{
          ...styles.details,
        }}
      >
        <DefaultText>{meal.duration} mins</DefaultText>
        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ingredient, index) => {
        return (
          <ListItem key={`${ingredient}-${index}`}>
            {index + 1}. {ingredient}
          </ListItem>
        );
      })}
      {/* <Text>List of Ingredients...</Text> */}
      <Text style={styles.title}>Steps</Text>
      {/* <Text>List of Steps...</Text> */}
      {meal.steps.map((step, index) => {
        return (
          <ListItem key={`${step}--${index}`}>
            {index + 1}. {step}
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");

  const isFav = navigationData.navigation.getParam('isFav');

  const toggleMeal = navigationData.navigation.getParam('toggleMeal');

  const handlePressBtn = () => {
    toggleMeal();
  };

  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favourite"
            iconName={isFav ?  'star' :"star-outline"}
            onPress={handlePressBtn}
          />
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
  details: {
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    textDecorationLine:'underline',
  },
  image: {
    width: "100%",
    height: 200,
  },
  listItem: {
    padding: 10,
    marginHorizontal: 6,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
  },
});

export default MealDetailScreen;
