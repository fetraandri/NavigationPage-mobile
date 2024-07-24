import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from '../styles/DetailsScreenStyles';

export default function DetailsScreen({ navigateTo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Button title="Back to Home" onPress={() => navigateTo('Home')} />
    </View>
  );
}


