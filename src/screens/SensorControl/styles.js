import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  offStatus: {
    backgroundColor: '#EB5757',
  },
  onStatus: {
    backgroundColor: '#3BB143',
  },
  status: {
    alignItems: 'center',
  },
  statusText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 50,
  },
  address: {
    fontSize: 20,
    textAlign: 'center',
  },
  status: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  colContainer: {
    alignItems: 'center',
    borderWidth: 1,
    width: '30%',
    backgroundColor: '#fff',
  },
  colTitle: {
    borderBottomWidth: 1,
    width: '100%',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  colData: {
    paddingVertical: 30,
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#e1dfe7',
    borderRadius: 50,
    padding: 4,
    overflow: 'hidden',
    elevation: 10,
    marginTop: 20,
  },
  offButton: {
    backgroundColor: '#EB5757',
    paddingVertical: 30,
    paddingHorizontal: 45,
    borderRadius: 50,
    fontSize: 20,
  },
  onButton: {
    backgroundColor: '#009900',
    paddingVertical: 30,
    paddingHorizontal: 45,
    borderRadius: 50,
    fontSize: 20,
  },
  resetButton: {
    backgroundColor: '#FDE64B',
    paddingVertical: 30,
    textAlign: 'center',
    borderRadius: 50,
    fontSize: 20,
    marginTop: 20,
    elevation: 10,
  },
  button: {
    backgroundColor: 'red',
    marginTop: 15,
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 50,
    fontSize: 20,
    textAlign: 'center',
    elevation: 7,
  },
  on: {
    backgroundColor: '#009900',
  },
  reset: {
    backgroundColor: '#FDE64B',
  },

  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
});
