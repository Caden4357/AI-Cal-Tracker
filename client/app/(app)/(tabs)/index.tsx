import { Pressable, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSession } from '@/context/ctx';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NutritionRings from '@/components/NutrientDisplay/DonutChart';
import NutrientGrid from '@/components/NutrientDisplay/NutrientGrid';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Index() {
    const colorScheme = useColorScheme();
    const { signOut } = useSession();
    return (
        <ScrollView>
            <View className='flex-1 px-4 bg-transparent'>
                <StatusBar style="dark" />
                <View className='bg-white rounded-2xl p-4'>
                    <View className='flex-row justify-between items-center px-4 pt-8 w-2/4 mx-auto'>
                        <Pressable onPress={signOut}>
                            <Text>Sign Out</Text>
                        </Pressable>
                        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                        <Text className='text-2xl font-bold text-center my-4'>Today</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                    </View>
                    <View className='flex-row justify-center p-4 border-b border-gray-300'>
                        <NutritionRings
                            goal={2000}
                            eaten={1500}
                            type={'Calories (kcal)'}
                        />
                    </View>
                    <NutrientGrid
                        items={[
                            { key: "fat", label: "Fat", value: 80, goal: 90, unit: "g", color: "#F59E0B" },
                            { key: "netCarb", label: "Net Carbs", value: 145, goal: 337, unit: "g", color: "#22C55E" },
                            { key: "protein", label: "Protein", value: 100, goal: 135, unit: "g", color: "#EF4444" },
                            { key: "fiber", label: "Fiber", value: 24, goal: 34, unit: "g", color: "#6366F1" },
                            { key: "sodium", label: "Sodium", value: 2500, goal: 2000, unit: "mg", color: "#0EA5E9" },
                            { key: "sugar", label: "Sugar", value: 30, goal: 24, unit: "g", color: "#14B8A6" },
                        ]}
                    />
                </View>
                <Text className='text-2xl font-bold mx-2 my-6'>Food Intake</Text>
                <View className='flex-row justify-between items-center mb-4 p-4 bg-white rounded-xl'>
                    <View className='flex-row items-center gap-2'>
                        <MaterialIcons name="breakfast-dining" size={24} color="orange" />
                        <Text>Breakfast</Text>
                    </View>
                    <Pressable className='bg-orange-500 rounded-full p-2 w-1/4 justify-center items-center'>
                        <Text className='text-white'>+ Add</Text>
                    </Pressable>
                </View>
                <View className='flex-row justify-between items-center mb-4 p-4 bg-white rounded-xl'>
                    <View className='flex-row items-center gap-2'>
                        <MaterialIcons name="lunch-dining" size={24} color="orange" />
                        <Text>Lunch</Text>
                    </View>
                    <Pressable className='bg-orange-500 rounded-full p-2 w-1/4 justify-center items-center'>
                        <Text className='text-white'>+ Add</Text>
                    </Pressable>
                </View>
                <View className='flex-row justify-between items-center mb-4 p-4 bg-white rounded-xl'>
                    <View className='flex-row items-center gap-2'>
                        <MaterialIcons name="dinner-dining" size={24} color="orange" />
                        <Text>Dinner</Text>
                    </View>
                    <Pressable className='bg-orange-500 rounded-full p-2 w-1/4 justify-center items-center'>
                        <Text className='text-white'>+ Add</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}