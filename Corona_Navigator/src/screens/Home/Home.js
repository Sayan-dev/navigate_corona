import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
    const placesHandler=()=>{

       navigation.navigate('TrackScreen')
    // navigation.toggleDrawer()
    }
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <TouchableOpacity>
                <Button onPress={placesHandler} title="Lets Go!!"></Button>
            </TouchableOpacity>
        </View>
    );
};
HomeScreen.options = {
    topBar: {
      title: {
        text: 'Home',
        color: 'white',
     
      },
      
      background: {
        color: '#1976D2'
      }
    }
  }
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"whitesmoke",
        alignItems:"center",
        justifyContent:"center"
    }
})

export default HomeScreen;