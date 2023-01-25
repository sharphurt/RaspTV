import { StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity, VirtualizedList, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../../colors';

import { TestSchedule } from '../../../testData/grid-test-schedule';
import LargeButton from '../components/button/large-button';
const globalStyles = require('../../global-styles');

const Settings = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <Text style={[globalStyles.header_1,]}>конфигурация</Text>

            <View style={{ flexDirection: 'column', alignSelf: 'stretch', borderRadius: 8, }}>
                
            </View>

            <View style={styles.bottomContainer}>
                <LargeButton text='Отмена' filled={false} onPress={() => { navigation.goBack() }} />
                <LargeButton text='Сохранить' style={{marginLeft: 12}} onPress={() => { navigation.goBack() }} />
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
        paddingBottom: 0,
        justifyContent: 'flex-end',
        backgroundColor: Colors.Black
    },
});

export default Settings;