import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import ThemedView from '@/components/ThemedView'
import { FontAwesome } from '@expo/vector-icons'
import { globalStyles } from '@/assets/styles'

type TabIconProps = {
    icon: string;
    focused: boolean;
}


const TabIcon = ({ focused, icon }: TabIconProps) => {
    if (focused) {
        return <FontAwesome name={icon} size={32} color="white" />
    }
    return <FontAwesome name={icon} size={32} color="#303030" />
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
                title: "Home", tabBarIcon: (({ focused }) => {
                    return <TabIcon icon="home" focused={focused} />
                })
            }} />
            <Tabs.Screen name="add" options={{
                title: "Add", tabBarIcon: (({ focused }) => {
                    return <TabIcon icon="plus-square" focused={focused} />

                })
            }} />
            <Tabs.Screen name="settings" options={{
                title: "Settings", tabBarIcon: (({ focused }) => {
                    return <TabIcon icon="cog" focused={focused} />
                })
            }} />
        </Tabs >
    )
}

export default RootLayout