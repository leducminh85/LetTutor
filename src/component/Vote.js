import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import star from '../../assets/img/star.png'

const Vote = ({ title, num }) => {
    const [choosen, setChoosen] = useState(false);
    var voteResult = [];
    for (let i = 1; i < num; i++) {
        voteResult.push(
            <Image key={i} source={star} resizeMode='contain' style={styles.star}></Image>
        )
    }

    return (
        <TouchableOpacity style={styles.stars}>
            {num === null ? <Text style={styles.noRating}>Không có đánh giá</Text> : voteResult}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    star: {
        height: 20,
        width: 20,
        marginLeft: 2
    },
    stars: {
        flexDirection: 'row'
    },
    noRating:{
        fontWeight: '400',
        fontStyle: 'italic'
    }

}



);
export default Vote;