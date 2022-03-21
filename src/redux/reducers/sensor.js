import {
  SENSOR_TURN_OFF_SUCCESS,
  SENSOR_TURN_OFF_ERROR,
  SENSOR_TURN_ON_SUCCESS,
  SENSOR_TURN_ON_ERROR,
  SENSOR_GET_INFO_SUCCESS,
  SENSOR_GET_INFO_ERROR,
  SENSOR_GET_DETAIL_SUCCESS,
  SENSOR_GET_DETAIL_ERROR,
  SENSOR_RESET,
  SENSOR_GET_DETAIL_CLEAR,
  SENSOR_HIGH_SUCCESS,
  SENSOR_MEDIUM_SUCCESS,
  SENSOR_LOW_SUCCESS,
  SENSOR_UPDATE_SUCCESS,
  SENSOR_UPDATE_ERROR,
  SIGNAL_HIGH_GET_INFO_SUCCESS,
  SIGNAL_MEDIUM_GET_INFO_SUCCESS,
  SIGNAL_LOW_GET_INFO_SUCCESS,
  SIGNAL_GET_POWER_SUCCESS,
  SIGNAL_GET_POWER_FAILED,
  POWER_ON_SUCCESS,
  POWER_ON_FAILED,
  POWER_OFF_SUCCESS,
  POWER_OFF_FAILED,
} from '../actions';
const initState = {
  currentSensor: null,
  sensor: null,
  sensorLow: null,
  sensorMedium: null,
  sensorHigh: null,
  power: null,
};

export const sensor = (state = initState, action) => {
  switch (action.type) {
    case SIGNAL_GET_POWER_SUCCESS:
      return {
        ...state,
        power: action.payload,
      };
    case SIGNAL_GET_POWER_FAILED:
      console.log('Get SIGNAL_GET_POWER_FAILED');
      return state;

    case SENSOR_GET_INFO_SUCCESS:
      return {
        ...state,
        currentSensor: action.payload,
      };

    case SIGNAL_HIGH_GET_INFO_SUCCESS:
      return {
        ...state,
        sensorHigh: action.payload,
      };

    case SIGNAL_MEDIUM_GET_INFO_SUCCESS:
      return {
        ...state,
        sensorMedium: action.payload,
      };

    case SIGNAL_LOW_GET_INFO_SUCCESS:
      return {
        ...state,
        sensorLow: action.payload,
      };

    case POWER_ON_SUCCESS:
      return state;
    case POWER_ON_FAILED:
      console.log('Power on failed');
      return state;

    case POWER_OFF_SUCCESS:
      return state;
    case POWER_OFF_FAILED:
      console.log('Power off failed');
      return state;

    case SENSOR_GET_INFO_ERROR:
      console.log('Get info failed');
      return state;
    case SENSOR_TURN_OFF_SUCCESS:
      alert('Sensor turned off');
      return state;
    case SENSOR_TURN_OFF_ERROR:
      console.log('Turn off failed');
      return state;
    case SENSOR_TURN_ON_SUCCESS:
      alert('Sensor turned on');
      return state;
    case SENSOR_TURN_ON_ERROR:
      console.log('Turn on failed');
      return state;
    case SENSOR_RESET:
      alert('Sensor reset...');
      return state;
    case SENSOR_UPDATE_SUCCESS:
      console.log('Sensor updated success');
      return state;
    case SENSOR_UPDATE_ERROR:
      console.log('Sensor updated failed');
      return state;
    case SENSOR_GET_DETAIL_SUCCESS:
      return {
        ...state,
        sensor: action.payload,
      };

    case SENSOR_GET_DETAIL_ERROR:
      console.log('Get detail failed');
      return state;

    case SENSOR_HIGH_SUCCESS:
      console.log('Update high');
      return state;
    case SENSOR_MEDIUM_SUCCESS:
      console.log('Update medium');
      return state;
    case SENSOR_LOW_SUCCESS:
      console.log('Update low');
      return state;

    default:
      return state;
  }
};
