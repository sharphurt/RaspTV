import { StyleSheet, Text, SafeAreaView, View, Modal, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../../../colors';
import ArrowBackIcon from '../../../assets/images/arrow-back'

import { RubricColors } from '../../rubric-colors'
import SmallButton from '../../components/button/small-button';
import LargeButton from '../../components/button/large-button';
import ColorPicker from '../../components/color-picker';
import SimpleInput from '../../components/input/simple-input';
import ValuePicker from '../../components/value-picker';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
const globalStyles = require('../../../global-styles');

const GridSlot = ({ route, navigation }) => {

    const { dayIndex, slotData, rubricsData } = route.params;
    const [rubrics, setRubrics] = React.useState(slotData.headings.map(heading => heading.name))
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalSelectedRubric, setModalSelectedRubric] = React.useState(rubricsData.filter(rubric =>!rubrics.includes(rubric.name)).map(rubric => rubric.name)[0]);

    days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']

    const getColorByRubric = (rubricName) => {
        let r = rubricsData.filter(rubric => rubric.name === rubricName)[0]
        if (r)
            return RubricColors[r.color];

        return RubricColors[0];
    }

    const getRubricByName = (name) => {
        return rubricsData.filter(rubric => rubric.name === name)[0]
    }

    const [response, setResponse] = React.useState(null);

    const deleteRubric = async (name) => {
        try {
            let newRubricsList = rubrics.filter(rubric => rubric !== name);

            const res = await fetch('http://catstack.net:8106/api/schedule/setSlotHeading', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dayNumber: dayIndex + 1,
                    headings: newRubricsList,
                    hour: slotData.hour,
                }),
            });

            const json = await res.json();
            setResponse(json);
            setRubrics(newRubricsList)

        } catch (error) {
            console.error(error);
        }
    }

    const addRubric = async () => {
        try {
            let newRubricsList = rubrics;
            newRubricsList.push(modalSelectedRubric)

            const res = await fetch('http://catstack.net:8106/api/schedule/setSlotHeading', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dayNumber: dayIndex + 1,
                    headings: newRubricsList,
                    hour: slotData.hour,
                }),
            });

            const json = await res.json();
            setResponse(json);
            console.log(json)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <Text style={[globalStyles.header_1,]}>слот</Text>

                <Modal visible={modalVisible} animationType='fade' transparent={true} onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View style={styles.fullScreen}>
                        <View style={styles.modalView}>
                            <Text style={[globalStyles.button_text, styles.modalHeader]}>Добавление рубрики</Text>
                            <View style={{ flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center' }}>
                                <View style={{ width: 16, height: 16, backgroundColor: getColorByRubric(modalSelectedRubric), borderRadius: 16, marginRight: 8 }} ></View>
                                <ValuePicker values={rubricsData.filter(rubric =>!rubrics.includes(rubric.name)).map(rubric => rubric.name)} onSelect={(e) => setModalSelectedRubric(e)} />
                                {/* <SimpleInput style={{ flex: 1 }} onChange={setModalRubricName} placeholder='Имя' /> */}
                            </View>
                            <View style={styles.modalButtonContainer}>
                                <SmallButton style={styles.leftButton} filled={false} text='Отмена' onPress={() => setModalVisible(false)} />
                                <SmallButton text='Добавить' onPress={() => {
                                    addRubric()
                                    setModalVisible(false)
                                }} />
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={[{ borderWidth: 0, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }]}>
                    <TouchableOpacity style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                        {ArrowBackIcon()}
                    </TouchableOpacity>
                    <Text style={[{ fontFamily: 'RobotoFlex-ExtraExpanded', fontSize: 20, color: Colors.White, marginBottom: 8 }]}>{days[dayIndex]}, {slotData.hour.toString().padStart(2, '0') + ":00"}</Text>
                </View>

               {rubrics.length !== 0 && <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>

                    {rubrics.map((heading) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', paddingVertical: 12, paddingHorizontal: 16, marginBottom: 8, backgroundColor: Colors.Background, borderRadius: 8 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <View style={{ borderRadius: 16, width: 16, height: 16, marginRight: 8, backgroundColor: getColorByRubric(heading) }} />
                                <Text style={globalStyles.button_header_1}>{heading}</Text>
                            </View>

                            <SmallButton text='Удалить' color={Colors.Red} onPress={() => deleteRubric(heading)} />
                        </View>
                    ))}
                </View>}

                {
                    rubrics.length === 0 && <Text style={[globalStyles.button_text, {alignSelf: 'center', textAlign: 'center', marginTop: 16}]}>
                        В этом слоте не выбрано ни одной рубрики
                    </Text>
                }
            </View>
            <View style={styles.bottom_container}>
                <LargeButton disabled={rubrics.length >= 4} onPress={() => setModalVisible(true)} style={{ opacity: rubrics.length >= 4 ? 0.5 : 1 }} text='Добавить рубрику' />
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    hourItem: {
        borderWidth: 1,
        borderColor: Colors.White,
        height: 30,
        flexDirection: 'row',
        alignItems: 'flex-start'
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
        justifyContent: 'space-between',
        backgroundColor: Colors.Black,
        padding: 20,
        flex: 1,
    },

    modalView: {
        padding: 16,
        margin: 20,
        marginTop: 100,
        backgroundColor: Colors.Background,
        borderRadius: 8
    },

    fullScreen: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    modalButtonContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: 16
    },

    leftButton: {
        marginRight: 12
    },

    modalHeader: {
        marginBottom: 8
    },
});

export default GridSlot;