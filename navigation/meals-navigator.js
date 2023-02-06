import * as React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createAppContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/native-stack";

import Colors from "../constants/colors";

import CategoriesScreen from "../screens/categories-screen";
import CategoryMealsScreen from "../screens/category-meals-screen";
import MealDetailScreen from "../screens/meal-detail-screen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      //   },
      //   HeaderTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
      // },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      //   },
      //   HeaderTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
      // },
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
      // HeaderTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
      HeaderTintColor: "#fff",
    },
  }
);

// MealDetailScreen.navigationOptions = {
//   headerStyle:{
//     backgroundColor:Platform.OS === 'android' ?  Colors.primaryColor : '',
//   },
//   HeaderTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
// }

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Categories"
//           component={CategoriesScreen}
//           options={{title: 'Welcome'}}
//         />
//         {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// console.log(MealsNavigator , 'mealsNav');

export default createAppContainer(MealsNavigator);
// export default MyStack;
