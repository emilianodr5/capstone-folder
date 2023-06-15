import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

const IngredientDetailsScreen = ({ route }) => {
  const { ingredient } = route.params;
  
  const renderItem = ({ key, value }) => {
    if (key === 'Links') {
      const links = value.split(', ');
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.itemKey}>{key}:</Text>
          <View style={styles.itemValue}>
            {links.map((link, index) => (
              <TouchableOpacity key={index} onPress={() => Linking.openURL(link)}>
                <Text style={styles.link}>{link}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.itemKey}>{key}:</Text>
          <Text style={styles.itemValue}>{value}</Text>
        </View>
      );
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(ingredient).map(([key, value]) => renderItem({ key, value }))}
    </ScrollView>
  );
};

export default IngredientDetailsScreen;