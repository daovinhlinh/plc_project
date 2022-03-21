import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AuthContext} from '../../navigation/AuthProvider';

import {CustomButton} from '../../components/CustomButton';
import {styles} from './styles';
import {fetchUserData} from '../../redux/actions/index';

export const ProfileScreen = () => {
  const {user, logOut} = useContext(AuthContext);
  const userData = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
    return () => {
      dispatch({type: 'USER_GET_INFO_CLEAR'});
    };
  }, []);

  if (userData == null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Welcome {userData.name}</Text>
      <CustomButton
        title="Log out"
        onPress={logOut}
        backgroundColor={'red'}
        textColor="#fff"
      />
    </View>
  );
};
