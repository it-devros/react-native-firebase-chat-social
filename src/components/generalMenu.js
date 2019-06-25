import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Footer from './footer'
import Loading from './loading'
import * as commonActions from '../actions/common'
import * as userActions from '../actions/user'

const { height, width } = Dimensions.get('window')

const menuList = [
  {
    name: 'Dashboard',
    component: 'DashboardStack',
    params: {}
  },
  {
    name: 'Activities',
    component: 'ActivityStack',
    params: {}
  },
  {
    name: 'Contacts',
    component: 'ContactStack',
    params: {}
  },
  {
    name: 'Profile',
    component: 'ProfileStack',
    params: {}
  },
  {
    name: 'Trust & Verification',
    component: 'TrustStack',
    params: {}
  },
  {
    name: 'Settings',
    component: 'SettingStack',
    params: {}
  }
]

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
    label: state.common.label,
  })
}



class GeneralMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.handleClick = this.handleClick.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  handleClick(item) {
    this.props.navigation.navigate(item.component, item.params)
  }

  signOut() {
    this.props.commonActions.start('Sign Out')
    this.props.userActions.signOut().then(res => {
      this.props.navigation.navigate('AuthStack')
      setTimeout(() => {
        this.props.commonActions.end()
      }, 500)
    }).catch(err => {
      setTimeout(() => {
        this.props.commonActions.end()
      }, 500)
    })
  }

  render() {

    if (this.props.loading) {
      return (
        <Loading label={this.props.label} />
      )
    }

    return (
      <ImageBackground style={styles.homeImage} source={require('../../assets/images/menuBack.png')}>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={ styles.menu }>
              {
                menuList.map((item, i) => 
                  <TouchableOpacity key={i} onPress={ () => this.handleClick(item)} style={ styles.listItem }>
                      <Text style={{ fontSize: 24, color: '#ffffff'}}>{item.name}</Text>
                  </TouchableOpacity>
                )
              }
              <TouchableOpacity onPress={this.signOut} style={ styles.listItem }>
                  <Text style={{ fontSize: 24, color: '#ffffff'}}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Footer
              onPressHome={ () => this.props.navigation.navigate('DashboardStack') }
              onPressMenu={ () => this.props.navigation.navigate('MenuStack') }
            />
          </View>
        </View>
      </ImageBackground>
    )

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  homeImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  listItem: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
})



export default connect(mapStateToProps, mapDispatchToProps)(GeneralMenu)