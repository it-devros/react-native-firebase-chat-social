import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

const {height,width} = Dimensions.get('window');

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mask}>
          <Text>{this.props.label}...</Text>
          <ActivityIndicator size="large" />
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
  mask: {
  }
})