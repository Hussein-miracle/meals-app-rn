import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  Platform,
  FlatList,
} from "react-native";

import Colors from "../constants/colors";
import { CATEGORIES } from "../data/dummy";

import CategoryGridItem from "../components/category-grid-item/category-grid-item";

const CategoriesScreen = ({ navigation }) => {

  const renderGridItem = (itemData) => {
    const data = itemData.item;

    const handlePress = () => {

      navigation.navigate({
        routeName: "CategoryMeals",
        params: {
          categoryId: data.id,
          bgColor:data.color,
        },
      });

    };

    return (
      <CategoryGridItem onSelect={handlePress} data={data}/>
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    color: "#fff",
  },
  text: {
    color: "yellow",
    marginVertical: 4,
  },
  gridItem: {
    // height:30,
    // width:'100%',
    height:'100%',
    flex: 1,
    // margin: 15,
    padding: 8,
    // height: 200,
    borderRadius: 6,
  },
  listItem: {
    height: 200,
    flex: 1,
    margin: 10,
  },
});

export default CategoriesScreen;
