import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native"

interface MealItemProps {
    iconName: keyof typeof MaterialCommunityIcons.glyphMap
    mealName: string
    onAddPress: () => void
}

export default function MealItem({ iconName, mealName, onAddPress }: MealItemProps) {
    return (
        <View className='flex-row justify-between items-center mb-4 p-4 bg-white rounded-xl'>
            <View className='flex-row items-center gap-2'>
                <MaterialCommunityIcons name={iconName} size={30} color="orange" />
                <Text>{mealName}</Text>
            </View>
            <Pressable 
                className='bg-orange-500 rounded-full p-2 w-1/4 justify-center items-center'
                onPress={onAddPress}
            >
                <Text className='text-white'>+ Add</Text>
            </Pressable>
        </View>
    )
}
