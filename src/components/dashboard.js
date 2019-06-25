import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'

import Footer from './footer'
import Header from './header'
import Loading from './loading'
import * as commonActions from '../actions/common'
import * as userActions from '../actions/user'

const { height, width } = Dimensions.get('window')


const mapDispatchToProps = (dispatch) => {
  return ({
    userActions: bindActionCreators({...userActions}, dispatch),
    commonActions: bindActionCreators({...commonActions}, dispatch)
  })
}

const mapStateToProps = (state) => {
  return ({
    authedUser: state.user.authedUser,
    loading: state.common.loading,
    label: state.common.label,
  })
}



class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
    }
    this.onScrollEvent = this.onScrollEvent.bind(this)
  }

  onScrollEvent() {
    let temp = []
    for (let i = 0; i < 30; i += 1) {
      temp.push(Math.random() % 100)
    }
    this.setState({ data: temp })
  }


  render() {

    if (this.props.loading) {
      return (
        <Loading label={this.props.label} />
      )
    }

    const fill = 'rgb(134, 65, 244)'
    const data =  this.state.data

    return (

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Header header={ 'Dashboard' } />
        </View>

        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <ImageBackground style={styles.coverImage} source={require('../../assets/avatars/avatar2.jpg')}>
            </ImageBackground>
          </View>
          <View style={{ flex: 2, paddingTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
                <AnimatedCircularProgress
                  size={width/3 - 30}
                  width={10}
                  fill={20}
                  tintColor="rgb(134, 65, 244)"
                  backgroundColor="#00e0ff">
                  {
                    (fill) => (
                      <View style={{ alignItems: 'center' }}>
                        <Text style={styles.points}>20%</Text>
                        <Text style={styles.caption}>Profile</Text>
                      </View>
                    )
                  }
                </AnimatedCircularProgress>
              </View>
              <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
                <AnimatedCircularProgress
                  size={width/3 - 30}
                  width={10}
                  fill={60}
                  tintColor="rgb(134, 65, 244)"
                  backgroundColor="#00e0ff">
                  {
                    (fill) => (
                      <View style={{ alignItems: 'center' }}>
                        <Text style={styles.points}>60%</Text>
                        <Text style={styles.caption}>Score</Text>
                      </View>
                    )
                  }
                </AnimatedCircularProgress>
              </View>
              <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
                <AnimatedCircularProgress
                  size={width/3 - 30}
                  width={10}
                  fill={80}
                  tintColor="rgb(134, 65, 244)"
                  backgroundColor="#00e0ff">
                  {
                    (fill) => (
                      <View style={{ alignItems: 'center' }}>
                        <Text style={styles.points}>80%</Text>
                        <Text style={styles.caption}>Trust</Text>
                      </View>
                    )
                  }
                </AnimatedCircularProgress>
              </View>
            </View>
            {/* <View style={{ flex: 3 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: width, height: '100%' }}>
                <BarChart
                  style={{ height: '100%', width: width * 2 }}
                  data={ data }
                  svg={{ fill }}
                  contentInset={{ top: 30, bottom: 30 }}>
                  <Grid />
                </BarChart>
              </ScrollView>
            </View> */}
            <View style={{ flex: 3, padding: 5, alignItems: 'center', justifyContent: 'center' }}>
              <ScrollView onScroll={({nativeEvent}) => this.onScrollEvent(nativeEvent)} horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: width - 10, height: '100%' }}>
                <BarChart
                  style={{ height: '95%', width: width * 2 }}
                  data={ data }
                  svg={{ fill }}
                  contentInset={{ top: 30, bottom: 30 }}>
                  <Grid />
                </BarChart>
              </ScrollView>
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
  nameText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    fontSize: 24,
    padding: 10,
    backgroundColor: '#ffffff'
  },
  points: {
    fontSize: 24,
    color: '#00e0ff',
  },
  caption: {
    fontSize: 12,
    color: '#00e0ff',
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)