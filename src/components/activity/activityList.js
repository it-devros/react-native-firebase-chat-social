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

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: false,
      item2: false,
      item3: false,
    }

    this.clickTitle = this.clickTitle.bind(this);
  }

  clickTitle(val) {
    if (val == 1) {
      if (this.state.item1 == false) {
        this.setState({ item1: true });
      } else {
        this.setState({ item1: false });
      }
    }
    if (val == 2) {
      if (this.state.item2 == false) {
        this.setState({ item2: true });
      } else {
        this.setState({ item2: false });
      }
    }
    if (val == 3) {
      if (this.state.item3 == false) {
        this.setState({ item3: true });
      } else {
        this.setState({ item3: false });
      }
    }
  }

  render() {

    return(

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Header header={ 'Activities' } />
        </View>

        <View style={styles.container}>
          <ScrollView>

            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar1.png')}></Image>
                <View style={styles.headerText}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.name}>Xia Qing</Text>
                    <Text style={styles.status}>Posted an Action</Text>
                  </View>
                  <Text style={styles.time}>10 mins ago</Text>
                </View>
                <Image style={styles.menuImage} source={require('../../../assets/icons/menu-dot.png')}></Image>
              </View>
              <View style={styles.itemBody}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={ () => this.clickTitle(1) }>
                  <Text style={styles.title}>For Vocation, I need a boy</Text>
                  {
                    this.state.item1 == true ?
                      <Image style={styles.directionImage} source={require('../../../assets/icons/arrow-up.png')}></Image>
                    :
                      <Image style={styles.directionImage} source={require('../../../assets/icons/arrow-down.png')}></Image>
                  }                  
                </TouchableOpacity>
                {
                  this.state.item1 == true ?
                    <View>
                      <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <Image style={styles.bodyImage} source={require('../../../assets/images/temp.jpg')}></Image>
                      </View>
                      <Text style={styles.description}>
                        In coming summer vocation, I have to go to Malaysia. But I don't have Boy Friend.
                        So I am looking for one here.
                      </Text>
                    </View>
                  : null
                }
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar13.png')}></Image>
                <View style={styles.headerText}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.name}>Xia Qing</Text>
                    <Text style={styles.status}>Posted an Action</Text>
                  </View>
                  <Text style={styles.time}>10 mins ago</Text>
                </View>
                <Image style={styles.menuImage} source={require('../../../assets/icons/menu-dot.png')}></Image>
              </View>
              <View style={styles.itemBody}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={ () => this.clickTitle(2) }>
                  <Text style={styles.title}>For Vocation, I need a boy</Text>
                  {
                    this.state.item2 == true ?
                      <Image style={styles.directionImage} source={require('../../../assets/icons/arrow-up.png')}></Image>
                    :
                      <Image style={styles.directionImage} source={require('../../../assets/icons/arrow-down.png')}></Image>
                  } 
                </TouchableOpacity>
                {
                  this.state.item2 == true ?
                    <View>
                      <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <Image style={styles.bodyImage} source={require('../../../assets/images/temp.jpg')}></Image>
                      </View>
                      <Text style={styles.description}>
                        In coming summer vocation, I have to go to Malaysia. But I don't have Boy Friend.
                        So I am looking for one here.
                      </Text>     
                    </View>
                  : null
                }
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar12.png')}></Image>
                <View style={styles.headerText}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.name}>Xia Qing</Text>
                    <Text style={styles.status}>Posted an Action</Text>
                  </View>
                  <Text style={styles.time}>10 mins ago</Text>
                </View>
                <Image style={styles.menuImage} source={require('../../../assets/icons/menu-dot.png')}></Image>
              </View>
              <View style={styles.itemBody}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={ () => this.clickTitle(3) }>
                  <Text style={styles.title}>For Vocation, I need a boy</Text>
                  {
                    this.state.item1 == true ?
                      <Image style={styles.directionImage} source={require('../../../assets/icons/arrow-up.png')}></Image>
                    :
                      <Image style={styles.directionImage} source={require('../../../assets/icons/arrow-down.png')}></Image>
                  } 
                </TouchableOpacity>
                {
                  this.state.item3 == true ?
                    <View>
                      <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <Image style={styles.bodyImage} source={require('../../../assets/images/temp.jpg')}></Image>
                      </View>
                      <Text style={styles.description}>
                        In coming summer vocation, I have to go to Malaysia. But I don't have Boy Friend.
                        So I am looking for one here.
                      </Text>
                    </View>
                  : null
                }
              </View>
            </View>

          </ScrollView>
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
  item: {
    padding: 10,
    backgroundColor: '#f8ac59',
    borderWidth: 1,
    borderColor: '#f8ac59',
    borderRadius: 5,
    margin: 10
  },
  itemHeader: {
    flexDirection: 'row',
  },
  avatarImage: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  headerText: {
    flex: 1,
    paddingLeft: 10,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  status: {
    color: '#fff',
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: '#fff'
  },
  menuImage: {
    width: 20,
    height: 20
  },
  itemBody: {

  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
  },
  directionImage: {
    width: 20,
    height: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  bodyImage: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
  },
  description: {
    color: '#fff',
    fontSize: 16,
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);