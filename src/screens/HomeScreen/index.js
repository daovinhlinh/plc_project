import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {LoadingIndicator} from '../../components/LoadingIndicator';
import {fetchSensorData} from '../../redux/actions/index';
import {styles} from './styles';

export const HomeScreen = ({navigation}) => {
  const sensors = useSelector(state => state.sensor.currentSensor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSensorData());
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View
        style={[
          styles.itemName,
          item.status === 'off' ? styles.offStatus : styles.onStatus,
        ]}>
        <Text style={styles.sensorName}>{item.name}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.itemTitle}>Address:</Text>
        <Text style={styles.itemText}>{item.address}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.itemTitle}>Status:</Text>
        <Text style={styles.itemText}>{item.status}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Control', {id: item.id})}>
        <Text style={styles.buttonText}>View Info</Text>
        <Feather name="chevrons-right" size={23} />
      </TouchableOpacity>
    </View>
  );

  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>PLC Controler</Text>
    </View>
  );

  const EmptyComponent = () => (
    <View style={styles.emptyList}>
      <Text>No sensor</Text>
    </View>
  );

  if (sensors == null) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          paddingBottom: 10,
        }}>
        <FlatList
          data={sensors}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={<ListHeader />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyComponent />}
        />
      </View>
    </View>
  );
};
