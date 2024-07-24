import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../styles/RedirectScreenStyles';


export default function RedirectScreen({ navigateTo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redirect Screen</Text>
      <Button title="Back to Home" onPress={() => navigateTo('Home')} />
    </View>
  );
}


