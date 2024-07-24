import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../styles/HomeScreenStyles';


export default function HomeScreen({ navigateTo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world</Text>
      <Button title="Go to Details" onPress={() => navigateTo('Details')} />
      <Button title="Go to Redirect" onPress={() => navigateTo('Redirect')} />
    </View>
  );
}

