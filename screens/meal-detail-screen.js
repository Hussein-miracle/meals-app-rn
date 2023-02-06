import React from 'react';
import { StyleSheet,View,Text ,Button} from 'react-native';

const MealDetailScreen = ({navigation}) => {
  const handlePress = () => {
    navigation.popToTop();
  }
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button title='Go Home' onPress={handlePress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})



export default MealDetailScreen;

