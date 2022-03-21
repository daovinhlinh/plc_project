import React, {useState, useContext} from 'react';
import {Text, View} from 'react-native';
import {CustomTextInput} from '../../components/CustomTextInput';
import {CustomButton} from '../../components/CustomButton';
import {AuthContext} from '../../navigation/AuthProvider';
import {AppBar} from '../../components/AppBar';
import {styles} from './styles.js';

export const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AppBar
        leftButton="arrow-back-outline"
        title="Register"
        action={() => navigation.goBack()}
      />
      <View style={styles.form}>
        <View style={styles.formContainer}>
          <CustomTextInput
            title="Name"
            onTextChange={text => setName(text)}
            isRequire
          />
          <CustomTextInput
            title="Email"
            onTextChange={text => setEmail(text)}
            isRequire
          />
          <CustomTextInput
            title="Password"
            isPassword
            onTextChange={text => setPassword(text)}
            isRequire
          />
        </View>
        <CustomButton
          backgroundColor={'#1771E6'}
          textColor="#fff"
          title="Register"
          onPress={() => {
            if (!name || !email || !password) {
              alert('Please fill in form');
            } else {
              register(email, password, name);
            }
          }}
        />
      </View>
    </View>
  );
};
