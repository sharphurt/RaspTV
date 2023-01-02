import { StyleSheet, Text, SafeAreaView, View, ScrollView, LayoutAnimation, UIManager } from 'react-native';
import React from 'react';

import { Colors } from '../../colors';
const globalStyles = require('../../global-styles');

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View style={styles.header_controls_container} >
                <View>
                    <Text style={globalStyles.header_2}>стрим идет</Text>
                    <View style={styles.time_indicators_container}>
                        <Text style={globalStyles.button_text}>05:20</Text>
                        <Text style={globalStyles.hint_text}>7 ч 13 мин</Text>
                        <Text style={globalStyles.button_text}>01:42</Text>
                    </View>
                    <View>
                        <View style={{ borderBottomColor: Colors.Blue, borderBottomWidth: 2, borderStyle: 'dashed' }} />
                        {/* <Progress.Bar progress={0.8} width={200} height={2} borderWidth={0} color={Colors.Blue} style={{ marginTop: -2 }} /> */}
                    </View>
                </View>
          
            </View >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        justifyContent: 'space-between',
        backgroundColor: Colors.Black,
        padding: 20,
        flex: 1,
    },

    header_controls_container: {
        backgroundColor: Colors.Background,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8
    },

    time_indicators_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: 4
    }
});

export default HomeScreen;