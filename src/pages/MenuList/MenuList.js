import React, { useState } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import FilterTag from "../../component/FilterTag";
import TeacherCard from "../../component/TeacherCard";
import list from '../../../assets/img/list.png'

import logo from '../../../assets/img/logo.png'
import Header from "../../component/Header";

const LoginView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header></Header>
            <ScrollView>


            </ScrollView>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: 'white'
    },
});

export default LoginView;