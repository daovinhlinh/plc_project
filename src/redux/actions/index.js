import {
  SENSOR_GET_INFO_SUCCESS,
  SENSOR_GET_INFO_ERROR,
  USER_GET_INFO_SUCCESS,
  USER_GET_INFO_ERROR,
  SENSOR_TURN_ON_SUCCESS,
  SENSOR_TURN_ON_ERROR,
  SENSOR_TURN_OFF_SUCCESS,
  SENSOR_TURN_OFF_ERROR,
  SENSOR_GET_DETAIL_SUCCESS,
  SENSOR_GET_DETAIL_ERROR,
  SENSOR_RESET,
  SENSOR_HIGH_SUCCESS,
  SENSOR_HIGH_ERROR,
  SENSOR_MEDIUM_SUCCESS,
  SENSOR_MEDIUM_ERROR,
  SENSOR_LOW_SUCCESS,
  SENSOR_LOW_ERROR,
  SIGNAL_X_GET_INFO_SUCCESS,
  SIGNAL_Y_GET_INFO_SUCCESS,
  SIGNAL_GET_INFO_SUCCESS,
  SIGNAL_LOW_GET_INFO_SUCCESS,
  SIGNAL_MEDIUM_GET_INFO_SUCCESS,
  SIGNAL_HIGH_GET_INFO_SUCCESS,
  SENSOR_UPDATE_SUCCESS,
  SENSOR_UPDATE_ERROR,
  SIGNAL_GET_FORWARD_LIMIT_SWITCH_HIGH_SUCCESS,
  SIGNAL_GET_FORWARD_LIMIT_SWITCH_MED_SUCCESS,
  SIGNAL_GET_MOTOR_SUCCESS,
  SIGNAL_GET_MOTOR_HIGH_FORWARD_SUCCESS,
  SIGNAL_GET_MOTOR_HIGH_REVERSE_SUCCESS,
  SIGNAL_GET_MOTOR_MED_FORWARD_SUCCESS,
  SIGNAL_GET_MOTOR_MED_REVERSE_SUCCESS,
  SIGNAL_GET_POWER_SUCCESS,
  SIGNAL_GET_REVERSE_LIMIT_SWITCH_HIGH_SUCCESS,
  SIGNAL_GET_REVERSE_LIMIT_SWITCH_MED_SUCCESS,
  POWER_ON_SUCCESS,
  POWER_OFF_SUCCESS,
  INVERTER_GET_SUCCESS,
  SPEED_GET_SUCCESS,
  RUN_GET_SUCCESS,
} from '../actions';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const fetchSensorData = () => {
  return dispatch => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .collection('sensors')
      .onSnapshot(snapshot => {
        let sensors = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            address: doc.data().address,
            name: doc.data().name,
            status: doc.data().status,
          };
        });
        dispatch({type: SENSOR_GET_INFO_SUCCESS, payload: sensors});
      });
  };
};

export const fetchXSignalData = () => {
  return dispatch => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .collection('signals')
      .onSnapshot(snapshot => {
        let signals = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            status: doc.data().status,
          };
        });
        dispatch({type: SIGNAL_X_GET_INFO_SUCCESS, payload: signals});
      });
  };
};

export const fetchYSignalData = () => {
  return dispatch => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .collection('signalsY')
      .onSnapshot(snapshot => {
        let signals = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            status: doc.data().status,
          };
        });
        dispatch({type: SIGNAL_Y_GET_INFO_SUCCESS, payload: signals});
      });
  };
};

