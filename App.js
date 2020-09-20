import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Search from './components/Search';
import Navigation from './navigations/Navigation';
import {Provider} from 'react-redux';
import Store from './Store/configureStore';

export default function App() {
  let x = 1;
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
