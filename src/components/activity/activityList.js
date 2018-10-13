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
                    <Text style={styles.name}>He Jing</Text>
                    <Text style={styles.status}>Posted an Action</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.time}>10 mins ago</Text>
                    <Text style={styles.followers}>64 following</Text>
                  </View>
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
                      <View style={{ alignItems: 'center', marginBottom: 5 }}>
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
              <View style={styles.itemFooter}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-outline-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-outline-y.png')}></Image>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Activity')}>
                  <Text style={styles.moreView}>
                    View More{' '}
                    <Image style={styles.moreViewImage} source={require('../../../assets/icons/next.png')}></Image>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar13.png')}></Image>
                <View style={styles.headerText}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.name}>He Jing</Text>
                    <Text style={styles.status}>Posted an Action</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.time}>10 mins ago</Text>
                    <Text style={styles.followers}>64 following</Text>
                  </View>
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
                      <View style={{ alignItems: 'center', marginBottom: 5 }}>
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
              <View style={styles.itemFooter}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Activity')}>
                  <Text style={styles.moreView}>
                    View More{' '}
                    <Image style={styles.moreViewImage} source={require('../../../assets/icons/next.png')}></Image>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar12.png')}></Image>
                <View style={styles.headerText}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.name}>He Jing</Text>
                    <Text style={styles.status}>Posted an Action</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.time}>10 mins ago</Text>
                    <Text style={styles.followers}>64 following</Text>
                  </View>
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
                      <View style={{ alignItems: 'center', marginBottom: 5 }}>
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
              <View style={styles.itemFooter}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-outline-y.png')}></Image>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Activity')}>
                  <Text style={styles.moreView}>
                    View More{' '}
                    <Image style={styles.moreViewImage} source={require('../../../assets/icons/next.png')}></Image>
                  </Text>
                </TouchableOpacity>
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
    backgroundColor: '#00d0ff',
    borderWidth: 1,
    borderColor: '#00d0ff',
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
    flex: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  status: {
    color: '#fff',
    fontSize: 12,
  },
  time: {
    flex: 1,
    fontSize: 12,
    color: '#fff'
  },
  followers: {
    fontSize: 12,
    color: '#fff'
  },
  menuImage: {
    width: 18,
    height: 18,
    marginLeft: 10,
  },
  itemBody: {

  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
  },
  directionImage: {
    width: 16,
    height: 16,
    marginBottom: 5,
    marginTop: 5,
  },
  bodyImage: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
  },
  description: {
    color: '#fff',
    fontSize: 14,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  moreView: {
    color: '#fff',
    fontSize: 16,
  },
  moreViewImage: {
    width: 16,
    height: 16
  },
  starImage: {
    width: 16,
    height: 16,
    margin: 2
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);