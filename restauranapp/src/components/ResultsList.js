import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const ResultsList = (props) => {
    if (!props.results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}> {props.title} </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor={(result) => result.id}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => props.navigation.navigate('ResultsShow', { id: item.id})}>
                                <ResultsDetail navigation={props.navigation} result={item}/>
                            </TouchableOpacity>
                        );
                    }
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }
})
export default withNavigation(ResultsList);