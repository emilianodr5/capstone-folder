import { Alert, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ingredientDatabase from './ingredientDatabase';
import Separator from './separator';
import { useCallback } from 'react';

const IngredientsScreen = ({ route }) => {
  const { ingredients = [] } = route.params;
  const navigation = useNavigation();

  const handleIngredientPress = useCallback((ingredientName) => {
    if (ingredientName && typeof ingredientName === 'string') {
      const foundIngredient = ingredientDatabase.find((item) => item.IngName.toLowerCase() === ingredientName.toLowerCase());

      if (foundIngredient) {
        console.log('Found ingredient:', foundIngredient)
        navigation.navigate('Ingredient Details', { ingredient: foundIngredient });
      } else {
        Alert.alert('More information about this ingredient is coming soon!');
      }
    } else {
      console.error('Invalid ingredient name:', ingredientName);
    }
  }, [navigation]); 

  const openProductReport = () => {
    navigation.navigate('Product Report', { detectedIngredients: ingredients })
  }

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#f0f0f0',
          paddingVertical: 12.5,
          paddingHorizontal: 15,
          alignItems: 'center',
          marginBottom: 10,
        }}
        onPress={openProductReport} >
        <Text style={{ fontSize: 20, color: '#007BFF' }}>Open Product Report</Text>
      </TouchableOpacity>
      <ScrollView>
        {ingredients.map((ingredient, index) => (
          <View key={index}>
            <TouchableOpacity style={{
              backgroundColor: '#f0f0f0',
              paddingVertical: 22.5,
              paddingHorizontal: 15,
              alignItems: 'center',
            }} onPress={() => handleIngredientPress(ingredient)}>
              <Text style={{ fontSize: 20 }}>{ingredient}</Text>
            </TouchableOpacity>
            {index < ingredients.length - 1 && <Separator />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default IngredientsScreen;
