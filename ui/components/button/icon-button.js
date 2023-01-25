import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '../../../colors';

const IconButton = ({ image, onPress, color = Colors.Blue, style }) => {
    return (
        <Pressable
            style={({ pressed }) => [{ borderColor: (pressed ? Colors.White : color), backgroundColor: color }, styles.button, style]}
            onPress={onPress}>
            {image}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,

        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    }
});

export default IconButton;
