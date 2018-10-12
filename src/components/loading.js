import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const {height,width} = Dimensions.get('window');

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mask}>
          <Image style={styles.iconImage} source={require('../../assets/icons/loading.gif')}></Image>
          <Text style={styles.title}>{this.props.label}...</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 0,
    left: 0,
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    alignItems: 'center'
  },
  mask: {
    alignItems: 'center'
  },
  iconImage: {
    width: 100,
    height: 100
  }
})