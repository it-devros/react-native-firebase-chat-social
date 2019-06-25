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

class SettingsOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notifySwitch: true,
    }

    this.onChangeNotify = this.onChangeNotify.bind(this)
  }

  onChangeNotify(val) {
    this.setState({ notifySwitch: val })
  }

  render() {

    return(

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Header header={ 'Settings' } />
        </View>

        <View style={styles.container}>
          <View style={styles.itemRow}>
            <Text style={styles.label}>Notification</Text>
            <View style={styles.value}>
              <Switch value={this.state.notifySwitch} onValueChange={(val) => this.onChangeNotify(val)}></Switch>
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
    backgroundColor: '#ffffff'
  },
  itemRow: {
    padding: 15,
    marginBottom: 5,
    flexDirection: 'row',
  },
  label: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#429321'
  },
  value: {
    flex: 1,
    alignItems: 'flex-end'
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(SettingsOverview)