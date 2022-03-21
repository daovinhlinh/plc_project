import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  information: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  team: {
    fontSize: 30,
  },
  button: {
    backgroundColor: '#0096FF',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
