import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

// import {styles} from './styles';
export const CustomButton = props => {
  const {title, onPress, backgroundColor, textColor} = props;

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: backgroundColor}]}
      onPress={onPress}
      {...props}>
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 6,
    marginTop: 10,
    marginBottom: 5,
  },
  title: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
});
