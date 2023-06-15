import { SafeAreaView, View, Button, Alert, ScrollView } from 'react-native';
import styles from "./styles";
import Separator from './separator';

function FAQs({}) {
    return(
      <SafeAreaView style={styles.container5} >
      <ScrollView style={styles.scrollView} >
      <View>
      <Button
        title="What do I do if an ingredient is not recognized by the app?"
        color="#353935"
        onPress={() => Alert.alert("Please visit our 'Request an Ingredient' page and submit your ingredient so we can add it to the app!")} />
      </View>
      <Separator/>
      <View>
        <Button
        title="Where can I find links to your sources?"
        color="#353935"
        onPress={() => Alert.alert("At the bottom of each ingredient summary you'll find some links to peer-reviewed, scientific articles. Simply scan a label or type an ingredient to find this information.")} />
      </View>
      <Separator/>
      <View>
        <Button
        title="Why did my product receive a low score?" 
        color="#353935"
        onPress={() => Alert.alert("Please visit the 'How our rating system works' page.")} />
      </View>
      <Separator/>
      <View>
        <Button
        title="What sets you apart from similar apps on the market?" 
        color="#353935"
        onPress={() => Alert.alert("Our app provides users with objective reports based on scientific data! We are the only app on the market to use only transparent and trustworthy sources, so users know exactly what they're putting on their skin.")} />
      </View>
      <Separator />
      <View>
        <Button
        title="Why won't the hyperlinks work?" 
        color="#353935"
        onPress={() => Alert.alert("Make sure your device is connected to the internet and you have the latest update of our app installed.")} />
      </View>
      <Separator />
      <View>
        <Button
        title="How does the app pick what ingredients are good or bad?" 
        color="#353935"
        onPress={() => Alert.alert("Please visit the 'How our rating system works' page.")} />
      </View>
      <Separator />
      <View>
        <Button
        title="What is the difference between a good and average ingredient?" 
        color="#353935"
        onPress={() => Alert.alert("Please visit the 'How our rating system works' page.")} />
      </View>
     </ScrollView>
     </SafeAreaView>
    );
  };

  export default FAQs;