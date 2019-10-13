import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = (props) => {

    const [businessData, setBusinessData] = useState(null);
    const id = props.navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setBusinessData(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!businessData){
        return null;
    }
    return ( 
        <View>
            <FlatList
                data={businessData.photos}
                keyExtractor={(photo,index) => index.toString()}
                renderItem={({item}) =>{
                    return <Image style={{ height: 200,width:300}} source={{ uri: item }}/>
                }}
            /> 
        </View>
    );


}
const styles = StyleSheet.create({

});

export default ResultsShowScreen;