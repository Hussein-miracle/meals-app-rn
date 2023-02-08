import React, { useState , useEffect,useCallback,useMemo,memo} from "react";
import { StyleSheet, View, Text, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import {setFilters} from '../store/actions/meals.actions'

import CustomHeaderButton from "../components/header-button/header-button";

import Colors from "../constants/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.state}
        onValueChange={props.handleState}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVeg, setIsVeg] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const handleGlutChange = (n) => {
    setIsGlutenFree(n);
  };

  const handleVeganChange = (v) => {
    setIsVegan(v);
  };

  const handleLactose = (l) => {
    setIsLactoseFree(l);
  };
  const handleVegitarian = (vg) => {
    setIsVeg(vg);
  };



  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree:isGlutenFree,
      lactoseFree:isLactoseFree,
      vegan:isVegan,
      vegetarian:isVeg,
    }

    // console.log(appliedFilters,'filters saved');

    dispatch(setFilters(appliedFilters));
    
  },[isGlutenFree,isLactoseFree,isVeg,isVegan,dispatch])


  useEffect(() => {
    navigation.setParams({
      save:saveFilters,
    })
  },[saveFilters])



  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        handleState={handleGlutChange}
      />

      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        handleState={handleLactose}
      />

      <FilterSwitch
        label="Vegan"
        state={isVegan}
        handleState={handleVeganChange}
      />

      <FilterSwitch
        label="Vegitarian"
        state={isVeg}
        handleState={handleVegitarian}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  const { navigation } = navigationData;
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => {
      const onPress = () => {
        //console.log(navigation,'n prss');
        navigation.toggleDrawer();
      };
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            iconSize={22}
            onPress={onPress}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      const save = navigation.getParam('save');
      const handlePress = () => {
        // console.log('saving filters..hehe');
        save();
      };
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="menu"
            iconName="ios-save"
            iconSize={22}
            onPress={handlePress}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    margin: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
  },
});

export default  FiltersScreen;
