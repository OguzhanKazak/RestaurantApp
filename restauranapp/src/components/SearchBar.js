import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = (props) => {


    return (
        <View style={styles.background}>
            <Ionicons name='md-search' size={40} style={{marginHorizontal: 15, alignSelf: 'center'}} />
            <TextInput
                style={styles.search_bar}
                placeholder='Search'
                value={props.term}
                onChangeText={props.onTermChange}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={props.onTermSubmit}
                />
        </View>
    );
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 15,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    search_bar: {
        flex: 1,
        fontSize: 18,
    }
});

export default SearchBar;