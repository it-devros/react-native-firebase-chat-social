import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { LoginButton } from 'react-native-fbsdk';

import Loading from '../loading';
import * as commonActions from '../../actions/common';
import * as userActions from '../../actions/user';

const { height, width } = Dimensions.get('window');


const mapDispatchToProps = (dispatch) => {
	return ({
    userActions: bindActionCreators({...userActions}, dispatch),
    commonActions: bindActionCreators({...commonActions}, dispatch)
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label,
	});
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "it-assassin@outlook.com",
      password: "newFirst100",
      message: ""
    }

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onPressSignin = this.onPressSignin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.pressSignSignUp = this.pressSignSignUp.bind(this);
  }

  onChangeEmail(email) {
    this.setState({ email: email });
  }

  onChangePassword(password) {
    this.setState({ password: password });
  }

  onPressSignin() {
    this.props.commonActions.start('Authenticating');
    this.props.userActions.signIn(this.state.email, this.state.password).then(res => {
      if (res) {
        this.props.navigation.navigate('DashboardStack');
      } else {
        this.setState({ message: 'Async Storage Error.' });
      }
      setTimeout(() => {
        this.props.commonActions.end();
      }, 500);
    }).catch(err => {
      this.setState({ message: err.message });
      setTimeout(() => {
        this.props.commonActions.end();
      }, 500);
    });
  }

  pressSignSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {


    if (this.props.loading) {
      return (
        <Loading label={this.props.label} />
      );
    }

    return(
      <ImageBackground style={styles.homeImage} source={require('../../../assets/images/background.png')}>
        <View style={styles.container}>
          <Image style={styles.headerImage} source={require('../../../assets/images/logo_white.png')}></Image>
          <TextInput 
            onChangeText={(email) => this.onChangeEmail(email)}
            style={styles.inputField}
            value={this.state.email}
            placeholder={"Email"}/>
          <TextInput 
            secureTextEntry={ true }
            onChangeText={(password) => this.onChangePassword(password)}
            style={styles.inputField}
            value={this.state.password}
            placeholder={"Password"}/>
          <Button
            onPress={this.onPressSignin}
            buttonStyle={styles.signInButton}
            title={'Sign In'}
          />
          <Text style={styles.messageText}>{this.state.message}</Text>
          {/* <Text style={{ fontSize: 20, color: '#ffffff' }}>Or</Text>
          <LoginButton
            publishPermissions={["email"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Login failed with error: " + error.message);
                } else if (result.isCancelled) {
                  alert("Login was cancelled");
                } else {
                  alert("Login was successful with permissions: " + result.grantedPermissions)
                }
              }
            }
            onLogoutFinished={() => alert("User logged out")}/> */}
          <TouchableOpacity onPress={ this.pressSignSignUp }>
            <Text style={styles.signupText}>
              Not a Member? Sign Up {' '}
              <Image style={styles.signUpImage} source={require('../../../assets/icons/signup.png')}></Image>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeImage: {
    width: '100%',
    height: '100%',
  },
  headerImage: {
    width: 250,
    marginBottom: 15
  },
  signinText: {
    color: '#ffffff',
    width: width - 30,
    fontSize: 24,
    margin: 15
  },
  inputField: {
    padding: 10,
    width: width - 30,
    fontSize: 20,
    backgroundColor: '#ffffff',
    margin: 15
  },
  signInButton: {
    width: width - 30,
    backgroundColor: '#429321',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    margin: 15
  },
  messageText: {
    color: '#d00',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
  signupText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    padding: 30,
  },
  signUpImage: {
    width: 20,
    height: 20
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);