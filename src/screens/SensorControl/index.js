import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  fetchSensorData,
  fetchLowSensor,
  fetchMeidumSensor,
  fetchHighSensor,
  fetchSignalData,
  resetSensorValue,
  updateHighSensor,
  updateLowSensor,
  updateMediumSensor,
  updateSensorStatusRealtime,
  fetchMediumSensor,
  fetchPower,
  powerOff,
  powerOn,
} from '../../redux/actions/index';
import {LoadingIndicator} from '../../components/LoadingIndicator';
import {AppBar} from '../../components/AppBar';

export const SensorControl = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [run, setRun] = useState(false);
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);

  const sensors = useSelector(state => state.sensor.currentSensor);
  const power = useSelector(state => state.sensor.power);
  const sensorHigh = useSelector(state => state.sensor.sensorHigh);
  const sensorMedium = useSelector(state => state.sensor.sensorMedium);
  const sensorLow = useSelector(state => state.sensor.sensorLow);

  useEffect(() => {
    dispatch(fetchSensorData());
    dispatch(fetchSignalData());
    dispatch(fetchHighSensor());
    dispatch(fetchMediumSensor());
    dispatch(fetchLowSensor());
    dispatch(fetchPower());
  }, []);

  useEffect(() => {
    if (sensorHigh == null) {
      dispatch(fetchHighSensor());
    }
    if (sensorMedium == null) {
      dispatch(fetchMediumSensor());
    }
    if (sensorLow == null) {
      dispatch(fetchLowSensor());
    }

    if (
      sensorHigh != null &&
      sensorMedium != null &&
      sensorLow != null &&
      power != null
    ) {
      setLoading(false);
    }
  }, [sensorHigh, sensorMedium, sensorLow, power]);

  const resetSensor = () => {
    dispatch(resetSensorValue('LeoJh7LBzuxaVA4kf1rT'));
  };

  // useEffect(() => {
  //   if (sensorHigh != null && sensorMedium != null && sensorLow != null) {
  //     console.log(sensorHigh);
  //     if (signal['x1'] === 'ON' && signal['x2'] === 'OFF') {
  //       setRun(true);
  //     } else if (signal['x2'] === 'ON' && signal['x1'] === 'OFF') {
  //       setRun(false);
  //     }
  //     setLoading(false);
  //   }
  // }, [sensorHigh, sensorMedium, sensorLow]);

  useEffect(() => {
    if (!run) {
      clearInterval(timer);
    } else {
      const intervalTimer = setInterval(() => {
        let number = Math.floor(Math.random() * 3 + 1);
        switch (number) {
          case 1:
            dispatch(updateHighSensor());
            return true;
          case 2:
            dispatch(updateMediumSensor());
            return true;
          case 3:
            dispatch(updateLowSensor());
            return true;
          default:
            return true;
        }
      }, 2000);
      setTimer(intervalTimer);
    }
    return () => clearInterval(timer);
  }, [run]);

  // const startSimulator = async () => {
  //   dispatch(updateSensorStatusRealtime('x1', 'ON'));
  //   dispatch(updateSensorStatusRealtime('x1', 'OFF'));
  // };

  // const stopSimulator = () => {
  //   dispatch(updateSensorStatusRealtime('x2', 'ON'));
  //   dispatch(updateSensorStatusRealtime('x2', 'OFF'));
  // };

  const handleStop = () => {
    // setRun(false);
    dispatch(powerOff());
  };

  const handleStart = () => {
    // setRun(true);
    dispatch(powerOn());
  };

  const Col = ({title, data}) => (
    <View style={styles.colContainer}>
      <Text allowFontScaling={false} style={styles.colTitle}>
        {title}
      </Text>
      <Text allowFontScaling={false} style={styles.colData}>
        {data}
      </Text>
    </View>
  );

  if (loading) {
    return <LoadingIndicator />;
  }

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <AppBar leftButton="menu-outline" title="Home" action={openDrawer} />
      <View style={styles.content}>
        <View>
          <View style={styles.row}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.image}
            />
            <Text allowFontScaling={false} style={styles.name}>
              {sensors[0].name}
            </Text>
          </View>
          <View style={styles.row}>
            {loading == true ? (
              <LoadingIndicator />
            ) : (
              <>
                <Text allowFontScaling={false} style={styles.status}>
                  Status: {power['Value'] == 'ON' ? 'On' : 'Off'}
                </Text>
                <Ionicons
                  name="radio-button-on-outline"
                  size={24}
                  color={power['Value'] == 'ON' ? '#3BB143' : '#EB5757'}
                  // color={
                  //   signal['x1'] === 'ON'
                  //     ? '#3BB143'
                  //     : signal['x2'] === 'ON'
                  //     ? '#EB5757'
                  //     : '#EB5757'
                  // }
                />
              </>
            )}
          </View>
        </View>

        <View style={styles.rowContainer}>
          <Col title="Product 1" data={sensorLow.Value} />
          <Col title="Product 2" data={sensorMedium.Value} />
          <Col title="Product 3" data={sensorHigh.Value} />
        </View>
        <View>
          <TouchableOpacity
            onPress={handleStart}
            disabled={power['Value'] == 'ON'}>
            <Text style={[styles.button, styles.on]}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleStop}
            disabled={power['Value'] == 'OFF'}>
            <Text style={styles.button}>Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
