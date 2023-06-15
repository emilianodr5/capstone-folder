import * as React from 'react';
import { ActivityIndicator, StyleSheet, Button, SafeAreaView, ScrollView, View, Text, FlatList, TouchableOpacity, TextInput, Keyboard, Image, Dimensions, Alert, Icon } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";
import styles from './styles';

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked, additionalTextInputProps}) => {
    return (
      <View style={styles.searchContainer}>
        <View
          style={
            clicked
              ? styles.searchBar__clicked
              : styles.searchBar__unclicked
          }
        >
          {/* search Icon */}
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={(text) => setSearchPhrase(text)} 
            onFocus={() => {
              setClicked(true);
            }}
            {...additionalTextInputProps}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {clicked && (
            <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                setSearchPhrase("")
            }}/>
          )}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {clicked && (
          <View>
            <Button title="Cancel" onPress={() => { Keyboard.dismiss(); setClicked(false);}}>
            </Button>
          </View>
        )}
      </View>
    );
  }; // opens a search bar

  export default SearchBar;