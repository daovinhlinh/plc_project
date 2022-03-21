import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CustomButton} from '../../components/CustomButton';
import {CustomTextInput} from '../../components/CustomTextInput';
import {AuthContext} from '../../navigation/AuthProvider';
import {styles} from './styles';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login, googleLogin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.header}>
        PLC Controller
      </Text>
      <View style={styles.formContainer}>
        <CustomTextInput title="Email" onTextChange={text => setEmail(text)} />
        <CustomTextInput
          title="Password"
          isPassword
          onTextChange={text => setPassword(text)}
        />
      </View>
      <CustomButton
        backgroundColor={'#1771E6'}
        textColor="#fff"
        title="Login"
        onPress={() => {
          if (email === '' || password === '') {
            alert('Please enter email and password');
          } else {
            login(email, password);
          }
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>Don't have an account? Create here</Text>
      </TouchableOpacity>
    </View>
  );
};
