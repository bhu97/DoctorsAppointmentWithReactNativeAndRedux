import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {Error, Primary, white, SuccessGreen, black} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  input: {
    // height: 50,
    backgroundColor: white,
    borderWidth: 2,
    borderColor: SuccessGreen,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
    color: black,
    fontSize: 20,
    alignItems: 'flex-start',
    maxHeight: 80,
  },
  selected: {
    borderWidth: 3,
    //borderColor: Primary,
  },
  error: {
    borderColor: Error,
  },
  label: {
    // marginTop: 20,
    // marginLeft: 10,
    marginBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    color: SuccessGreen,
  },
  hidden: {
    display: 'none',
  },
  errorText: {
    color: 'red',
    marginLeft: 10,
    marginBottom: 5,
    // marginLeft: 20,
  },
});

const TextInputC = ({
  placeholder,
  value,
  setValue,
  multiline,
  secureTextEntry,
  error = '',
  onChangeText,
  numberOfLines = 1,
  keyboardType = 'default',
  label = 'Label',
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        numberOfLines={numberOfLines}
        value={value}
        textAlignVertical="top"
        keyboardType={keyboardType}
        // onChange={() => onChange && onChange()}
        onChangeText={text => {
          setValue(text);
          onChangeText && onChangeText(text);
        }}
        style={[
          styles.input,
          selected && styles.selected,
          error.length > 0 && styles.error,
        ]}
        placeholder={placeholder}
        onFocus={() => setSelected(true)}
        onBlur={() => setSelected(false)}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
      />
      <Text style={[styles.errorText, !(error.length > 0) && styles.hidden]}>
        {error}
      </Text>
    </View>
  );
};

export default TextInputC;
