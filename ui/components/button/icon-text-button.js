import { StyleSheet, Text, Pressable, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../colors';

const globalStyles = require('../../../global-styles');

const IconTextButton = ({ image, text, onPress, color = Colors.Background, style }) => {
    return (
        <Pressable style={({ pressed }) => [{ borderColor: (pressed ? Colors.White : Colors.Background), backgroundColor: color }, styles.button, style]} onPress={onPress}>
            {image()}
            <Text style={[globalStyles.button_text, { marginTop: 16, width: 136, textAlign: 'center' }]}>{text}</Text>
        </Pressable >
    );
};

const styles = StyleSheet.create({
    button: {
        paddingTop: 24,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,

        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        flexDirection: 'column'
    }
});

export default IconTextButton;
