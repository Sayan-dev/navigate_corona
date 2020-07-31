import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Button } from 'react-native-paper';



export const BlankHeader=()=>{
    const [focusedLocation,setFocusedLocation]=useState(
        {
            latitude:22.827662,
            longitude:88.627265,
            latitudeDelta:0.0112,
            longitudeDelta:Dimensions.get("window").width/Dimensions.get("window").height * 0.0112
        });
    return(
        <View style={styles.container}>
            <MapView
            initialRegion={focusedLocation}
            style={styles.map}
            
            />
            <View style={styles.button}>
                <Button title="Click Me"/>
            </View>

        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        width:"100%",
        alignItems:"center"
    },
    map:{
        borderWidth:1,
        borderColor:"black",
        width:"80%",
        height:150
    }

})