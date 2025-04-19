import { Pressable, TouchableOpacity, View } from 'react-native'
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import { Link } from 'expo-router';
import { globalStyles } from '@/assets/styles';
import { FontAwesome6 } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function index() {
    return (
        <ThemedView styles={{
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <View style={{
                flexDirection: "column",
                padding: 0,
                gap: 40,
            }}>
                <ThemedText>Lets add your first class! Give us some info about it</ThemedText>
                <TextInput style={globalStyles.input} placeholder='Name'></TextInput>
                <TextInput style={globalStyles.input} placeholder='School Level'></TextInput>
            </View>
            <Link href={"/Firstpage"} asChild>
                <TouchableOpacity style={globalStyles.button}><FontAwesome6 name="arrow-right" size={48}></FontAwesome6></TouchableOpacity>

            </Link>

        </ThemedView>
    )
}