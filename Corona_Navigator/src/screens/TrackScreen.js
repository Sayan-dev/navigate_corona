import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const TrackScreen=()=>{
    const [focusedLocation,setFocusedLocation]=useState(
        {
            latitude:22.827662,
            longitude:88.627265,
            latitudeDelta:0.0112,
            longitudeDelta:Dimensions.get("window").width/Dimensions.get("window").height * 0.0112
        });
        const [locationChosen,setLocationChosen]=useState(false);
    
    let marker;
    if(locationChosen){
        marker=<Marker coordinate={focusedLocation}></Marker>
    }
    const controllPress=(event)=>{
        const coords=event.nativeEvent.coordinate
        console.log(coords)
        setLocationChosen(true);
        setFocusedLocation(prev=>{
            return {
                ...prev,
                latitude:coords.latitude,
                longitude:coords.longitude
            }
        })
    }
    return(
        <View style={styles.container}>
            <MapView
            initialRegion={focusedLocation}
            region={focusedLocation}
            style={styles.map}
            onPress={controllPress}
            
            >{marker}</MapView>
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
        marginTop:20,
        width:"100%",
        height:500
    }

})

export default TrackScreen;