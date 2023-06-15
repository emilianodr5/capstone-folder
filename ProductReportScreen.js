import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ingredientDatabase from './ingredientDatabase';
import IngredientPieChart from './ingredientPieChart';
import styles from './styles'; // Import your styles

const ProductReportScreen = ({ route }) => {

  const {detectedIngredients} = route.params;
  const navigation = useNavigation();

  const countIngredientCategories = (detectedIngredients = [], ingredientDatabase) => {
    let good = 0;
    let average = 0;
    let unsafe = 0;
  
    detectedIngredients.forEach((ingredientName) => {
      const foundIngredient = ingredientDatabase.find(
        (item) => item.IngName.toLowerCase() === ingredientName.toLowerCase()
      );
  
      if (foundIngredient) {
        switch (foundIngredient.Category.toLowerCase()) {
          case 'good':
            good++;
            break;
          case 'average':
            average++;
            break;
          case 'unsafe':
            unsafe++;
            break;
          default:
            console.log('Unexpected category:', foundIngredient.Category);
        }
      }
    });
  
    return { good, average, unsafe };
  };

  const ingredientCounts = countIngredientCategories(detectedIngredients, ingredientDatabase);

  const getCategoryWeight = (category) => {
    console.log('Category input:', category); // Log the category input
    const lowerCategory = category.toLowerCase(); // Convert category to lowercase
    switch (lowerCategory) {
      case 'unsafe':
        return 1.5;
      case 'average':
        return 0.25;
      case 'ineffective':
        return 0.1;
      case 'good':
        return 0;
      default:
        console.log('Unexpected category:', category); // Log unexpected category values
        return 0;
    }
  };

  console.log('Ingredient Database length:', ingredientDatabase.length);
  console.log('Detected Ingredients length:', detectedIngredients.length);
  
  const calculateProductScore = (detectedIngredients = [], ingredientDatabase) => {
    let weightSum = 0;
    let foundIngredientsCount = 0;
  
    detectedIngredients.forEach((ingredientName) => {
      const foundIngredient = ingredientDatabase.find(
        (item) => item.IngName.toLowerCase() === ingredientName.toLowerCase()
      );
  
      if (foundIngredient) {
        foundIngredientsCount++;
        const categoryWeight = getCategoryWeight(foundIngredient.Category);
        weightSum += categoryWeight;
  
        // Log the ingredient details for debugging purposes
        console.log('Ingredient:', foundIngredient.IngName, 'Category:', foundIngredient.Category, 'Weight:', categoryWeight);
      } else {
        console.log('Ingredient not found:', ingredientName);
      }
    });
  
    if (foundIngredientsCount === 0) {
      return 'N/A';
    }
  
    const score = 1 - weightSum / foundIngredientsCount;
    return (score * 100).toFixed(2);
  };
  
  console.log('Detected Ingredients:', detectedIngredients);
 
  const productScore = calculateProductScore(detectedIngredients, ingredientDatabase);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Product Score: {productScore}</Text>
      <IngredientPieChart ingredientCounts={ingredientCounts}/>
    </View>
  );
};

export default ProductReportScreen;