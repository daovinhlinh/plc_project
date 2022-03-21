import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1771E6" />
    </View>
  );
};
