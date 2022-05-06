import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppBar} from '../../components/AppBar';
import {
  fetchForwardLimitSwitchHigh,
  fetchSignalData,
  fetchForwardLimitSwitchMed,
  fetchMotor,
  fetchMotorHighForward,
  fetchMotorHighReverse,
  fetchMotorMedForward,
  fetchMotorMedReverse,
  fetchPower,
  fetchReverseLimitSwitchHigh,
  fetchReverseLimitSwitchMed,
  fetchSpeed,
  fetchInverter,
  fetchRun,
} from '../../redux/actions/index';
import {styles} from './styles';
import {LoadingIndicator} from '../../components/LoadingIndicator';

export const SignalScreen = ({navigation}) => {
  const signalsX = useSelector(state => state.signal.signalX);
  const signalsY = useSelector(state => state.signal.signalY);
  const {
    forwardLimitSwitchHigh,
    forwardLimitSwitchMed,
    motor,
    motorHighForward,
    motorHighReverse,
    motorMedForward,
    motorMedReverse,
    power,
    reverseLimitSwitchHigh,
    reverseLimitSwitchMed,
    speed,
    inverter,
    run,
  } = useSelector(state => state.signal);
  const signal = useSelector(state => state.signal.signal);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [xSignal, setXSignal] = useState([]);
  const [ySignal, setYSignal] = useState([]);

  useEffect(() => {
    dispatch(fetchSignalData());

    dispatch(fetchForwardLimitSwitchHigh());
    dispatch(fetchForwardLimitSwitchMed());
    dispatch(fetchMotor());
    dispatch(fetchMotorHighForward());
    dispatch(fetchMotorHighReverse());
    dispatch(fetchMotorMedForward());
    dispatch(fetchMotorMedReverse());
    dispatch(fetchPower());
    dispatch(fetchReverseLimitSwitchHigh());
    dispatch(fetchReverseLimitSwitchMed());
    dispatch(fetchSpeed());
    dispatch(fetchInverter());
    dispatch(fetchRun());
  }, []);

  useEffect(() => {
    console.log(xSignal);
    if (
      forwardLimitSwitchHigh != null &&
      forwardLimitSwitchMed != null &&
      reverseLimitSwitchHigh != null &&
      reverseLimitSwitchMed != null &&
      motor != null &&
      power != null &&
      motorHighForward != null &&
      motorHighReverse != null &&
      motorMedForward != null &&
      motorMedReverse != null &&
      speed != null &&
      inverter != null &&
      run != null
    ) {
      setXSignal([
        forwardLimitSwitchHigh,
        forwardLimitSwitchMed,
        reverseLimitSwitchHigh,
        reverseLimitSwitchMed,
        speed,
        inverter,
        run,
      ]);
      setYSignal([
        motor,
        power,
        motorHighForward,
        motorHighReverse,
        motorMedForward,
        motorMedReverse,
      ]);
      setLoading(false);
    }
  }, [
    forwardLimitSwitchHigh,
    forwardLimitSwitchMed,
    motor,
    power,
    motorHighForward,
    motorHighReverse,
    motorMedForward,
    motorMedReverse,
    reverseLimitSwitchHigh,
    reverseLimitSwitchMed,
    speed,
    inverter,
    run,
  ]);

  useEffect(() => {
    if (signal != null) {
      setLoading(false);
      let result = Object.keys(signal)
        .map(key => {
          return {
            name: key,
            status: signal[key],
          };
        })
        .sort((a, b) => a.name > b.name);
      console.log(result);
      setData(result);
    }
  }, [signal]);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingVertical: 10,
          paddingHorizontal: 20,
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 30}}>{item['Address']}</Text>
        <Ionicons
          name="radio-button-on-outline"
          size={50}
          color={item['Value'] === 'ON' ? '#3BB143' : '#EB5757'}
        />
      </View>
    );
  };

  const EmptyComponent = () => (
    <View style={styles.emptyList}>
      <Text>No sensor</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppBar
        leftButton="chevron-back-outline"
        title="Tín hiệu"
        action={() => navigation.goBack()}
      />
      <>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <View
            style={{
              paddingHorizontal: 10,
              paddingBottom: 20,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FlatList
              data={xSignal.sort((a, b) => a.Address > b.Address)}
              renderItem={renderItem}
              keyExtractor={item => item.Address}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyComponent />}
              contentContainerStyle={{
                justifyContent: 'space-around',
                height: '90%',
              }}
            />

            <FlatList
              data={ySignal.sort((a, b) => a.Address > b.Address)}
              renderItem={renderItem}
              keyExtractor={item => item.Address}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyComponent />}
              contentContainerStyle={{
                justifyContent: 'space-around',
                height: '90%',
              }}
            />
            {/* <FlatList
              data={data.slice(0, 8)}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyComponent />}
              contentContainerStyle={{
                justifyContent: 'space-around',
                height: '90%',
              }}
            /> */}
          </View>
        )}
      </>
    </View>
  );
};
