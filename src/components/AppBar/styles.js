import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    elevation: 10,
  },
  title: {
    width: '50%',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  leftButton: {
    paddingLeft: 20,
    width: '25%',
  },
});
