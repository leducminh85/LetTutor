import React, { useState, useContext, useEffect } from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import FilterTag from "../../component/FilterTag";
import TeacherCard from "../../component/TeacherCard";
import Header from "../../component/Header";
import { StateContext, StateProvider } from "../../Context/StateContext";

import GetTutorList from "../../Services/GetTutorList";
import GetTutorInfo from "../../Services/GetTutorInfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Teacher from '../../models/Teacher'

const Home = ({ navigation }) => {
    // const [data, setData] = useContext(StateContext)
    const [accessToken, setAccesToken] = useState()//useContext(StateContext)
    const [data, setData] = useContext(StateContext)

    const [tutorListState, setTutorListState] = useState()
    const [tutorList, setTutorList] = useState([])
    const [filterSpecialties, setFilterSpecialties] = useState('')
    const [filterTutorList, setFilterTutorList] = useState([])
    const [findByName, setFindByName] = useState('')
    const [findByCountry, setFindByCountry] = useState('')

    const [findByNameList, setFindByNameList] = useState([])
    const [findState, setFindState] = useState(false)

    const Boiler = async () => {
        try {
            const token = await AsyncStorage.getItem("token")
            if (token !== null) {
                setAccesToken(JSON.parse(token))
                setData(JSON.parse(token))
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        Boiler();
    }, []);

    useEffect(() => {
        if (accessToken !== undefined)
            GetTutorList(accessToken.access.token, 1, setTutorListState)
    }, [accessToken]);

    // useEffect(() => {
    //     if (filterSpecialties !== '') {
    //         var list = []

    //         tutorList.map((teacher) => {
    //             if (teacher.specialties.includes(filterSpecialties))
    //                 list.push(teacher)
    //         })
    //         setFindByNameList(list)
    //     }

    // }, [filterSpecialties]);

    function searchName() {
        setFindState(true)
        if (findByName !== '') {
            var list = []
            tutorList.map((teacher) => {

                if (teacher.name.includes(findByName))
                    list.push(teacher)
            })
            setFindByNameList(list)

        }
        else setFindByNameList(tutorList)


        if (findByCountry !== '') {
            var list = []
            tutorList.map((teacher) => {
                if (teacher.country?.includes(findByCountry)) {
                    console.log('first')
                    list.push(teacher)
                }
            })
            setFindByNameList(list)
        }

        if (findByName === '' && findByCountry === '') {
            setFindByNameList(tutorList)
        }

    }

    function resetFilter() {
        setFindState(false);
        setFindByName('');
        setFindByCountry('');
        setFilterTutorList([]);
        setFindByNameList([]);
    }
    useEffect(() => {
        if (tutorListState !== undefined) {
            var list = [];
            tutorListState.tutors.rows.map((teacher) => {
                var teacherVar = new Teacher(teacher.id, teacher.name, teacher.avatar, teacher.country,
                    teacher.phone, teacher.video, teacher.bio, teacher.education,
                    teacher.experience, teacher.profession, teacher.targetStudent, teacher.interests,
                    teacher.languages, teacher.specialties, teacher.rating, false, teacher.feedbacks,)

                tutorListState.favoriteTutor?.map((teacher) => {

                    if (teacher.secondInfo !== null) {
                        if (teacher.secondInfo.tutorInfo.id === teacherVar.id) {
                            teacherVar.setFavourite(true);
                        }
                    }
                })
                list.push(teacherVar);
            })
            list.sort((a, b) => (a.favourite < b.favourite) ? 1 : ((a.rating < b.rating) ? 1 : -1))
            setTutorList(list)
        }

    }, [tutorListState]);

    function tutorDetail(id, setTutorInfo) {
        if (accessToken !== undefined) GetTutorInfo(accessToken.access.token, id, setTutorInfo)
    }

    return (
        <StateProvider>
            <View style={styles.container}>
                <Header navigation={navigation} page={'home'} />
                <ScrollView>
                    <View style={styles.notification}>
                        <View style={styles.notiTitle}>
                            <Text style={styles.notiText}> Buổi học đang diễn ra</Text>
                        </View>
                        <View style={styles.timeArea}>
                            <View style={styles.classTime}>
                                <Text style={styles.timeText}>CN, 23 thg 10 22 11:00 - 11:25</Text>
                                <Text style={styles.timeLeft}> (giờ học 00:20:14)</Text>
                            </View>
                            <TouchableOpacity style={styles.gotoClassButton}>
                                <Text style={styles.gotoClassButtonText}> Vào lớp học </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.timeText}>Tổng số giờ bạn đã học là: 159 giờ 10 phút</Text>
                    </View>

                    <View style={styles.content}>
                        <View>
                            <View style={styles.filterTitle}>
                                <Text style={styles.filterTitleText}>Tìm kiếm gia sư</Text>
                            </View>
                            <View style={styles.searchName}>
                                <TextInput style={styles.input} value={findByName} onChangeText={(value) => setFindByName(value)} placeholder="Nhập tên gia sư ..."></TextInput>
                                <TextInput style={styles.input} value={findByCountry} onChangeText={(value) => setFindByCountry(value)} placeholder="Chọn quốc tịch gia sư"></TextInput>
                            </View>
                            <View style={styles.filterTime}>
                                <Text style={styles.filterTimeTitleText}>Chọn thời gian có lịch dạy trống:</Text>
                                <View style={styles.searchName}>
                                    <TextInput style={styles.input} placeholder="Chọn một ngày"></TextInput>
                                    <TextInput style={styles.input} placeholder="Giờ bắt đầu -> Giờ kết thúc"></TextInput>
                                </View>
                                <View style={styles.fastFilter}>
                                    <FilterTag title='Tất cả' onPress={() => setFilterSpecialties('')} />
                                    <FilterTag title='Tiếng Anh cho trẻ em' onPress={() => setFilterSpecialties('english-for-kids')} />
                                    <FilterTag title='Tiếng Anh cho công việc' onPress={() => setFilterSpecialties('business-english')} />
                                    <FilterTag title='Giao tiếp' onPress={() => setFilterSpecialties('conversational-english')} />
                                    <FilterTag title='STARTERS' onPress={() => setFilterSpecialties('STARTERS')} />
                                    <FilterTag title='MOVERS' onPress={() => setFilterSpecialties('MOVERS')} />
                                    <FilterTag title='FLYERS' onPress={() => setFilterSpecialties('FLYERS')} />
                                    <FilterTag title='KET' onPress={() => setFilterSpecialties('ket')} />
                                    <FilterTag title='PET' onPress={() => setFilterSpecialties('pet')} />
                                    <FilterTag title='IELTS' onPress={() => setFilterSpecialties('ielts')} />
                                    <FilterTag title='TOEFL' onPress={() => setFilterSpecialties('toefl')} />
                                    <FilterTag title='TOEIC' onPress={() => setFilterSpecialties('toeic')} />
                                </View>
                                <TouchableOpacity style={styles.resetFilter} onPress={resetFilter}>
                                    <Text style={styles.gotoClassButtonText}> Đặt lại bộ tìm kiếm </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.resetFilter, findState && { backgroundColor: '#0071F0' }]} onPress={searchName}>
                                    <Text style={[styles.gotoClassButtonText, findState && { color: 'white' }]}> Tìm kiếm </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={styles.filterTitle}>
                                <Text style={styles.filterTitleText}>Gia sư được đề xuất</Text>
                            </View>
                            <View>
                                {/* {favouriteList !== undefined ?
                                    favouriteList.map((teacher) => {
                                        if (teacher !== null)
                                            return (
                                                <TeacherCard key={teacher.id} teacherId={teacher.id} navigation={navigation} favourite={true} teacher={teacher}></TeacherCard>
                                            )
                                    }) : undefined
                                } */}

                                {findState !== true ?
                                    (tutorList !== undefined ?
                                        tutorList.map((teacher) => {
                                            return (
                                                <TeacherCard favourite={teacher.favourite} teacherId={teacher.userId} key={teacher.id} navigation={navigation} teacher={teacher} handlePress={tutorDetail}></TeacherCard>
                                            )
                                        }) : undefined)
                                    : (findByNameList.length !== 0? findByNameList.map((teacher) => {
                                        return (
                                            <TeacherCard favourite={teacher.favourite} teacherId={teacher.userId} key={teacher.id} navigation={navigation} teacher={teacher} handlePress={tutorDetail}></TeacherCard>
                                        )
                                    }) : 
                                        <Text> Danh sách trống</Text>
                                    )
                                }
                                {/* {filterSpecialties !== '' ?
                                    (tutorList !== undefined ?
                                        tutorList.map((teacher) => {
                                            return (
                                                <TeacherCard favourite={teacher.favourite} teacherId={teacher.userId} key={teacher.id} navigation={navigation} teacher={teacher} handlePress={tutorDetail}></TeacherCard>
                                            )
                                        }) : undefined)
                                    : (filterTutorList !== undefined ?
                                        filterTutorList.map((teacher) => {
                                            return (
                                                <TeacherCard favourite={teacher.favourite} teacherId={teacher.userId} key={teacher.id} navigation={navigation} teacher={teacher} handlePress={tutorDetail}></TeacherCard>
                                            )
                                        }) : undefined)
                                } */}


                            </View>

                        </View>
                    </View>

                </ScrollView>


            </View >
        </StateProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },

    notification: {
        backgroundColor: '#0071F0',
        padding: 30,
        alignItems: 'center',

    },
    notiTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    notiText: {
        color: 'white',
        fontSize: 20,
    },
    timeText: {
        color: 'white'
    },
    timeArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeLeft: {
        color: 'yellow',
    },
    classTime: {
        alignItems: 'center'
    },
    gotoClassButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        borderRadius: 20,
        margin: 20,

    },
    gotoClassButtonText: {
        color: '#0071F0',
        alignSelf: "center",
        padding: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 5,
        borderColor: '#C5C6C9',
        padding: 5,
        marginEnd: 10
    },
    content: {
        padding: 30,
        paddingTop: 10,
    },
    searchName: {
        flexDirection: 'row'
    },
    filterTitle: {
        marginVertical: 10
    },
    filterTitleText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    filterTime: {

    },
    filterTimeTitleText: {
        fontWeight: 'bold'
    },
    fastFilter: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    resetFilter: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#0071F0',
        borderRadius: 20,
        width: '50%',
        marginVertical: 10
    },


}



);

export default Home;