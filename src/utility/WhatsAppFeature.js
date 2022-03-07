import {Linking, Alert} from 'react-native';

export const openWhatsApp = phone => {
  let url = 'whatsapp://send?text=' + 'Hello' + '&phone=91' + phone;
  Linking.openURL(url)
    .then(data => {
      console.log('WhatsApp Opened successfully ' + data);
    })
    .catch(() => {
      Alert.alert('Make sure WhatsApp installed on your device');
    });
};
