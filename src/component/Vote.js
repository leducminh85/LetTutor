import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import star from '../../assets/img/star.png'
const Vote = ({title}) => {
    const [choosen, setChoosen] = useState(false);
    return (
            <TouchableOpacity style={styles.stars}>
                <Image source={star} resizeMode='contain' style={styles.star}></Image>
                <Image source={star} resizeMode='contain' style={styles.star}></Image>
                <Image source={star} resizeMode='contain' style={styles.star}></Image>
                <Image source={star} resizeMode='contain' style={styles.star}></Image>
                <Image source={star} resizeMode='contain' style={styles.star}></Image>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    star:{
        height: 20,
        width: 20,
        marginLeft: 2
    },
    stars:{
        flexDirection: 'row'
    }
    
}



);
export default Vote;