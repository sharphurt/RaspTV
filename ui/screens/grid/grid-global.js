import { StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../../../colors';

import { TestSchedule } from '../../../testData/grid-test-schedule';
const globalStyles = require('../../../global-styles');

const GridGlobal = ({ navigation }) => {

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await fetch('http://catstack.net:8106/api/schedule/getSchedule');
                const responseJson = await response.json();
                setSchedule(responseJson.response.schedule);
            } catch (error) {
                console.error(error);
            }
        }

        fetchSchedule();

        const fetchRubrics = async () => {
            try {
                const response = await fetch('http://catstack.net:8106/api/headings/getHeadings');
                const responseJson = await response.json();
                setRubrics(responseJson.response.headings);

                console.log('rubrics', responseJson.response)
            } catch (error) {
                console.error(error);
            }
        }

        fetchRubrics();
    }, [])

    const wrapArray = (arr) => {
        if (arr.length > 3) {
            return [arr[0], arr[1], '...'];
        }

        return arr;
    }

    hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

    globalStartTime = 5

    const DayItem = ({ item }) => {
        return item && <View style={styles.dayItem} key={item.id}>
            {item.slots.filter(slot => slot.hour >= globalStartTime).sort(slot => slot.hour).map((slot) => (


                <View style={[styles.hourItem]} key={slot.id}>
                    {wrapArray(slot.headings).map(heading =>
                        <Text style={[{ fontFamily: 'RobotoFlex-ExtraExpanded', fontSize: 8, lineHeight: 8, color: Colors.White }]}>{heading.name.substring(0, 3).toLowerCase()}</Text>
                    )}
                </View>
            ))}
        </View >;
    };

    const [schedule, setSchedule] = React.useState();
    const [rubrics, setRubrics] = React.useState();


    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <Text style={[globalStyles.header_1,]}>сетка вещания</Text>

            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row', marginBottom: 11, marginLeft: 11 }}>
                    <View style={[styles.hourItem, { borderWidth: 0, justifyContent: 'center' }]} />

                    {days.map((e, index) => (
                        <TouchableOpacity style={[styles.hourItem, { borderWidth: 0, justifyContent: 'center' }]} key={e} onPress={() => navigation.navigate('GridDay', { dayIndex: index, schedule: schedule, initialRubrics: rubrics })}>
                            <Text style={[{ fontFamily: 'RobotoFlex-ExtraExpanded', fontSize: 20, lineHeight: 23, color: Colors.White }]}>{e}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', marginRight: 11 }}>
                        {hours.slice(globalStartTime).map((e) => (
                            <View style={[styles.hourItem, { borderWidth: 0, justifyContent: 'center' }]} key={e}>
                                <Text style={[{ fontFamily: 'RobotoFlex-ExtraExpanded', fontSize: 20, lineHeight: 23, color: Colors.White }]}>{e}</Text>
                            </View>
                        ))}
                    </View>
                    <FlatList data={schedule} renderItem={DayItem} numColumns={7} keyExtractor={(item) => item.toString()} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    hourItem: {
        borderWidth: 1,
        borderColor: Colors.White,
        width: 40,
        height: 30,
        flexDirection: 'column',
        alignItems: 'center'
    },

    dayItem: {
        borderWidth: 1,
        borderColor: Colors.White,
        width: 40,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',

    },
    backgroundStyle: {
        justifyContent: 'flex-start',
        backgroundColor: Colors.Black,
        padding: 20,
        flex: 1,
    },
});

export default GridGlobal;