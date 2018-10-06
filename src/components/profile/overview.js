import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Footer from '../footer';
import Header from '../header';

const { height, width } = Dimensions.get('window');


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
	});
}

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {

    return(

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Header header={ 'Profile' } />
        </View>

        <View style={styles.container}>
        </View>

        <View style={{ flex: 1 }}>
          <Footer
            onPressHome={ () => this.props.navigation.navigate('DashboardStack') }
            onPressMenu={ () => this.props.navigation.navigate('MenuStack') }
          />
        </View>

      </View>

    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#ffffff'
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Overview);