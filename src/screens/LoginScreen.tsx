// LoginScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';

type LoginScreenProps = {
  navigateTo: (screen: 'Home' | 'Details' | 'Redirect' | 'Login') => void;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Connexion réussie');
      navigateTo('Home');
    } else {
      Alert.alert('Veuillez entrer un e-mail et un mot de passe');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        containerStyle={styles.input}
      />
      <Input
        placeholder='Mot de passe'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        containerStyle={styles.input}
      />
      <Button
        title='Se connecter'
        onPress={handleLogin}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
