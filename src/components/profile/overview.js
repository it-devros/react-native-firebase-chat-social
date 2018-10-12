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

class ProfileOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {

    return(

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Header mode={ 'overview' } header={ 'Profile' } />
        </View>

        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <ImageBackground style={styles.coverImage} source={require('../../../assets/avatars/avatar2.jpg')}>
            </ImageBackground>
          </View>
          <View style={{ flex: 2, padding: 10 }}>
            <View style={styles.itemRow}>
              <Text style={styles.label}>First Name</Text>
              <Text style={styles.title}>Kevin</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.label}>Last Name</Text>
              <Text style={styles.title}>Taylor</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.label}>Phone Number</Text>
              <Text style={styles.title}>+44 20 2342 5039</Text>
            </View>
            <View style={styles.item}>
            </View>
          </View>
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
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  itemRow: {
    padding: 5,
    marginBottom: 10,
    borderBottomColor: '#429321',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    padding: 5,
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#429321'
  },
  title: {
    flex: 1,
    fontSize: 16,
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(ProfileOverview);