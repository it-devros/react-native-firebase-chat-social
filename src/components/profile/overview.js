import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, processColor } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RadarChart } from '@merryjs/react-native-charts'
import update from 'immutability-helper'

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

class ProfileOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      legend: {
        enabled: false,
        textSize: 14,
        form: 'CIRCLE',
        wordWrapEnabled: true,
        lineWidth: 2
      }
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{value: 8}, {value: 10}, {value: 7}, {value: 10}, {value: 9}],
              label: 'DS 1',
              config: {
                color: processColor('rgb(134, 65, 244)'),
                drawFilled: true,
                fillColor: processColor('rgb(134, 65, 244)'),
                fillAlpha: 100,
                lineWidth: 2
              }
            }],
          }
        },
        xAxis: {
          $set: {
            valueFormatter: ['A', 'B', 'C', 'D', 'E']
          }
        }
      })
    )
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
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
              <View style={{ flex: 4 }}>
                <RadarChart
                  style={styles.chart}
                  data={this.state.data}
                  xAxis={this.state.xAxis}
                  description={{text: 'Profile'}}
                  legend={this.state.legend}
                />
              </View>
              <View style={{ flex: 3, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row' , paddingBottom: 5, paddingLeft: 15, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, color: 'rgb(134, 65, 244)', marginRight: 10 }}>A</Text>
                  <Text style={{ fontSize: 16, color: '#00e0ff' }}>Strength</Text>
                </View>
                <View style={{ flexDirection: 'row' , paddingBottom: 5, paddingLeft: 15, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, color: 'rgb(134, 65, 244)', marginRight: 10 }}>B</Text>
                  <Text style={{ fontSize: 16, color: '#00e0ff' }}>Intelligence</Text>
                </View>
                <View style={{ flexDirection: 'row' , paddingBottom: 5, paddingLeft: 15, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, color: 'rgb(134, 65, 244)', marginRight: 10 }}>C</Text>
                  <Text style={{ fontSize: 16, color: '#00e0ff' }}>Ability</Text>
                </View>
                <View style={{ flexDirection: 'row' , paddingBottom: 5, paddingLeft: 15, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, color: 'rgb(134, 65, 244)', marginRight: 10 }}>D</Text>
                  <Text style={{ fontSize: 16, color: '#00e0ff' }}>Emotion</Text>
                </View>
                <View style={{ flexDirection: 'row' , paddingBottom: 5, paddingLeft: 15, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, color: 'rgb(134, 65, 244)', marginRight: 10 }}>E</Text>
                  <Text style={{ fontSize: 16, color: '#00e0ff' }}>Angry</Text>
                </View>
                <View style={{ flexDirection: 'row' , paddingBottom: 5, paddingLeft: 15, alignItems: 'center' }}>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-outline.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-outline.png')}></Image>
                </View>
              </View>
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
  coverImage: {
    width: '100%',
    height: '100%',
  },
  itemRow: {
    padding: 5,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
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
  },
  rating: {
    padding: 10,
    flexDirection: 'row'
  },
  starImage: {
    width: 20,
    height: 20,
    margin: 2
  },
  chart: {
    width: '100%',
    height: '100%'
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(ProfileOverview)