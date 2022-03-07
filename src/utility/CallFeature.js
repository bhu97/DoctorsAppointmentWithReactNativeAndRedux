import call from 'react-native-phone-call';

export const callPhone = number => {
  console.log('calling', number);
  call({number: number.toString(), prompt: false}).catch(console.error);
};
