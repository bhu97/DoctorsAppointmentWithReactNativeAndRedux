import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './Styles';
import {connect} from 'react-redux';
import {login} from '../../store/actions/UserActions';
import OverlayLoadingSpinner from '../../components/loading/OverlayLoadingSpinner';

class Login extends Component {
  state = {loading: false};

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // showImage: true,
    };
  }
  signIn = e => {
    e.preventDefault();
    console.log('credentials', this.state.email, this.state.password);

    if (this.state.email && this.state.password) {
      this.setState({loading: true});
      this.props.signIn(
        this.state.email,
        this.state.password,
        this.props.route.params.role,
      );
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  componentDidUpdate() {
    if (this.props.error && this.state.loading) {
      this.setState({loading: false});
      Alert.alert(this.props.error.message);
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.bg}>
          <ImageBackground
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />

          <Text style={styles.text}> Email </Text>
          <TextInput
            style={styles.input}
            placeholder="EMAIL"
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          {/* onClick={e => } */}
          <Text style={styles.text}> Password </Text>
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            type="password"
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={text => this.setState({password: text})}
          />
          <TouchableOpacity>
            <Text style={styles.button} onPress={e => this.signIn(e)}>
              {' '}
              Submit{' '}
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.loading && <OverlayLoadingSpinner />}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const {user, error} = state.userData;
  return {user, error};
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    // fetchDoctors: speciality => dispatch(fetchDoctorsBySpeciality(speciality)),
    // resetDoctors: () => dispatch({type: ActionTypes.RESET_DOCTORS}),
    signIn: (email, password, role) => dispatch(login(email, password, role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login
