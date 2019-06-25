import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Switch } from 'react-native-switch'

import Footer from '../footer'
import Header from '../header'

const { height, width } = Dimensions.get('window')


const mapDispatchToProps = (dispatch) => {
  return ({
  })
}

const mapStateToProps = (state) => {
  return ({
  })
}

class TrustOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {

    return(

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Header header={ 'Trust & Verification' } />
        </View>

        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.label}>TRUST SCORE: </Text>
            <Text style={styles.value}>90</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 15 }}>
            <Text style={styles.label}>STRENGTH: </Text>
            <Text style={styles.value}>EXCELLENT</Text>
          </View>
          <View style={{ paddingBottom: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.label}>Phone Verification</Text>
              <View style={styles.btnPoint}>
                <Text style={styles.pointText}>20 Points</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.verifiedText}>Verified</Text>
              <Image style={styles.checkImage} source={require('../../../assets/icons/check.png')}></Image>
            </View>
          </View>
          <View style={{ paddingBottom: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.label}>Email Verification</Text>
              <View style={styles.btnPoint}>
                <Text style={styles.pointText}>20 Points</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.verifiedText}>Verified</Text>
              <Image style={styles.checkImage} source={require('../../../assets/icons/check.png')}></Image>
            </View>
          </View>
          <View style={{ paddingBottom: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.label}>ID Verification</Text>
              <View style={styles.btnPoint}>
                <Text style={styles.pointText}>50 Points</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.verifiedText}>Verified</Text>
              <Image style={styles.checkImage} source={require('../../../assets/icons/check.png')}></Image>
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

    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#ffffff',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  verifiedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#429321',
    marginRight: 10,
  },
  checkImage: {
    width: 20,
    height: 20
  },
  btnPoint: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#006DF0',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  pointText: {
    color: '#ffffff',
    fontSize: 14
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(TrustOverview)