import { TouchableOpacity } from 'react-native'
import { globalStyles } from '@/assets/styles'

type ThemedButtonProps = {
    children?: React.ReactNode
}

const ThemedButton = ({ children }: ThemedButtonProps) => {

    return (
        <TouchableOpacity style={globalStyles.button}>
            {children}
        </TouchableOpacity>
    )
}

export default ThemedButton