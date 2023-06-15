import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width } = Dimensions.get('window');

// css formatting code
// format name: {
  // arguments: params,
//},
const styles = StyleSheet.create({
    headerBox: {
      backgroundColor: '#f0f0f0',
      padding: 15,
      alignItems: 'center',
      marginBottom: 10,
      },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      justifyContent: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
      container2: {
        flex: 1,
        justifyContent: 'center',
      },
        container3: {
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      container4: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      container5: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
      },
      title: {
        textAlign: 'center',
        marginVertical: 8,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      camera: {
        flex: 1,
      },
      button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
      },
      searchContainer: {
        margin: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "80%",
      },
      searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
      },
      searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },
      description: {
        fontSize: width * 0.09,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
      },
      cancel: {
        fontSize: width * 0.05,
        textAlign: 'center',
        width: '70%',
        color: 'white',
      },
      scrollView: {
        backgroundColor: 'transparent',
        width: '100%',
      },
      image: {
        height: 1000,
        width: width * 0.9,
      },
      itemContainer: {
        flexDirection: 'row',
        marginBottom: 8,
      },
      itemKey: {
        fontWeight: 'bold',
        marginRight: 8,
      },
      itemValue: {
        flex: 1,
      },
      link: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 4,
      },
    });

export default styles;