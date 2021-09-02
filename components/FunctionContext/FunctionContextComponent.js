import React from 'react'
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponenet() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <TouchableOpacity onPress={toggleTheme} style={themeStyle}>

            <Text> PressHere! </Text> 

       </TouchableOpacity>
    )
}
