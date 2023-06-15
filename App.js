// import packages
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import the main components corresponding to stack screens
import HomeScreen from './HomeScreen';

// pages associated with label scanning
import ScanIngredients from './ScanIngredients';
import PreviewScreen from './PreviewScreen';
import ProductReportScreen from './ProductReportScreen';
import IngredientsScreen from './IngredientsScreen';
import IngredientDetailsScreen from './IngredientsDetailScreen';

// other pages accessible from home screen
import SearchIngredients from './SearchIngredients';
import RatingsExplained from './RatingsExplained';
import FAQs from './FAQs';
import RequestIngredient from './RequestIngredient';


// builds a navigator between the functions(pages)
const Stack = createStackNavigator();

// create a stack including all the screens created by Stack
function MyStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="GLOskin" component={HomeScreen} />
        <Stack.Screen name="Scan Ingredient Label" component={ScanIngredients} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
        <Stack.Screen name="Ingredients" component={IngredientsScreen}/>
        <Stack.Screen name="Ingredient Details" component={IngredientDetailsScreen}/>
        <Stack.Screen name="Product Report" component={ProductReportScreen} />
        <Stack.Screen name="Search Ingredients" component={SearchIngredients} />
        <Stack.Screen name="Ratings Explained" component={RatingsExplained} />
        <Stack.Screen name="Frequently Asked Questions" component={FAQs} />
        <Stack.Screen name="Request Ingredients" component={RequestIngredient} />
      </Stack.Navigator>
  );
}

// the app as a whole is built of these stacks, that need navigation ability to go back and forth
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}