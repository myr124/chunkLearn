import { StyleProp, Text, TouchableOpacity, ViewStyle, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Route } from 'expo-router'

type CourseNodeProps = {
    style?: StyleProp<ViewStyle>
    route: Route
}



const CourseNode = ({ route, style }: CourseNodeProps) => {
    let view = <Link href={route} asChild>
        <TouchableOpacity onPress={() => { console.log("pressed") }}>
        </TouchableOpacity>
    </Link>
    if (style) {
        view = <Link href={route} asChild>
            <TouchableOpacity style={style} onPress={() => { console.log("pressed") }}>
            </TouchableOpacity>
        </Link>
    }
    return view
}

export default CourseNode