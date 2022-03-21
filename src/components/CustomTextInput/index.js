import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export const CustomTextInput = props => {
  const {title, onPress, isRequire, hint, value, isPassword, onTextChange} =
    props;
  const [show, setShow] = useState(false);

  return (
    <View style={{flexDirection: 'column'}}>
      {title != null && (
        <View style={styles.rowTitle}>
          <Text allowFontScaling={false} style={styles.title}>
            {title}
          </Text>
          {isRequire && (
            <Text allowFontScaling={false} style={styles.textRequire}>
              {' '}
              (*)
            </Text>
          )}
        </View>
      )}
      <View style={styles.rowContainer}>
        <TextInput
          placeholder="#aaa"
          allowFontScaling={false}
          placeholder={hint}
          value={value}
          secureTextEntry={isPassword === true ? !show : isPassword}
          onChangeText={onTextChange}
          style={styles.textInput}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShow(!show)}>
            <Ionicons
              name={show ? 'eye-off-outline' : 'eye-outline'}
              size={23}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
