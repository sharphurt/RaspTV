import { StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity, VirtualizedList, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../../colors';

import { TestSchedule } from '../../../testData/grid-test-schedule';
import LargeButton from '../components/button/large-button';
const globalStyles = require('../../global-styles');

const ScheduleToday = ({ navigation }) => {

    useEffect(() => {
        const fetchTodaySchedule = async () => {
            try {
                const response = await fetch('http://catstack.net:8106/api/schedule/getTodaySchedule');
                const responseJson = await response.json();
                setTodaySchedule(responseJson.response.scheduleItems);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTodaySchedule();
    }, [])

    const [todaySchedule, setTodaySchedule] = React.useState();


    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <Text style={[globalStyles.header_1,]}>программа</Text>

            <ScrollView style={{ flexDirection: 'column', alignSelf: 'stretch', borderRadius: 8, }}>
                {
                    todaySchedule && todaySchedule.map((e, index) => {
                        return (
                        <View style={styles.item} key={index}>
                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                                <Text style={globalStyles.header_1}>{e.time}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: -8 }}>
                                    <View style={{ width: 16, height: 16, backgroundColor: Colors.Red, borderRadius: 16, marginRight: 8 }} />
                                    <Text style={globalStyles.button_text}>{e.heading.name.length >= 7 ? e.heading.name.substring(0, 7) + '...' : e.heading.name}</Text>
                                </View>
                            </View>
                            <Text style={[globalStyles.button_text, { maxWidth: 200, alignSelf: 'stretch', marginLeft: 20 }]}>
                                {e.sourceName}:
                                {"\n"}
                                {e.videoName}
                            </Text>
                        </View>)

                    })
                }


            </ScrollView>

            <View style={styles.bottomContainer}>
                <LargeButton text='Назад' filled={false} onPress={() => {navigation.goBack()}} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: Colors.Background,
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 8
    },

    backgroundStyle: {
        justifyContent: 'space-between',
        backgroundColor: Colors.Black,
        padding: 20,
        flex: 1,
    },

    bottomContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        padding: 20,
        paddingBottom: 0,
        justifyContent: 'flex-end',
        backgroundColor: Colors.Black
    },
});

export default ScheduleToday;