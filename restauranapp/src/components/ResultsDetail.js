import React, { useState } from 'react';
import{ View, Text, StyleSheet, Image } from 'react-native';


const ResultsDetail = (props) => {
    return(
        <View style={styles.container}>
            <Image style={styles.imgStyle} source={{uri: props.result.image_url}}/>
            <Text style={styles.restaurantTitle}>{props.result.name}</Text>
            <Text>{props.result.rating}/5 yıldız  {props.result.review_count} inceleme</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 15,  
    },
    imgStyle: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5,
    },
    restaurantTitle: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;