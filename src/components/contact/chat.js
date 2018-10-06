import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';

import firebase from 'react-native-firebase';


const { height, width } = Dimensions.get('window');


const mapDispatchToProps = (dispatch) => {
	return ({
	});
}

const mapStateToProps = (state) => {
	return ({
    authedUser: state.user.authedUser,
	});
}

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      timestamp: null,
      messages: [],
    }

    this.ref = null;

    this.send = this.send.bind(this);
    this.append = this.append.bind(this);
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
    this.callbackFunc = this.callbackFunc.bind(this);
    this.parse = this.parse.bind(this);
  }

  componentDidMount() {

    this.setState({
      user: {
        name: "Assassin",
        _id: firebase.auth().currentUser.uid
      },
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    this.ref = firebase.database().ref('messages');
    this.on();
  }

  componentWillUnmount() {
    this.off();
  }

  send(messages) {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.state.timestamp,
      };
      this.append(message);
    }
  }

  append(message) {
    this.ref.push(message);
  }

  parse(snapshot) {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };


  callbackFunc(message) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message),
    }));
  }

  on() {
    this.ref.limitToLast(20).on('child_added', snapshot => this.callbackFunc(this.parse(snapshot)));
  }

  off() {
    this.ref.off();
  }


  render() {

    return(
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.send}
          user={this.state.user}
        />
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});



export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);