import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const PeopleList = ({ people }) => {
    return (
        <View>
            {people.map((person, index) => {
               const { first } = person.name;
               return <Text key={index}>{first}</Text> 
            })}
        </View>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array.isRequired
};

export default PeopleList;