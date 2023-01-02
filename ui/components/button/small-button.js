import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '../../../colors';

const globalStyles = require('../../../global-styles');

const SmallButton = ({ text, onPress, color = Colors.Blue, filled = true, style }) => {
    return (
        <Pressable
            style={({ pressed }) => [{ borderColor: (pressed ? Colors.White : color), backgroundColor: filled ? color : null }, styles.button, style]} onPress={onPress}>
            <Text style={globalStyles.button_text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 12,
        paddingRight: 12,

        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24
    },
});

export default SmallButton;
