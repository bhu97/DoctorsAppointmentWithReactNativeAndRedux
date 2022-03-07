import React from 'react';
import {Alert, View} from 'react-native';

import SlotContainer from '../../../components/appointment/SlotContainer';
import SimpleButton from '../../../components/button/SimpleButton';
import TextInputC from '../../../components/input/TextInputC';
import Counter from '../../../components/input/Counter';

import KeyboardAvoidingWrapper from '../../../components/KeyboardAvoidingWrapper';

import styles from './Styles';
import {addMedicine} from '../../../store/actions/MedicineActions';
import {connect} from 'react-redux';
import OverlayLoadingSpinner from '../../../components/loading/OverlayLoadingSpinner';

// const slots = {
//   Repeat: [
//     {id: 1, value: 'Everyday'},
//     {id: 2, value: 'Alternate Days'},
//   ],
//   Time
// };

const repeat = [
  {id: 1, value: 'Everyday'},
  {id: 2, value: 'Alternate Days'},
];
const timeOfTheDay = [
  {id: 1, value: 'Morning'},
  {id: 2, value: 'Afternoon'},
  {id: 3, value: 'Evening'},
  {id: 4, value: 'Night'},
];
const toBeTaken = [
  {id: 1, value: 'After Food'},
  {id: 2, value: 'Before Food'},
];

class AddMedicine extends React.Component {
  state = {
    name: '',
    loading: false,
    repeat: {id: 0, value: null},
    timeOfTheDay: {id: 0, value: null},
    toBeTaken: {id: 0, value: null},
    tablet: 1,
    week: 1,
  };

  addMedicine = () => {
    if (
      this.state.name &&
      this.state.repeat.value &&
      this.state.timeOfTheDay.value &&
      this.state.toBeTaken.value
    ) {
      this.setState({loading: true});
      const medicine = {
        name: this.state.name,
        repeat: this.state.repeat.value,
        timeOfTheDay: this.state.timeOfTheDay.value,
        toBeTaken: this.state.toBeTaken.value,
        tablet: this.state.tablet,
        week: this.state.week,
      };

      this.props.addMedicine(medicine);
    } else {
      let message = this.state.name
        ? 'Please select all the slots'
        : 'Please provide the medicine name';

      Alert.alert(message);
    }
  };

  componentDidUpdate() {
    if (this.props.added) {
      Alert.alert('Successfully added medicine');
      this.props.navigation.goBack();
    }
    if (this.props.error) {
      Alert.alert('Error', this.props.error.message);
    }
  }

  render() {
    return (
      <KeyboardAvoidingWrapper>
        <View style={styles.container}>
          <View style={styles.body}>
            <TextInputC
              placeholder={'Medicine name'}
              value={this.state.name}
              setValue={text => this.setState({name: text})}
            />

            <View style={styles.counters}>
              <Counter
                label1={'Dosage'}
                label2={'Tablet'}
                value={this.state.tablet}
                onAdd={value => this.setState({tablet: value + 1})}
                onMinus={value =>
                  value > 1 && this.setState({tablet: value - 1})
                }
              />

              <Counter
                label1={'Duration'}
                label2={'Week'}
                value={this.state.week}
                onAdd={value => this.setState({week: value + 1})}
                onMinus={value => value > 1 && this.setState({week: value - 1})}
              />
            </View>

            <SlotContainer
              label={'Repeat'}
              slots={repeat}
              value={slot => slot.value}
              selected={slot => slot.id === this.state.repeat.id}
              setSelectedValue={value => this.setState({repeat: value})}
            />

            <SlotContainer
              label={'Time of the day'}
              slots={timeOfTheDay}
              value={slot => slot.value}
              selected={slot => slot.id === this.state.timeOfTheDay.id}
              setSelectedValue={value => this.setState({timeOfTheDay: value})}
            />

            <SlotContainer
              label={'To be taken'}
              slots={toBeTaken}
              value={slot => slot.value}
              selected={slot => slot.id === this.state.toBeTaken.id}
              setSelectedValue={value => this.setState({toBeTaken: value})}
            />
          </View>
          <View style={styles.action}>
            <SimpleButton title={'Add Medicine'} onPress={this.addMedicine} />
          </View>
          {this.state.loading && <OverlayLoadingSpinner />}
        </View>
      </KeyboardAvoidingWrapper>
    );
  }
}

const mapStateToProps = state => {
  const {added, error} = state.medicineData;
  return {added, error};
};

const mapDispatchToProps = dispatch => {
  return {
    addMedicine: medicine => dispatch(addMedicine(medicine)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMedicine);
