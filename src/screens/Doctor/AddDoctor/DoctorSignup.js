import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Platform,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import {DOCTOR} from '../../../constants/Role';
import {connect} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

import {signup} from '../../../store/actions/UserActions';

import KeyboardAvoidingWrapper from '../../../components/KeyboardAvoidingWrapper';
import SimpleButton from '../../../components/button/SimpleButton';
import TextInputC from '../../../components/input/TextInputC';
import validator from 'validator';
import {
  validateEmail,
  validateMobile,
  validateName,
  validatePassword,
  validatePlace,
} from '../../../utility/Validators';
import {getDate, getTime} from '../../../utility/DateTimeConverter';

function DoctorSignup(props) {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timebutton, setTimeButton] = useState('');

  const [password, setPassword] = useState('');
  const [place, setPlace] = useState('');
  const [qualification, setQualification] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [experience, setExperience] = useState('');
  const [about, setAbout] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    place: '',
    password: '',
    dob: '',
    startTime: '',
    endTime: '',
    speciality: '',
    qualification: '',
    experience: '',
    about: '',
  });

  const validateFields = () => {
    let _errors = {
      name: '',
      email: '',
      mobile: '',
      place: '',
      password: '',
      dob: '',
      startTime: '',
      endTime: '',
      speciality: '',
      qualification: '',
      experience: '',
      about: '',
    };

    _errors.name = validateName(name);
    _errors.password = validatePassword(password);
    _errors.mobile = validateMobile(mobile);
    _errors.place = validatePlace(place);
    _errors.email = validateEmail(email);
    _errors.dob = dob ? '' : 'DOB cannot be null';
    _errors.startTime = startTime ? '' : 'start time cannot be null';
    _errors.endTime = endTime ? '' : 'end time cannot be null';
    _errors.speciality = speciality ? '' : 'speciality cannot be null';
    _errors.qualification = qualification ? '' : 'qualification cannot be null';
    _errors.experience = experience ? '' : 'experience cannot be null';
    _errors.about = about ? '' : 'about cannot be null';

    setErrors(_errors);

    return (
      _errors.name ||
      _errors.email ||
      _errors.password ||
      _errors.place ||
      _errors.mobile ||
      _errors.dob ||
      _errors.speciality ||
      _errors.about ||
      _errors.startTime ||
      _errors.endTime ||
      _errors.experience ||
      _errors.qualification
    );
  };

  const validateField = (field, value) => {
    let _errors = errors;
    let error = '';

    if (field === 'name') {
      error = validateName(value);
    } else if (field === 'email') {
      error = validateEmail(value);
    } else if (field === 'password') {
      error = validatePassword(value);
    } else if (field === 'place') {
      error = validatePlace(value);
    } else if (field === 'dob') {
      error = value ? '' : 'DOB cannot be null';
    }
    else if (field === 'mobile') {
      error = validateMobile(value);
    }
    else if (field === 'startTime') {
      error = value ? '' : 'start time cannot be null'
    }
    else if (field === 'endTime') {
      error = value ? '' : 'end time cannot be null';
    }
    else if (field === 'experience') {
      error = value ? '' : 'experience cannot be null'
    }
    else if (field === 'qualification') {
      error = value ? '' : 'qualification cannot be null';
    }
    else if (field === 'speciality') {
      error = value ? '' : 'speciality cannot be null'
    }
    else if (field === 'about') {
      error = value ? '' : 'about cannot be null';
    }
    _errors[field] = error;
    setErrors(_errors);
  };
  useEffect(() => {
    if (props.added) {
      props.navigation.goBack();
    }
  }, [props.added]);

  const onChange = (event, selectedDate) => {
    console.log(selectedDate);
    console.log(event);

    console.log('mode is', mode);

    setShow(false);

    if (mode === 'date') {
      validateField('dob', selectedDate || dob)
      setDob(selectedDate || dob);
    } else {
      console.log('time dialog is open', timebutton);
      switch (timebutton) {
        case 'start': {
          validateField('startTime', selectedDate || startTime)
          setStartTime(selectedDate || startTime);
          console.log('hello', startTime);
          break;
        }

        case 'end': {
          validateField('endTime', selectedDate || endTime)
          setEndTime(selectedDate || endTime);
          console.log('bye', endTime);
          break;
        }
      }
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    console.log('plswork');
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const addDoctor = () => {
    if (validateFields()) {
      Alert.alert('Please fill all the fields');
    } else {
      const user = {
        email,
        name,
        password,
        mobile,
        dob: dob.toDateString(),
        startTime: startTime.toString(),
        endTime: endTime.toString(),
        place,
        qualification,
        speciality,
        experience,
        about,
      };
      console.log('created doctor as', user);
      props.addDoctor(user, password);
    }
  };

  return (
    // <ScrollView>
    <KeyboardAvoidingWrapper>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dob || new Date()}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../assets/Doctor.png')}
            />
          </View>
          <View style={styles.inputContainer}>
            
            <TextInputC
              placeholder={'Your name'}
              value={name}
              setValue={setName}
              error={errors.name}
              label={'Name'}
              onChangeText={text => validateField('name', text)}
            />
            <TextInputC
              placeholder={'Email'}
              value={email}
              setValue={setEmail}
              error={errors.email}
              label={'Email'}
              onChangeText={text => validateField('email', text)}
            />
            <TextInputC
              placeholder={'Mobile number'}
              value={mobile}
              setValue={setMobile}
              error={errors.mobile}
              keyboardType="numeric"
              label={'Mobile Number'}
              onChangeText={text => validateField('mobile', text)}
            />

            <Pressable onPress={() => showDatepicker()}>
              <View pointerEvents="none">
                <TextInputC
                  placeholder={'Date Of Birth'}
                  value={dob ? getDate(dob) : ''}
                  error={errors.dob}
                  label={'DOB'}
                  // onChangeText={text => validateField('dob', text)}
                />
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                setTimeButton('start');
                showTimepicker();
              }}>
              <View pointerEvents="none">
                <TextInputC
                  placeholder={'Start Time'}
                  value={startTime ? getTime(startTime) : ''}
                  error={errors.startTime}
                  label={'Shift start time'}
                />
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                setTimeButton('end');
                showTimepicker();
              }}>
              <View pointerEvents="none">
                <TextInputC
                  placeholder={'End Time'}
                  value={endTime ? getTime(endTime) : ''}
                  error={errors.endTime}
                  label={'Shift end time'}
                />
              </View>
            </Pressable>

            <TextInputC
              placeholder={'Password'}
              value={password}
              setValue={setPassword}
              secureTextEntry
              error={errors.password}
              onChangeText={text => validateField('password', text)}
              label={'Password'}
            />
            <TextInputC
              placeholder={'Place'}
              value={place}
              setValue={setPlace}
              error={errors.place}
              onChangeText={text => validateField('place', text)}
              label={'Place'}
            />
            <TextInputC
              placeholder={'Qualification'}
              value={qualification}
              setValue={setQualification}
              error={errors.qualification}
              onChangeText={text => validateField('qualification', text)}
              label={'Qualification'}
            />
            <TextInputC
              placeholder={'Speciality'}
              value={speciality}
              setValue={setSpeciality}
              error={errors.speciality}
              onChangeText={text => validateField('speciality', text)}
              label={'Speciality'}

            />
            <TextInputC
              placeholder={'Experience'}
              value={experience}
              setValue={setExperience}
              error={errors.experience}
              keyboardType="numeric"
              onChangeText={text => validateField('experience', text)}
              label={'Experience'}

            />
            <TextInputC
              placeholder={'About'}
              value={about}
              setValue={setAbout}
              error={errors.about}
              onChangeText={text => validateField('about', text)}
              label={'About'}

            />
          </View>
          <View style={styles.actionContainer}>
            <SimpleButton
              title={'Add Doctor'}
              buttonColor="#32c671"
              textColor="white"
              onPress={addDoctor}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingWrapper>
    // </ScrollView>
  );
}

//needs to change to doctor
function mapStateToProps(state) {
  const {added} = state.doctorData;
  // return {user, error};
  return {added};
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    //fetchDoctors: speciality => dispatch(fetchDoctorsBySpeciality(speciality)),
    //  resetDoctors: () => dispatch({type: ActionTypes.RESET_DOCTORS}),
    addDoctor: (doctor, password) => dispatch(signup(doctor, password, DOCTOR)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DoctorSignup);
