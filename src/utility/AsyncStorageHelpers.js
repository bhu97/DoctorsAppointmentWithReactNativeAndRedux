import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLoggedInUser = async (user, role) => {
  const _user = await AsyncStorage.setItem(
    'loggedInUser',
    JSON.stringify({user, role}),
  );

  return _user;
};

export const getLoggedInUser = async () => {
  const result = await AsyncStorage.getItem('loggedInUser');

  return result ? JSON.parse(result) : null;
};

export const removeLoggedInUser = async () => {
  await AsyncStorage.removeItem('loggedInUser');
};
