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

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }


  render() {

    return(

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Header header={ 'He Jing' } />
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
                <Text style={styles.title}>For Vocation, I need a boy</Text>
                <View>
                  <View style={{ alignItems: 'center', marginBottom: 5 }}>
                    <Image style={styles.bodyImage} source={require('../../../assets/images/temp.jpg')}></Image>
                  </View>
                  <Text style={styles.description}>
                    In coming summer vocation, I have to go to Malaysia. But I don't have Boy Friend.
                    So I am looking for one here.
                  </Text>
                </View>
              </View>
              <View style={styles.itemFooter}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-fill-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-outline-y.png')}></Image>
                  <Image style={styles.starImage} source={require('../../../assets/icons/star-outline-y.png')}></Image>
                </View>
              </View>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <View style={styles.commentItem}>
                <View style={styles.itemHeader}>
                  <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar2.jpg')}></Image>
                  <View style={styles.headerText}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.name}>Chao Chen</Text>
                      <Text style={styles.status}>Commented</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.time}>10 mins ago</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-outline.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-outline.png')}></Image>
                      </View>
                    </View>
                  </View>
                  <Image style={styles.menuImage} source={require('../../../assets/icons/menu-dot.png')}></Image>
                </View>
                <View style={styles.itemBody}>
                  <View>
                    <Text style={styles.description}>
                      In coming summer vocation, I have to go to Malaysia. But I don't have Boy Friend.
                      So I am looking for one here.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ alignItems: 'flex-start' }}>
              <View style={styles.commentItem}>
                <View style={styles.itemHeader}>
                  <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar2.jpg')}></Image>
                  <View style={styles.headerText}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.name}>Chao Chen</Text>
                      <Text style={styles.status}>Commented</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.time}>10 mins ago</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-outline.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-outline.png')}></Image>
                      </View>
                    </View>
                  </View>
                  <Image style={styles.menuImage} source={require('../../../assets/icons/menu-dot.png')}></Image>
                </View>
                <View style={styles.itemBody}>
                  <View>
                    <Text style={styles.description}>
                      In coming summer vocation, I have to go to Malaysia. But I don't have Boy Friend.
                      So I am looking for one here.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <View style={styles.commentItem}>
                <View style={styles.itemHeader}>
                  <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar2.jpg')}></Image>
                  <View style={styles.headerText}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.name}>Chao Chen</Text>
                      <Text style={styles.status}>Commented</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.time}>10 mins ago</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-fill.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-outline.png')}></Image>
                        <Image style={styles.starImage} source={require('../../../assets/icons/star-outline.png')}></Image>
                      </View>
                    </View>
                  </View>
                  <Image style={styles.menuImage} source={require('../../../assets/icons/menu-dot.png')}></Image>
                </View>
                <View style={styles.itemBody}>
                  <View>
                    <Text style={styles.description}>
                      In coming summer vocation, I have to go to Malaysia. But I don't have Boy Friend.
                      So I am looking for one here.
                    </Text>
                  </View>
                </View>
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
  commentItem: {
    padding: 10,
    backgroundColor: '#f79d3c',
    borderWidth: 1,
    borderColor: '#f79d3c',
    borderRadius: 5,
    margin: 10,
    width: width - 50
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



export default connect(mapStateToProps, mapDispatchToProps)(Activity);