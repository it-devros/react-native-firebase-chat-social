import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';


import Login from './src/components/auth/login';
import SignUp from './src/components/auth/signup';
import WelcomeNew from './src/components/auth/welcomeNew';

import WelcomeScreen from './src/components/welcomeScreen';
import Dashboard from './src/components/dashboard';
import GeneralMenu from './src/components/generalMenu';

import ContactList from './src/components/contact/contactList';
import ChatWindow from './src/components/contact/chat';

import ProfileOverview from './src/components/profile/overview';


const AuthStack = StackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  WelcomeNew: { screen: WelcomeNew }
}, {
  headerMode: 'none',
});

const ContactStack = StackNavigator({
  ContactList: { screen: ContactList },
  ChatWindow: { screen: ChatWindow }
}, {
  headerMode: 'none',
});

const DashboardStack = StackNavigator({
  Dashboard: { screen: Dashboard }
}, {
  headerMode: 'none',
});

const ProfileStack = StackNavigator({
  ProfileOverview: { screen: ProfileOverview }
}, {
  headerMode: 'none',
});

const MenuStack = StackNavigator({
  Menu: { screen: GeneralMenu }
}, {
  headerMode: 'none',
});

const AppNavigator = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  AuthStack: { screen: AuthStack },
  MenuStack: { screen: MenuStack },
  DashboardStack: { screen: DashboardStack },
  ContactStack: { screen: ContactStack },
  ProfileStack: { screen: ProfileStack }
}, {
    mode: 'modal',
    headerMode: 'none',
});



const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    is_authed: state.user.is_authed,
    loading: state.common.loading,
    label: state.common.label,
	});
}




class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <AppNavigator />
    );
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(Router);
