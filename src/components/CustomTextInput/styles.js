import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  rowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: 50,
    alignItems: 'center',
    borderColor: '#acacac',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
  },
  textRequire: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7c7c7c',
    marginTop: 10,
    marginBottom: 5,
  },
});
