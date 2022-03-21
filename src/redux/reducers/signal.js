import {
  SIGNAL_X_GET_INFO_SUCCESS,
  SIGNAL_X_GET_INFO_ERROR,
  SIGNAL_Y_GET_INFO_SUCCESS,
  SIGNAL_Y_GET_INFO_ERROR,
  SIGNAL_GET_INFO_SUCCESS,
  SIGNAL_GET_INFO_ERROR,
  SIGNAL_GET_FORWARD_LIMIT_SWITCH_HIGH_SUCCESS,
  SIGNAL_GET_FORWARD_LIMIT_SWITCH_HIGH_FAILED,
  SIGNAL_GET_FORWARD_LIMIT_SWITCH_MED_SUCCESS,
  SIGNAL_GET_FORWARD_LIMIT_SWITCH_MED_FAILED,
  SIGNAL_GET_MOTOR_SUCCESS,
  SIGNAL_GET_MOTOR_FAILED,
  SIGNAL_GET_MOTOR_HIGH_FORWARD_SUCCESS,
  SIGNAL_GET_MOTOR_HIGH_FORWARD_FAILED,
  SIGNAL_GET_MOTOR_MED_FORWARD_SUCCESS,
  SIGNAL_GET_MOTOR_MED_FORWARD_FAILED,
  SIGNAL_GET_MOTOR_MED_REVERSE_SUCCESS,
  SIGNAL_GET_MOTOR_MED_REVERSE_FAILED,
  SIGNAL_GET_POWER_SUCCESS,
  SIGNAL_GET_POWER_FAILED,
  SIGNAL_GET_REVERSE_LIMIT_SWITCH_HIGH_SUCCESS,
  SIGNAL_GET_REVERSE_LIMIT_SWITCH_HIGH_FAILED,
  SIGNAL_GET_REVERSE_LIMIT_SWITCH_MED_SUCCESS,
  SIGNAL_GET_REVERSE_LIMIT_SWITCH_MED_FAILED,
  SIGNAL_GET_MOTOR_HIGH_REVERSE_SUCCESS,
  SIGNAL_GET_MOTOR_HIGH_REVERSE_FAILED,
} from '../actions';

const initState = {
  signal: null,
  signalX: null,
  signalY: null,
  forwardLimitSwitchHigh: null,
  forwardLimitSwitchMed: null,
  motor: null,
  motorHighForward: null,
  motorHighReverse: null,
  motorMedForward: null,
  motorMedReverse: null,
  power: null,
  reverseLimitSwitchHigh: null,
  reverseLimitSwitchMed: null,
};

export const signal = (state = initState, action) => {
  switch (action.type) {
    case SIGNAL_X_GET_INFO_SUCCESS:
      return {
        ...state,
        signalX: action.payload,
      };
    case SIGNAL_X_GET_INFO_ERROR:
      console.log('Get signal x failed');
      return state;
    case SIGNAL_Y_GET_INFO_SUCCESS:
      return {
        ...state,
        signalY: action.payload,
      };
    case SIGNAL_Y_GET_INFO_ERROR:
      console.log('Get signal x failed');
      return state;
    case SIGNAL_GET_INFO_SUCCESS:
      return {
        ...state,
        signal: action.payload,
      };
    case SIGNAL_GET_INFO_ERROR:
      console.log('Get signal x failed');
      return state;

    case SIGNAL_GET_FORWARD_LIMIT_SWITCH_HIGH_SUCCESS:
      return {
        ...state,
        forwardLimitSwitchHigh: action.payload,
      };
    case SIGNAL_GET_FORWARD_LIMIT_SWITCH_HIGH_FAILED:
      console.log('Get SIGNAL_GET_FORWARD_LIMIT_SWITCH_HIGH_FAILED');
      return state;

    case SIGNAL_GET_FORWARD_LIMIT_SWITCH_MED_SUCCESS:
      return {
        ...state,
        forwardLimitSwitchMed: action.payload,
      };
    case SIGNAL_GET_FORWARD_LIMIT_SWITCH_MED_FAILED:
      console.log('Get SIGNAL_GET_FORWARD_LIMIT_SWITCH_MED_FAILED');
      return state;

    case SIGNAL_GET_MOTOR_SUCCESS:
      return {
        ...state,
        motor: action.payload,
      };
    case SIGNAL_GET_MOTOR_FAILED:
      console.log('Get SIGNAL_GET_MOTOR_FAILED');
      return state;

    case SIGNAL_GET_MOTOR_HIGH_FORWARD_SUCCESS:
      return {
        ...state,
        motorHighForward: action.payload,
      };
    case SIGNAL_GET_MOTOR_HIGH_FORWARD_FAILED:
      console.log('Get SIGNAL_GET_MOTOR_HIGH_FORWARD_FAILED');
      return state;

    case SIGNAL_GET_MOTOR_HIGH_REVERSE_SUCCESS:
      return {
        ...state,
        motorHighReverse: action.payload,
      };
    case SIGNAL_GET_MOTOR_HIGH_REVERSE_FAILED:
      console.log('Get SIGNAL_GET_MOTOR_HIGH_FORWARD_FAILED');
      return state;

    case SIGNAL_GET_MOTOR_MED_FORWARD_SUCCESS:
      return {
        ...state,
        motorMedForward: action.payload,
      };
    case SIGNAL_GET_MOTOR_MED_FORWARD_FAILED:
      console.log('Get SIGNAL_GET_MOTOR_HIGH_FORWARD_FAILED');
      return state;

    case SIGNAL_GET_MOTOR_MED_REVERSE_SUCCESS:
      return {
        ...state,
        motorMedReverse: action.payload,
      };
    case SIGNAL_GET_MOTOR_MED_REVERSE_FAILED:
      console.log('Get SIGNAL_GET_MOTOR_MED_REVERSE_FAILED');
      return state;

    case SIGNAL_GET_POWER_SUCCESS:
      return {
        ...state,
        power: action.payload,
      };
    case SIGNAL_GET_POWER_FAILED:
      console.log('Get SIGNAL_GET_POWER_FAILED');
      return state;

    case SIGNAL_GET_REVERSE_LIMIT_SWITCH_HIGH_SUCCESS:
      return {
        ...state,
        reverseLimitSwitchHigh: action.payload,
      };
    case SIGNAL_GET_REVERSE_LIMIT_SWITCH_HIGH_FAILED:
      console.log('Get SIGNAL_GET_REVERSE_LIMIT_SWITCH_HIGH_FAILED');
      return state;

    case SIGNAL_GET_REVERSE_LIMIT_SWITCH_MED_SUCCESS:
      return {
        ...state,
        reverseLimitSwitchMed: action.payload,
      };
    case SIGNAL_GET_REVERSE_LIMIT_SWITCH_MED_FAILED:
      console.log('Get SIGNAL_GET_REVERSE_LIMIT_SWITCH_MED_FAILED');
      return state;

    default:
      return state;
  }
};
