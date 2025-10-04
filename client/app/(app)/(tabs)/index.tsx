import { Pressable, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import NutritionRings from '@/components/NutrientDisplay/DonutChart';
import NutrientGrid from '@/components/NutrientDisplay/NutrientGrid';
import Header from '@/components/Homepage/Header';
import FoodIntake from '@/components/Homepage/FoodIntake';
export default function Index() {
    const colorScheme = useColorScheme();
    return (
        <ScrollView>
            <View className='flex-1 px-4 bg-transparent'>
                <StatusBar style="dark" />
                <View className='bg-white rounded-2xl p-4'>
                    <Header />
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
                <FoodIntake />
            </View>
        </ScrollView>
    );
}