import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

class WelcomeNew extends React.Component {
  constructor(props) {
    super(props);

    this.pressHome = this.pressHome.bind(this);
  }

  pressHome() {
    this.props.navigation.navigate('DashboardStack');
  }

  render() {

    return(
      <ImageBackground style={styles.homeImage} source={require('../../../assets/images/background.png')}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Welcome</Text>
          <Text style={styles.contentText}>Your registration is succeed. You can find your friends and post a bullet or chat with someone you want.</Text>
          <TouchableOpacity style={styles.homeButton} onPress={ this.pressHome }>
            <Text style={styles.homeText}>
              Go to Home{' '}
              <Image style={styles.nextImage} source={require('../../../assets/icons/next.png')}></Image>
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
  headerText: {
    fontSize: 38,
    color: '#ffffff',
    padding: 15,
  },
  contentText: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    padding: 15
  },
  homeButton: {
  },
  homeText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    padding: 30,
  },
  nextImage: {
    width: 20,
    height: 20
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(WelcomeNew);