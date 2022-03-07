import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import ActionGroup from './ActionGroup';
import IconBadge from '../IconBadge';

class ActionBar extends React.Component <props> {

componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <ActionGroup
          actions={[
            {name: 'plus', onPress: () => console.log('add')},
            {name: 'logout', onPress: () => console.log('logout')},
          ]}
        />
      ),
    });
  }

  render(){
      return(
          <View>
          </View>
      )
  }

}
export default ActionBar