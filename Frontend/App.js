import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import {Contants} from 'expo-constants';
import ClassA from './screens/ClassA';

export default function App() {
  return (
    <View style={styles.container}>
      <Home name = "anhis"/>
      <ClassA/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
