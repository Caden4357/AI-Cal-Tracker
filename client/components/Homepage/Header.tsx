import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function Header() {
    return (
        <View className='flex-row justify-between items-center px-4 pt-8 w-2/4 mx-auto'>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
            <Text className='text-2xl font-bold text-center my-4'>Today</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </View>
    )
};