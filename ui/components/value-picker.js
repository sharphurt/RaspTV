import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { Colors } from '../../colors';

import ArrowDown from '../../assets/images/arrow-down'
import ArrowUp from '../../assets/images/arrow-up'

const globalStyles = require('../../global-styles');

const ValuePicker = ({ values, defaultSelected = values[0], onSelect, style }) => {
    const [selectedValue, setSelectedValue] = React.useState(defaultSelected);
    const [modalVisible, setModalVisible] = React.useState(false);

    const selectedChanged = (e) => {
        setSelectedValue(e)
        onSelect?.(e)
    }

    return (
        <View>
            <TouchableOpacity
                style={[styles.colorPicker, { borderWidth: 2, borderColor: Colors.White }]}
                onPress={(e) => setModalVisible(true)}>
                <Text style={[globalStyles.button_text, { color: Colors.Blue }]}>{selectedValue}</Text>
                {
                    modalVisible ? ArrowUp() : ArrowDown()
                }
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true} >

                <TouchableOpacity activeOpacity={1} style={{ height: '100%', justifyContent: 'center' }} onPress={() => setModalVisible(false)}>
                    <View style={styles.container}>
                        {values.map((e, index) => (
                            <TouchableOpacity key={index}
                                style={[styles.colorSample, { backgroundColor: (e === selectedValue ? Colors.Blue : Colors.Background) }]}
                                onPress={() => {
                                    setModalVisible(false)
                                    selectedChanged(e)
                                }}
                            >
                                <Text style={[globalStyles.button_text, { color: Colors.White }]}>{e}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity >

            </Modal >
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        paddingLeft: 12,
        paddingVertical: 4,
        alignItems: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginHorizontal: 20,
        backgroundColor: Colors.Background,
        borderRadius: 8,
    },

    colorSample: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%'
    },

    colorPicker: {
        width: 194,
        height: 28,
        borderRadius: 16,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ValuePicker;