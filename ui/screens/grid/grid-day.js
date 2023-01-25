import { StyleSheet, Text, SafeAreaView, View, ScrollView, LayoutAnimation, UIManager, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../../../colors';

import { useIsFocused } from "@react-navigation/native";
import ArrowBackIcon from '../../../assets/images/arrow-back'
import { RubricColors } from '../../rubric-colors'
const globalStyles = require('../../../global-styles');

const GridDay = ({ route, navigation }) => {
    const { dayIndex, schedule, initialRubrics } = route.params;
    const isFocused = useIsFocused();

    const [dayShedule, setDayShedule] = React.useState();
    const [rubrics, setRubrics] = React.useState(initialRubrics);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await fetch('http://catstack.net:8106/api/schedule/getSchedule');
                const responseJson = await response.json();
                setDayShedule(responseJson.response.schedule.filter(day => day.dayNumber === dayIndex + 1)[0]);
            } catch (error) {
                console.error(error);
            }
        }

        fetchSchedule();
    }, [isFocused])

    days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']

    const wrapArray = (arr) => {
        if (arr.length > 4) {
            return [arr[0], arr[1], arr[2], '...'];
        }

        return arr;
    }

    const getColorByRubric = (rubricName) => {
        console.log(rubrics)
        if (rubricName === '...')
            return Colors.Background;

        let rubricData = rubrics.filter(rubric => rubric.name === rubricName)
        if (rubricData[0])
            return RubricColors[rubricData[0].color];

        return RubricColors[0];
    }

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <Text style={[globalStyles.header_1,]}>сетка вещания</Text>

            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                <View style={[{ borderWidth: 0, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }]}>
                    <TouchableOpacity style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                        {ArrowBackIcon()}
                    </TouchableOpacity>
                    <Text style={[{ fontFamily: 'RobotoFlex-ExtraExpanded', fontSize: 20, color: Colors.White, marginBottom: 8 }]}>{days[dayIndex]}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', marginRight: 11 }}>
                        {hours.slice(globalStartTime).map((e, index) => (
                            <View style={[styles.hourItem, { borderWidth: 0, justifyContent: 'center', width: 40 }]} key={index}>
                                <Text style={[{ fontFamily: 'RobotoFlex-ExtraExpanded', fontSize: 20, lineHeight: 23, color: Colors.White }]}>{e}</Text>
                            </View>
                        ))}
                    </View>



                    <View style={{ flexDirection: 'column' }}>
                        {dayShedule && dayShedule.slots.slice(5).map((slot, index) => {
                            console.log('slotData', slot)
                            return(
                                <TouchableOpacity key={index} onPress={() => navigation.navigate('GridSlot', { dayIndex: dayIndex, slotData: slot, rubricsData: rubrics })}>
                                    <View style={[styles.hourItem]} key={slot.index} >
                                        {slot.headings.length !== 0 && slot.headings.map((heading, index) =>
                                        (
                                            <View style={[styles.rubricItem, { backgroundColor: getColorByRubric(heading.name) }]} key={index}>
                                                <Text style={[{ fontFamily: 'RobotoFlex-ExtraExpanded', fontSize: 20, lineHeight: 23, color: Colors.White }]}>{heading.name.substring(0, 3).toLowerCase()}</Text>
                                            </View>
                                        )
                                        )}
                                    </View >
                                </TouchableOpacity>

                            )
                        })}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    hourItem: {
        borderWidth: 1,
        borderColor: Colors.White,
        height: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 282
    },

    rubricItem: {
        width: 64,
        height: 27,
        marginLeft: 4,
        marginRight: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },

    backgroundStyle: {
        justifyContent: 'flex-start',
        backgroundColor: Colors.Black,
        padding: 20,
        flex: 1,
    },
});

export default GridDay;