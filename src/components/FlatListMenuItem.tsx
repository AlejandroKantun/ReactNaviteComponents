import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core';

interface Props{
    menuItem:MenuItem
}
export const FlatListMenuItem = ({menuItem}:Props) => {
  const navigation=useNavigation()
    return(
      <TouchableOpacity 
      activeOpacity ={0.5}
      onPress={()=>navigation.navigate(menuItem.component as never)}>
          <View style={styles.container}
            >
                <Icon name={menuItem.icon} color='#5856D6' size={23}></Icon>
                <Text style={[{color:'black'}, styles.itemText]}>
                  {menuItem.name}
                </Text>
              <View style={{flex:1}}/>
                <Icon name='chevron-forward-outline' color='#5856D6' size={23}></Icon>
          </View>
      </TouchableOpacity>
      )
  
}

const styles = StyleSheet.create({
   container:{
      flexDirection:'row'
   },
   itemText:{
     marginLeft:10,
     fontSize:19
   }
});