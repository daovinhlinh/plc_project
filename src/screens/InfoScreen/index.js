import React from 'react';
import {Alert, Button, Linking, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AppBar} from '../../components/AppBar';
import QRCode from 'react-native-qrcode-svg';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const InfoScreen = ({navigation}) => {
  const userData = useSelector(state => state.user.currentUser);

  const goToSheet = () => {
    Linking.canOpenURL(
      'https://docs.google.com/spreadsheets/d/1ceCy2Pywder4Zra_MUcSEJEhHoa4kNhUN8HOvR45Gkg/edit#gid=0',
    ).then(support => {
      if (support) {
        Linking.openURL(
          'https://docs.google.com/spreadsheets/d/1ceCy2Pywder4Zra_MUcSEJEhHoa4kNhUN8HOvR45Gkg/edit#gid=0',
        );
      } else {
        Alert('Cannot open link');
      }
    });
  };

  return (
    <View style={styles.container}>
      <AppBar
        leftButton="chevron-back-outline"
        title="Thông tin"
        action={() => navigation.goBack()}
      />
      <View style={styles.body}>
        <View style={styles.information}>
          <QRCode
            size={250}
            value="https://docs.google.com/spreadsheets/d/1ceCy2Pywder4Zra_MUcSEJEhHoa4kNhUN8HOvR45Gkg/edit#gid=0"
          />
        </View>
        <View style={styles.information}>
          <Text allowFontScaling={false} style={styles.title}>
            MITSUBISHI ELECTRIC CUP AUTOMATION 2021
          </Text>
          <Text allowFontScaling={false} style={styles.description}>
            GIÁM SÁT HỆ THỐNG PHÂN LOẠI SẢN PHẨM BẰNG QR CODE
          </Text>
          <Text allowFontScaling={false} style={styles.team}>
            NHÓM: HKL
          </Text>
        </View>

        <TouchableOpacity onPress={goToSheet}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tra cứu bảo dưỡng</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
