import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Loading from './loading'
import * as commonActions from '../actions/common'
import * as userActions from '../actions/user'

const { height, width } = Dimensions.get('window')


const mapDispatchToProps = (dispatch) => {
  return ({
    userActions: bindActionCreators({...userActions}, dispatch),
    commonActions: bindActionCreators({...commonActions}, dispatch)
  })
}

const mapStateToProps = (state) => {
  return ({
    loading: state.common.loading,
    label: state.common.label,
  })
}

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.pressSignIn = this.pressSignIn.bind(this)
  }

  componentWillMount() {
    this.props.commonActions.start('Preparing Data')
    this.props.userActions.checkAuthed().then(res => {
      if (res == true) {
        this.props.navigation.navigate('DashboardStack')
      }
      setTimeout(() => {
        this.props.commonActions.end()
      }, 500)
    }).catch(err => {
      setTimeout(() => {
        this.props.commonActions.end()
      }, 500)
      throw err
    })
  }

  pressSignIn() {
    this.props.navigation.navigate('AuthStack')
  }

  render() {

    if (this.props.loading) {
      return (
        <Loading label={this.props.label} />
      )
    }

    return(
      <ImageBackground style={styles.homeImage} source={require('../../assets/images/background.png')}>
        <View style={styles.container}>
          <Image style={styles.headerImage} source={require('../../assets/images/logo_white.png')}></Image>
          <Text style={styles.contentText}>This is a new kind of Dating App. You can look for your online friends. Enjoy your life yourself.</Text>
          <TouchableOpacity style={styles.signInButton} onPress={ this.pressSignIn }>
            <Text style={styles.signinText}>
              Sign In{' '}
              <Image style={styles.signInImage} source={require('../../assets/icons/signin.png')}></Image>
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
  contentText: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    padding: 15
  },
  signInButton: {
  },
  signinText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    padding: 30,
  },
  signInImage: {
    width: 20,
    height: 20
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)