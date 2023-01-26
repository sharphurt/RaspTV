import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '../../../colors';

const globalStyles = require('../../../global-styles');

const SmallIconButton = ({ text, onPress, image, color = Colors.Blue, filled = true, style }) => {
    return (
        <Pressable
            style={({ pressed }) => [{ borderColor: (pressed ? Colors.White : color), backgroundColor: filled ? color : null }, styles.button, style]} onPress={onPress}>
            {image()}
            <Text style={[globalStyles.button_text, {marginLeft: 8}]}>{text}</Text>
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
        flexDirection: 'row',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24
    },
});

export default SmallIconButton;
