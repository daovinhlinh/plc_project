import React, {useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer, Avatar, Title} from 'react-native-paper';
import {AuthContext} from '../../navigation/AuthProvider';
import {fetchUserData} from '../../redux/actions/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export const CustomDrawer = props => {
  const {logOut} = useContext(AuthContext);
  // const {logOut} = React.useContext(AuthContext);
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

  const homeNavigate = () => {
    props.navigation.navigate('Home');
  };

  const signalNavigate = () => {
    props.navigation.navigate('Signal');
  };

  const infoNavigate = () => {
    props.navigation.navigate('Info');
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>{userData.name}</Title>
                {/* <Title style={styles.title}>123</Title> */}
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons name="home-outline" color={color} size={size} />
              )}
              label="Trang chủ"
              onPress={homeNavigate}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons
                  name="hardware-chip-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Tín hiệu"
              onPress={signalNavigate}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons
                  name="alert-circle-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Thông tin"
              onPress={infoNavigate}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Ionicons name="log-out-outline" size={24} color="#acacac" />
          )}
          label="Sign Out"
          onPress={logOut}
        />
      </Drawer.Section>
    </View>
  );
};