export const fetchSignalData = () => {
  return dispatch => {
    database()
      .ref('sensor input')
      .on('value', snapshot => {
        dispatch({type: SIGNAL_GET_INFO_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const fetchLowSensor = () => {
  return dispatch => {
    database()
      .ref('/Count Low')
      .on('value', snapshot => {
        dispatch({type: SIGNAL_LOW_GET_INFO_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const fetchMediumSensor = () => {
  return dispatch => {
    database()
      .ref('/Count Medium')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_MEDIUM_GET_INFO_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchHighSensor = () => {
  return dispatch => {
    database()
      .ref('/Count High')
      .on('value', snapshot => {
        dispatch({type: SIGNAL_HIGH_GET_INFO_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const fetchForwardLimitSwitchHigh = () => {
  return dispatch => {
    database()
      .ref('/Forward Limit Switch High')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_FORWARD_LIMIT_SWITCH_HIGH_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchForwardLimitSwitchMed = () => {
  return dispatch => {
    database()
      .ref('/Forward Limit Switch Med')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_FORWARD_LIMIT_SWITCH_MED_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchMotor = () => {
  return dispatch => {
    database()
      .ref('/Motor')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_MOTOR_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchMotorHighForward = () => {
  return dispatch => {
    database()
      .ref('/Motor High Forward')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_MOTOR_HIGH_FORWARD_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchMotorHighReverse = () => {
  return dispatch => {
    database()
      .ref('/Motor High Reverse')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_MOTOR_HIGH_REVERSE_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchMotorMedForward = () => {
  return dispatch => {
    database()
      .ref('/Motor Med Forward')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_MOTOR_MED_FORWARD_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchMotorMedReverse = () => {
  return dispatch => {
    database()
      .ref('/Motor Med Reverse')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_MOTOR_MED_REVERSE_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchPower = () => {
  return dispatch => {
    database()
      .ref('/Power')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_POWER_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchReverseLimitSwitchHigh = () => {
  return dispatch => {
    database()
      .ref('/Reverse Limit Switch High')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_REVERSE_LIMIT_SWITCH_HIGH_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchReverseLimitSwitchMed = () => {
  return dispatch => {
    database()
      .ref('/Reverse Limit Switch Med')
      .on('value', snapshot => {
        dispatch({
          type: SIGNAL_GET_REVERSE_LIMIT_SWITCH_MED_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchSpeed = () => {
  return dispatch => {
    database()
      .ref('/Speeds')
      .on('value', snapshot => {
        dispatch({
          type: SPEED_GET_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchInverter = () => {
  return dispatch => {
    database()
      .ref('/Inverter')
      .on('value', snapshot => {
        dispatch({
          type: INVERTER_GET_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const fetchRun = () => {
  return dispatch => {
    database()
      .ref('/RUN')
      .on('value', snapshot => {
        dispatch({
          type: RUN_GET_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export const updateSensorStatusRealtime = (id, status) => {
  return dispatch => {
    database()
      .ref('sensor input')
      .update({
        [id]: status,
      })
      .then(
        async () =>
          await dispatch({
            type: SENSOR_UPDATE_SUCCESS,
          }),
        dispatch(fetchSignalData()),
      )
      .catch({
        type: SENSOR_UPDATE_ERROR,
      });
  };
};

export const fetchUserData = () => {
  return dispatch => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          dispatch({type: USER_GET_INFO_SUCCESS, payload: snapshot.data()});
        } else {
          dispatch({type: USER_GET_INFO_ERROR});
        }
      });
  };
};

export const changeSensorStatus = (status, sensorId) => {
  return dispatch => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .collection('sensors')
      .doc(sensorId)
      .update({
        status: status,
      })
      .then(() => {
        dispatch({
          type:
            status === 'on' ? SENSOR_TURN_ON_SUCCESS : SENSOR_TURN_OFF_SUCCESS,
        });
      })
      .catch(err => {
        dispatch({
          type: status === 'on' ? SENSOR_TURN_ON_ERROR : SENSOR_TURN_OFF_ERROR,
        });
      });
  };
};

export const updateHighSensor = () => {
  return dispatch => {
    database()
      .ref('/Count High')
      .transaction(value => {
        return {
          ...value,
          Value: (parseInt(value.Value) + 1).toString(),
        };
      })
      .then(transaction => {
        dispatch({type: SENSOR_HIGH_SUCCESS});
      });
  };
};

export const updateMediumSensor = () => {
  return dispatch => {
    database()
      .ref('/Count Medium')
      .transaction(value => {
        return {
          ...value,
          Value: (parseInt(value.Value) + 1).toString(),
        };
      })
      .then(transaction => {
        dispatch({type: SENSOR_MEDIUM_SUCCESS});
      });
  };
};

export const updateLowSensor = () => {
  return dispatch => {
    database()
      .ref('/Count Low')
      .transaction(value => {
        return {
          ...value,
          Value: (parseInt(value.Value) + 1).toString(),
        };
      })
      .then(transaction => {
        dispatch({type: SENSOR_LOW_SUCCESS});
      });
  };
};

export const powerOn = () => {
  return dispatch => {
    database()
      .ref('/Power')
      .transaction(value => {
        return {
          ...value,
          Value: 'ON',
        };
      })
      .then(() => {
        dispatch({type: POWER_ON_SUCCESS});
      });
  };
};

export const powerOff = () => {
  return dispatch => {
    database()
      .ref('/Power')
      .transaction(value => {
        return {
          ...value,
          Value: 'OFF',
        };
      })
      .then(() => {
        dispatch({type: POWER_OFF_SUCCESS});
      });
  };
};

// export const updateMediumSensor = sensorId => {
//   return dispatch => {
//     firestore()
//       .collection('users')
//       .doc(auth().currentUser.uid)
//       .collection('sensors')
//       .doc(sensorId)
//       .update({
//         medium: firestore.FieldValue.increment(1),
//       })
//       .then(() => {
//         dispatch({
//           type: SENSOR_MEDIUM_SUCCESS,
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: SENSOR_MEDIUM_ERROR,
//         });
//       });
//   };
// };

export const resetSensorValue = sensorId => {
  return dispatch => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .collection('sensors')
      .doc(sensorId)
      .update({
        high: 0,
        medium: 0,
        low: 0,
      })
      .then(() => {
        dispatch({
          type: SENSOR_RESET,
        });
      })
      .catch(err => {
        dispatch({
          type: SENSOR_RESET,
        });
      });
  };
};
