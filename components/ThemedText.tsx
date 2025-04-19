import { Text } from 'react-native'
import { globalStyles } from '@/assets/styles'

type ThemedTextProps = {
    children?: React.ReactNode
}

const ThemedText: React.FC<ThemedTextProps> = ({ children }) => {

    return (
        <Text style={globalStyles.text}>{children}</Text>
    )
}

export default ThemedText