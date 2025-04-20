import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import ThemedView from '@/components/ThemedView'
import { FontAwesome } from '@expo/vector-icons'
import { globalStyles } from '@/assets/styles'

type TabIconProps = {
    name: string;
    icon: string;
    title: string;
}



const RootLayout = () => {
    return (

        <Tabs screenOptions={{
            headerShown: false, tabBarStyle: { flex: 1, backgroundColor: "#181818", borderColor: "#181818", borderRadius: 30, alignContent: 'center', position: "absolute" }, tabBarShowLabel: false,
            tabBarIconStyle: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }
        }}>
            <Tabs.Screen name="home" options={{
                title: "Home", tabBarIcon: (() => {
                    return <View><FontAwesome name="home" size={32} color="white" /></View>
                })
            }} />
            <Tabs.Screen name="add" options={{
                title: "Add", tabBarIcon: (({ color = "black" }) => {
                    return <FontAwesome name="plus-square" size={32} color={color} />
                })
            }} />
            <Tabs.Screen name="settings" options={{
                title: "Settings", tabBarIcon: (() => {
                    return <FontAwesome name="gear" size={32} color="white" />
                })
            }} />
        </Tabs >
    )
}

export default RootLayout