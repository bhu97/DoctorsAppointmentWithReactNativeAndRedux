import open from 'react-native-open-maps';

export const openMapOnAddress = address => {
  open({query: address});
};
