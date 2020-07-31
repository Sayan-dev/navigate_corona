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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootStack from './src/routes/stack';
import { NavigationContainer } from '@react-navigation/native';



const App= () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer >
          <RootStack/>
        </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
