import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import styles from './styles';

function RatingsExplained({ navigation }) {
    return(
      <SafeAreaView style={styles.container3} >
      <ScrollView>
        <View>
        <Image // you need to edit the path for the image to match your laptop's
        style={styles.image}
        source={require('C:/Users/edres/app/Scoring.png')}/> 
        </View>
      </ScrollView> 
     </SafeAreaView>
    );
  }

  export default RatingsExplained;