import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const FilterTag = ({title, state, handleTouch}) => {
    const [choosen, setChoosen] = useState(state === undefined? false: state);
    return (
            <TouchableOpacity style={[styles.fastFilterTag, choosen? styles.choosenTag: styles.unChoosenTag]} onPress={ () => (handleTouch === undefined) && setChoosen(!choosen)}>
                <Text style={choosen? styles.choosenTagText: styles.unChoosenTagText}>{title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    fastFilterTag: {
        padding: 10,
        borderRadius: 30,
        marginVertical: 2,
        marginEnd: 2
    },
    choosenTagText:{
        color: '#7271F1',

    },
    unChoosenTagText:{
        color: '#AAABAD'
    },
    choosenTag:{
        backgroundColor: '#DDEAFF'
    },
    unChoosenTag:{
        backgroundColor: '#F5F6FA'
    }
}



);
export default FilterTag;