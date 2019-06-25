import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loading from '../loading'
import * as commonActions from '../../actions/common'
import * as userActions from '../../actions/user'

const { height, width } = Dimensions.get('window')


const mapDispatchToProps = (dispatch) => {
  return ({
    userActions: bindActionCreators({...userActions}, dispatch),
    commonActions: bindActionCreators({...commonActions}, dispatch)
  })
}

const mapStateToProps = (state) => {
  return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label
  })
}

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      message: ""
    }

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onPressSignUp = this.onPressSignUp.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.pressSignSignIn = this.pressSignSignIn.bind(this)
  }

  onChangeEmail(email) {
    this.setState({ email: email })
  }

  onChangePassword(password) {
    this.setState({ password: password })
  }

  onPressSignUp() {
    this.props.commonActions.start('Registering')
    this.props.userActions.signUp(this.state.email, this.state.password).then(res => {
      if(res) {
        this.props.navigation.navigate('WelcomeNew')
      } else {
        this.setState({ message: 'Async Storage Error.' })
      }
      setTimeout(() => {
        this.props.commonActions.end()
      }, 500)
    }).catch(err => {
      this.setState({ message: err.message })
      setTimeout(() => {
        this.props.commonActions.end()
      }, 500)
    })
  }

  pressSignSignIn() {
    this.props.navigation.navigate('Login')
  }

  render() {

    if (this.props.loading) {
      return (
        <Loading label={this.props.label} />
      )
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
            onPress={this.onPressSignUp}
            buttonStyle={styles.signUpButton}
            title={'Sign Up'}
          />
          <Text style={styles.messageText}>{this.state.message}</Text>
          <TouchableOpacity onPress={ this.pressSignSignIn }>
            <Text style={styles.signinText}>
              Already Member? Sign In {' '}
              <Image style={styles.signUpImage} source={require('../../../assets/icons/signin.png')}></Image>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )

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
  signupText: {
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
  signUpButton: {
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
  signinText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    padding: 30,
  },
  signUpImage: {
    width: 20,
    height: 20
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(SignUp)