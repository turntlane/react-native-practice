/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  withTheme,
  ButtonGroup,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.sectionTitle}>Pit Boss Grills</Text>
      <View style={styles.sectionCenter}>
        <Image
          source={{
            uri: 'https://images.pitboss-grills.com/catalog/pitboss_2021/pitboss_2021_home_page/CTA/Homepage-Platinum-Series-NoBG.png',
          }}
          style={styles.imageCenter}
        />
        <TouchableOpacity onPress={() => Alert.alert('This is a test :)')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Shop Grills</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0583/2418/9372/products/PB3BGD2_Front_Closed.png?v=1628615353',
          }}
          style={styles.imageCenter}
        />
                <TouchableOpacity onPress={() => Alert.alert('This is a test :)')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Shop Griddles</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  imageCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '35%',
  },
  sectionTitle: {
    color: 'white',
    fontFamily: 'Roboto-Thin',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(66, 66, 66, 1.0)',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  sectionCenter: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#e75025',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: 'white',
    // fontFamily: 'Roboto-Thin',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
