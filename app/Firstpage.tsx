import { globalStyles } from "@/assets/styles";
import ThemedView from "@/components/ThemedView";
import { TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import ThemedText from "@/components/ThemedText";
import * as DocumentPicker from 'expo-document-picker';
import { getGroqCompletion } from "@/services/groq";
import { Link } from "expo-router";


export default function Firstpage() {
    const handlePress = async () => {
        console.log("Upload button pressed");
        DocumentPicker.getDocumentAsync({
            copyToCacheDirectory: true,
            multiple: true,
        }).then(async (result) => {
            const completion = await getGroqCompletion();
            console.log("Completion: ", completion);
            console.log("Document result: ", result);
        }
        ).catch((error) => {
            console.error("Error selecting document: ", error);
        }
        );
    }
    return (
        <ThemedView styles={{
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <ThemedText>Upload documents pertaining to class content (pdfs, audio...)</ThemedText>
            <ThemedText></ThemedText>
            <Link href={"/user/home"} asChild>
                <TouchableOpacity style={globalStyles.button}><FontAwesome6 name="upload" size={48}></FontAwesome6></TouchableOpacity>
            </Link>
        </ThemedView>
    );
}
