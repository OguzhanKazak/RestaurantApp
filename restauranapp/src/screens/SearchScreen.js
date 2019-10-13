import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
                 />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={ filterResultsByPrice('₺') } title='Uygun Fiyatta'/>
                <ResultsList results={ filterResultsByPrice('₺₺') } title='Biraz Pahalı'/>
                <ResultsList results={ filterResultsByPrice('₺₺₺') } title='Lüks Mekanlar'/>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({  

});

export default SearchScreen;