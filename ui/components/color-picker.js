import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, { Component } from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Check from '../../assets/images/check';
import { Colors } from '../../colors';

const ColorPicker = ({ style, onSelectionChanged }) => {

    const colorSamples = [
        '#F41316',
        '#E64980',
        '#7950F2',
        '#3B5BDB',
        '#228BE6',
        '#12B886',
        '#40C057',
        '#9BBB36',
        '#FCC419',
        '#E5890C',
        '#867C65',
        '#000000'
    ];

    const [modalVisible, setModalVisible] = React.useState(false)
    const [selectedColor, setSelectedColor] = React.useState('#000000')
    const [modalPosition, setModalPosition] = React.useState({ x: 0, y: 0 })

    const changeSelection = (color) => {
        setSelectedColor(color)
        onSelectionChanged(color)
    }

    return (
        <View style={style}>
            <TouchableOpacity
                style={[styles.colorPicker, { backgroundColor: selectedColor,borderColor: Colors.White }]}
                onPress={(e) => {
                    setModalVisible(true)
                    setModalPosition({ x: e.nativeEvent.pageX - 32, y: e.nativeEvent.pageY + 12 })
                }
                }
            />

            <Modal
                style={styles.modal}
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}>
                <TouchableOpacity activeOpacity={1} style={{ height: '100%' }} onPress={() => {
                    setModalVisible(false)
                }}>
                    <View style={[styles.container, { marginLeft: modalPosition.x, marginTop: modalPosition.y }]}>
                        {colorSamples.map((color, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.colorSample, { backgroundColor: color }]}
                                onPress={() => {
                                    setModalVisible(false)
                                    changeSelection(color)
                                }}
                            >
                                {
                                    selectedColor === color ? Check() : null
                                }
                            </TouchableOpacity>
                        ))}
                    </View>
                </TouchableOpacity >
            </Modal>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 208,
        height: 64,
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: Colors.Background,
        borderRadius: 8,

        shadowColor: 'rgba(120, 135, 216, 0.7)',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 100,
        elevation: 15,
    },

    colorSample: {
        width: 16,
        height: 16,
        borderRadius: 16,
        marginHorizontal: 8,
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },

    colorPicker: {
        width: 16,
        height: 16,
        borderRadius: 16,

    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ColorPicker;