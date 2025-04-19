import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '@/assets/styles'
import { SafeAreaView } from 'react-native-safe-area-context'

type ThemedViewProps = {
    styles?: StyleProp<ViewStyle>
    children?: React.ReactNode
}

const ThemedView: React.FC<ThemedViewProps> = ({ children, styles }) => {
    let view = <SafeAreaView style={globalStyles.container}>{children}</SafeAreaView>
    if (styles) {
        view = <SafeAreaView style={[globalStyles.container, styles]}>{children}</SafeAreaView>
    }
    return view
}

export default ThemedView