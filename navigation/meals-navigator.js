import * as React from "react";
import { Platform } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";


import { createDrawerNavigator } from "react-navigation-drawer";



import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";

import CategoriesScreen from "../screens/categories-screen";
import CategoryMealsScreen from "../screens/category-meals-screen";
import MealDetailScreen from "../screens/meal-detail-screen";
import FavouritesScreen from "../screens/favourites-screen";
import FiltersScreen from '../screens/filters-screen';


const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:  Platform.OS === "android" ? "#fff" : Colors.primaryColor,
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: {},
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:  Platform.OS === "android" ? "#fff" : Colors.primaryColor,
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      // tabBarLabel:'M',
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favourites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
};

const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        // shifting:true,
        barStyle:{
          // backgroundColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeBackgroundColor: Colors.primaryColor,
          activeTintColor: Colors.accentColor,
          inactiveTintColor: Colors.accent,
        },
      });


const FilterNavigator = createStackNavigator({
  Filters:{
    screen:FiltersScreen,
  }
},  {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor:  Platform.OS === "android" ? "#fff" : Colors.primaryColor,
  },
})


const MainNavigator = createDrawerNavigator({
  MealsFav:{
    screen:MealsTabNavigator,
  },
  Filters:{
    screen:FilterNavigator,
  }
},{
  hideStatusBar:true,
  statusBarAnimation:'fade',
  contentOptions:{
    activeTintColor:Colors.accentColor,
    labelStyle:{
      fontFamily:'open-sans-bold',
    }
  }
})
export default createAppContainer(MainNavigator);
