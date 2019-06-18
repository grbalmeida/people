import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const PeopleList = ({ people }) => {
    return (
        <View style={styles.container}>
            {people.map((person, index) => {
               const { first } = person.name;
               return (
                   <View key={index} style={styles.line}>
                       <Text style={styles.lineText}>{first}</Text>
                   </View>
               );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    }
});

PeopleList.propTypes = {
    people: PropTypes.array.isRequired
};

export default PeopleList;