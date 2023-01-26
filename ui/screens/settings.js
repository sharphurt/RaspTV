import { StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity, VirtualizedList, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../../colors';
import FilterIcon from '../../assets/images/filter'

import { TestSchedule } from '../../../testData/grid-test-schedule';
import LargeButton from '../components/button/large-button';
import SimpleInput from '../components/input/simple-input';
import MaskedInputWithTitle from '../components/input/masked-input-with-title';
import IconTextButton from '../components/button/icon-text-button';
import SmallIconButton from '../components/button/small-icon-button ';
import MaskInput from 'react-native-mask-input';


const globalStyles = require('../../global-styles');


const Settings = ({ navigation }) => {
    const mask = [/\d/, /\d/, ':', /\d/, /\d/];
    const portMask = [/\d/, /\d/, /\d/, /\d/];

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View style={{ flexDirection: 'column', alignSelf: 'flex-start' }}>
                <Text style={[globalStyles.header_1,]}>конфигурация</Text>
                
                    <View>
                        <Text style={[globalStyles.button_text, { color: Colors.White, marginBottom: 8 }]}>Адрес вашего сервера</Text>
                        <SimpleInput val={'catstack.net'} onChange={(v) => {}} />
                    </View>

                    <View style={{ marginTop: 16 }}>
                        <MaskedInputWithTitle val={'05:00'} title='Порт' mask={portMask} keyboardType='numeric' onChange={(v) => {}} />
                    </View>

                    <View style={{ marginTop: 16 }}>
                        <MaskedInputWithTitle title='Начало вещания' mask={mask} val={'05:00'} onChange={(v) => {}} />
                        <Text style={[globalStyles.hint_text, { color: Colors.White, marginTop: 4 }]}>Максимальное время вещания - 18 часов</Text>
                    </View>
                <SmallIconButton style={{ alignSelf: 'flex-start', marginTop: 16 }} image={FilterIcon} text='Настройка рубрик' filled={false} />
            </View>



            <View style={styles.bottomContainer}>
                <LargeButton text='Отмена' filled={false} onPress={() => { navigation.goBack() }} />
                <LargeButton text='Сохранить' style={{ marginLeft: 12 }} onPress={() => {
                    navigation.goBack()
                }} />
            </View>
        </SafeAreaView >
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
        paddingBottom: 0,
        justifyContent: 'flex-end',
        backgroundColor: Colors.Black
    },
});

export default Settings;