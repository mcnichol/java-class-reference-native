import React from 'react';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import {List, ListItem} from 'react-native-elements';

export default class App extends React.Component {
   render() {
      const list = [{
         title: 'Java SE',
         icon: 'favorite'
      },{
         title: 'JDK',
         icon: 'local-cafe'
      },{
         title: 'JavaFX',
         icon: 'laptop-chromebook'
      }]
      return (
         <List>
            {
               list.map((item, i) => (
                  <ListItem
                     key={i}
                     title={item.title}
                     leftIcon={{name: item.icon}}
                  />
               ))
            }
         </List>
      );
   }
}



