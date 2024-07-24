import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconProps } from 'react-native-vector-icons/Icon';

const TabBarIcon = ({ name, color, size }: IconProps) => {
  return <Ionicons name={name} size={size} color={color} style={{ marginBottom: -3 }} />;
};

export default TabBarIcon;
