import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemContainer: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#E9EBF4',
    overflow: 'hidden',
    marginTop: 10,
  },
  itemName: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: '#E9EBF4',
    borderBottomWidth: 1,
    borderColor: '#F7F7F8',
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#F7F7F8',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '30%',
    color: '#73818E',
  },
  itemText: {
    width: '100%',
    textAlign: 'right',
    maxWidth: '70%',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  itemStatus: {
    textAlign: 'center',
    width: '20%',
  },
  sensorName: {
    fontSize: 22,
    fontWeight: '400',
    color: '#fff',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginRight: 10,
  },
  offStatus: {
    backgroundColor: '#EB5757',
  },
  onStatus: {
    backgroundColor: '#3BB143',
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
