import React, { useState, useEffect } from "react";
import { Alert, View, Image, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { readAsStringAsync, EncodingType } from "expo-file-system";
import styles from "./styles";
import { TouchableOpacity } from "react-native";

const PreviewScreen = ({route}) => {

    const {capturedPhoto} = route.params;
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    const removeTextAfterLastPeriod = (text) => {
      const lastPeriodIndex = text.lastIndexOf('.');
      if (lastPeriodIndex !== -1) {
        return text.slice(0, lastPeriodIndex + 1);
      }
      return text;
    }
  
    const processIngredients = (ingredientsString) => {
      const commonPhrases = ['caution', 'warning', 'directions', 'made in', 'net wt.'];
    
      // Remove text inside parentheses, square brackets, or curly braces
      const withoutBrackets = ingredientsString.replace(/(\[.*?\]|\(.*?\)|\{.*?\})/g, '');
    
      // Remove text after common phrases
      const withoutCommonPhrases = commonPhrases.reduce((acc, phrase) => {
        const index = acc.toLowerCase().indexOf(phrase);
        if (index !== -1) {
          return acc.slice(0, index);
        }
        return acc;
      }, withoutBrackets);
    
      // Remove text after the last period or line break
      const lastPeriod = withoutCommonPhrases.lastIndexOf('.');
      const lastLineBreak = withoutCommonPhrases.lastIndexOf('\n');
      const cutIndex = Math.max(lastPeriod, lastLineBreak);

      const finalIngredients = removeTextAfterLastPeriod(withoutCommonPhrases);
      
      return finalIngredients.split(/\s*,\s*/).map(ingredient => ingredient.trim());

    };  
  
    const processImageWithOCR = async (imagePath) => {
      setIsLoading(true);
      try {
        const base64 = await readAsStringAsync(imagePath, { encoding: EncodingType.Base64 });
        const response = await fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyB2WZ01ZlHINkw_W_KpGO4_2gRu3t97SB8', {
          method: 'POST',
          body: JSON.stringify({
            requests: [
              {
                image: { content: base64 },
                features: [{ type: 'TEXT_DETECTION' }],
              },
            ],
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        const result = await response.json();
    
        // Check if the OCR result exists before processing it
        if (result.responses[0] && result.responses[0].fullTextAnnotation) {
          const ocrResult = result.responses[0].fullTextAnnotation.text;
          const ingredientsIndex = ocrResult.toLowerCase().indexOf('ingredients:');
          const colonIndex = ocrResult.indexOf(': ', ingredientsIndex);
    
          if (ingredientsIndex === -1 || colonIndex === -1) {
            // "ingredients:" not found, prompt the user to try scanning again
            Alert.alert('Error', 'No ingredients found. Please try scanning again.');
          } else {
            const ingredientsString = ocrResult.slice(colonIndex + 1); // Extract the text after the colon
            const processedIngredients = processIngredients(ingredientsString);
            setIngredients(processedIngredients);
    
            // Navigate to the IngredientsScreen with the ingredients array
            navigation.navigate('Ingredients', { ingredients: processedIngredients });
          }
        } else {
          console.error('Error processing image with OCR: No text detected');
        }
      } catch (error) {
        console.error('Error processing image with OCR:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => { 
      // Automatically start processing the image with OCR when the component mounts
      if (capturedPhoto) {
        processImageWithOCR(capturedPhoto);
      }
    }, [capturedPhoto]);  
  
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: capturedPhoto }} style={styles.image} />
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Ingredients', { detectedIngredients: ingredients })}>
              <Text style={styles.button}>See Product Report</Text>
            </TouchableOpacity>
        )}
      </View>
    );
    
  }

  export default PreviewScreen;