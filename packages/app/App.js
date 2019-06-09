/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, FlatList, AppRegistry} from 'react-native';
import NewsHeadlines from '@tcp/core/lib/core';


import Spinner from "react-native-spinkit";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {}; 


export default class AjaxFlatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: []
    }
  }
  componentDidMount() {
    this.getHeadlines();
  }
  getHeadlines = async () => {
    const newsApi = new NewsHeadlines;
    const response = await newsApi.getHeadlines();
    if (response.data && response.data.articles) {
      let headlines = response.data.articles;
      setTimeout(()=> {this.setState({
          headlines: headlines
        })
      }, 2000);
    }
  }
  render = () => {
    return (
      (this.state.headlines.length) ? 
      (<View style={styles.container}>
        <Text style={styles.welcome}>Headlines of the hour</Text>
        <FlatList data={this.state.headlines} extraData={this.state}
          renderItem={({item: article}) => (<Text style={styles.instructions}>{article.title}</Text>) }
        />
      </View>)
      :
      (<View style={styles.container}>
        <Text style={styles.welcome}>Headlines of the hour</Text>
        <Spinner type="CircleFlip" isVisible="true" style={styles.spinner} color="#333333"/>
      </View>)

    )
  }
}

AppRegistry.registerComponent("AjaxFlatList", ()=>AjaxFlatList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#000',
    marginBottom: 5,
  },
  spinner: {
    alignSelf: 'center',
    marginBottom: 50
  }
});
