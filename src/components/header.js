import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const { height, width } = Dimensions.get('window');


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading
	});
}



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <Text style={styles.title}>{ this.props.header }</Text>
        </View>
        <View style={styles.column2}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.iconImage} source={require('../../assets/icons/message.png')}></Image>
            <Image style={styles.iconImage} source={require('../../assets/icons/alert.png')}></Image>
            <Image style={styles.iconImage} source={require('../../assets/icons/menu-dot.png')}></Image>
          </View>
        </View>
      </View>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#42c000',
  },
  title: {
    fontSize: 24,
    color: '#ffffff'
  },
  column1: {
    flex: 5,
    padding: 10,
    alignItems: 'flex-start',
  },
  column2: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end',
  },
  iconImage: {
    width: 20,
    height: 20,
    margin: 5
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Header);