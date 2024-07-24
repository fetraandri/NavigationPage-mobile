import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import RedirectScreen from './RedirectScreen';
import LoginScreen from './LoginScreen';

type ScreenName = 'Home' | 'Details' | 'Redirect' | 'Login';

const Navigation: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('Login');

  const navigateTo = (screen: ScreenName) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' && <HomeScreen navigateTo={navigateTo} />}
      {currentScreen === 'Details' && <DetailsScreen navigateTo={navigateTo} />}
      {currentScreen === 'Redirect' && <RedirectScreen navigateTo={navigateTo} />}
      {currentScreen === 'Login' && <LoginScreen navigateTo={navigateTo} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Navigation;
