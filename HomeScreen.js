import { SafeAreaView, View, Button, Text } from 'react-native';
import styles from './styles';
import Separator from './separator';

// home screen
const HomeScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
      <View>
        <Button // button layout: title, text color, action on press
          title="Scan an Ingredient Label"
          color="#AA336A"
          onPress={() => navigation.navigate('Scan Ingredient Label')} 
          // opens the stack (see createStackNavigator) named "Scan Ingredient Label",
          // which corresponds to the "component" 'ScanIngredients' as defined in MyStack 
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Look up an ingredient"
          color="#800020"
          onPress={() => navigation.navigate('Search Ingredients')} // opens the 'Search Ingredients' stack corresponding to the SearchIngredients() function
        />
      </View>
      <Separator />
      <View>
        <Button
          title="How Our Rating System Works"
          color="purple"
          onPress={() => navigation.navigate('Ratings Explained')} // same as last button
        />
      </View>
      <Separator />
      <View> 
          <Button
            title="FAQs"
            color="#702963"
            onPress={() => navigation.navigate('Frequently Asked Questions')}
          />
      </View>
      <Separator />
      <View>
          <Button
            title="Request an Ingredient"
            color="#301934"
            onPress={() => navigation.navigate('Request Ingredients')}
          />
      </View>
      <Separator/>
      <View>
          <Button
            title=""
            color="#301934"
            onPress={() => navigation.navigate('Request Ingredients')}
          />
      </View>
      <View style={{ padding: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 16, textAlign: 'justify' }}> 
          This app is for general informational purposes only and is not intended
          or implied to be a substitute for professional medical advice,
          diagnosis or treatment. Always seek the advice of a qualified
          healthcare professional for any specific questions you may have
          regarding medical history or conditions.
        </Text>
      </View>
    </SafeAreaView>
    );
  }

export default HomeScreen;