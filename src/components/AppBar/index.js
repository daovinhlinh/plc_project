import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export const AppBar = props => {
  const {title, leftButton, action} = props;

  return (
    <View style={styles.rowContainer}>
      <View style={styles.leftButton}>
        {leftButton != null && (
          <TouchableOpacity style={styles.rowTitle} onPress={action}>
            <Ionicons name={leftButton} size={25} />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={{width: '25%', textAlign: 'center'}}></Text>
    </View>
  );
};
