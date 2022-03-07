import React from 'react';
import {Text} from 'react-native';

const AutosizeText = ({style, children, numberOfLines = 1}) => {
  return (
    <Text
      adjustsFontSizeToFit
      numberOfLines={numberOfLines}
      //   ellipsizeMode="head"
      style={style}>
      {children}
    </Text>
  );
};
export default AutosizeText;
