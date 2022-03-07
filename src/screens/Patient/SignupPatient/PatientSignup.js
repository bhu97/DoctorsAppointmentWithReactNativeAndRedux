import React, {useEffect, useState} from 'react';
import {View, Image, Alert, Pressable} from 'react-native';

import {PATIENT} from '../../../constants/Role';
import styles from './styles';
import {connect} from 'react-redux';
import {signup} from '../../../store/actions/UserActions';

import KeyboardAvoidingWrapper from '../../../components/KeyboardAvoidingWrapper';
import SimpleButton from '../../../components/button/SimpleButton';
import TextInputC from '../../../components/input/TextInputC';
import {
  validateEmail,
  validateMobile,
  validateName,
  validatePassword,
  validatePlace,
} from '../../../utility/Validators';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getDate} from '../../../utility/DateTimeConverter';
import OverlayLoadingSpinner from '../../../components/loading/OverlayLoadingSpinner';

//useEffec
const PatientSignup = props => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [place, setPlace] = useState('');
  const [password, setPassword] = useState('');

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    place: '',
    password: '',
    dob: '',
  });

  const validateFields = () => {
    let _errors = {
      name: '',
      email: '',
      mobile: '',
      place: '',
      password: '',
      dob: '',
    };

    _errors.name = validateName(name);
    _errors.password = validatePassword(password);
    _errors.mobile = validateMobile(mobile);
    _errors.place = validatePlace(place);
    _errors.email = validateEmail(email);
    _errors.dob = dob ? '' : 'DOB cannot be null';

    setErrors(_errors);

    return (
      _errors.name ||
      _errors.email ||
      _errors.password ||
      _errors.place ||
      _errors.email ||
      _errors.dob
    );
  };

  const validateField = (field, value) => {
    let _errors = errors;
    let error = '';

    if (field === 'name') {
      error = validateName(value);
    } else if (field === 'email') {
      error = validateEmail(value);
    } else if (field === 'dob') {
      error = value ? '' : 'DOB cannot be null';
    } else if (field === 'place') {
      error = validatePlace(value);
    } else if (field === 'password') {
      error = validatePassword(value);
    } else if (field === 'mobile') {
      error = validateMobile(value);
    }

    _errors[field] = error;

    setErrors(_errors);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    validateField('dob', currentDate);
    setShow(false);
    setDob(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const signupPatient = () => {
    if (validateFields()) {
      Alert.alert('Please resolve the errors');
    } else {
      setLoading(true);
      const user = {
        email: email,
        name: name,
        place: place,
        dob: dob.toDateString(),
        mobile: mobile,
      };
      console.log('user is', user);
      console.log('prop state is is is ', props);
      props.addPatient(user, password);
    }
  };

  useEffect(() => {
    if (props.error) {
      setLoading(false);
      console.log('in use effect');
      Alert.alert('something went wrong');
    }
  }, [props.error]);

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dob || new Date()}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/Patient.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInputC
            placeholder={'Your name'}
            value={name}
            setValue={setName}
            error={errors.name}
            label="Name"
            onChangeText={text => validateField('name', text)}
          />
          <TextInputC
            placeholder={'Email'}
            value={email}
            setValue={setEmail}
            error={errors.email}
            label="Email"
            onChangeText={text => validateField('email', text)}
          />
          <TextInputC
            placeholder={'Mobile number'}
            value={mobile}
            setValue={setMobile}
            error={errors.mobile}
            label="Mobile"
            onChangeText={text => validateField('mobile', text)}
          />
          <TextInputC
            placeholder={'Place'}
            value={place}
            setValue={setPlace}
            error={errors.place}
            label="Place"
            onChangeText={text => validateField('place', text)}
          />

          <Pressable onPress={() => showDatepicker()}>
            <View pointerEvents="none">
              <TextInputC
                placeholder={'Date Of Birth'}
                value={dob ? getDate(dob) : ''}
                error={errors.dob}
                label="Date of Birth"
                onChangeText={text => validateField('dob', text)}
              />
            </View>
          </Pressable>

          <TextInputC
            placeholder={'Password'}
            value={password}
            setValue={setPassword}
            secureTextEntry
            error={errors.password}
            label="Password"
            onChangeText={text => validateField('password', text)}
          />
        </View>
        <View style={styles.actionContainer}>
          <SimpleButton
            title={'Create Account'}
            buttonColor="#32c671"
            textColor="white"
            onPress={signupPatient}
          />
        </View>
        {loading && <OverlayLoadingSpinner />}
      </View>
    </KeyboardAvoidingWrapper>
  );
};
function mapStateToProps(state) {
  const {user, error} = state.userData;
  return {user, error};
}

const mapDispatchToProps = dispatch => {
  return {
    addPatient: (patient, password) =>
      dispatch(signup(patient, password, PATIENT)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PatientSignup);
