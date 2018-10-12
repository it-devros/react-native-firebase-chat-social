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

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.onPressItem = this.onPressItem.bind(this);
  }

  onPressItem() {
    this.props.navigation.navigate('ChatWindow');
  }


  render() {

    return(

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <Header header={ 'Contacts' } />
        </View>

        <View style={styles.container}>
          <ScrollView>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar1.png')}></Image>
              <Text style={styles.itemText}>
                April
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar2.jpg')}></Image>
              <Text style={styles.itemText}>
                Assassin
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar3.jpg')}></Image>
              <Text style={styles.itemText}>
                Julia
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar4.jpg')}></Image>
              <Text style={styles.itemText}>
                Jang
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar5.jpg')}></Image>
              <Text style={styles.itemText}>
                Xung
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar6.jpg')}></Image>
              <Text style={styles.itemText}>
                Li
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar7.jpg')}></Image>
              <Text style={styles.itemText}>
                So Yon
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar8.jpg')}></Image>
              <Text style={styles.itemText}>
                Ryu
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar9.jpg')}></Image>
              <Text style={styles.itemText}>
                Kim
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar10.jpg')}></Image>
              <Text style={styles.itemText}>
                Pak
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar11.jpg')}></Image>
              <Text style={styles.itemText}>
                Ju
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar12.png')}></Image>
              <Text style={styles.itemText}>
                Xin
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={ this.onPressItem }>
              <Image style={styles.avatarImage} source={require('../../../assets/avatars/avatar13.png')}></Image>
              <Text style={styles.itemText}>
                Song
              </Text>
              <Image style={styles.chatImage} source={require('../../../assets/icons/call.png')}></Image>
            </TouchableOpacity>
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
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 24,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#429321'
  },
  avatarImage: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  chatImage: {
    width: 24,
    height: 24,
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(ContactList);