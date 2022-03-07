import React from 'react';
import {View, StyleSheet} from 'react-native';

import SimpleButton from './SimpleButton';
import {Primary, SuccessGreen} from '../../theme/Colors';
import {callPhone} from '../../utility/CallFeature';
import {openMapOnAddress} from '../../utility/NavigateFeature';
import {openWhatsApp} from '../../utility/WhatsAppFeature';

const styles = StyleSheet.create({
  action: {
    flex: 1,
    flexDirection: 'row',
  },
});

const ButtonGroup = ({phone, address}) => {
  return (
    <View style={styles.action}>
      <SimpleButton
        title={'Call'}
        buttonColor={Primary}
        textColor={'white'}
        onPress={() => callPhone(phone)}
      />
      <SimpleButton
        title={'Navigate'}
        buttonColor={'orange'}
        textColor={'white'}
        onPress={() => openMapOnAddress(address)}
      />
      <SimpleButton
        title={'WhatsApp'}
        buttonColor={SuccessGreen}
        textColor={'white'}
        onPress={() => openWhatsApp(phone)}
      />
    </View>
  );
};

export default ButtonGroup;
