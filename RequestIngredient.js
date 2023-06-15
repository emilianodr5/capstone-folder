import { useState} from 'react';
import { Alert, SafeAreaView } from 'react-native';
import SearchBar from './searchBar';

const RequestIngredient = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);
  
    const handleSubmit = () => { 
      setSearchPhrase('');
      setClicked(false);
      Alert.alert(
        'Thank you for your submission!',
        'We will have your ingredient in our database soon!'
      );
    };
  
    return (
      <SafeAreaView>
        <SearchBar
          clicked={clicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          setClicked={setClicked}
          additionalTextInputProps={{
            onSubmitEditing: handleSubmit,
            blurOnSubmit: true,
          }}
        />
      </SafeAreaView>
    );
  }

  export default RequestIngredient;