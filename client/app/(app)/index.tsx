import { Text, View } from 'react-native';
import NutritionRings from '@/components/DonutChart';
import { useSession } from '@/context/ctx';

export default function Index() {
    const { signOut } = useSession();
    return (
        <View className='flex-1'>
            <Text className='text-2xl font-bold text-center my-4'>Today</Text>
            <View className='flex-row justify-between p-4 border-b border-gray-300'>
                <NutritionRings
                    goal={2000}
                    eaten={1500}
                    type={'Calories (kcal)'}
                />
                <NutritionRings
                    goal={140}
                    eaten={50}
                    type={'Protein (g)'}
                />
                <NutritionRings
                    goal={350}
                    eaten={300}
                    type={'Carbohydrates (g)'}
                />
            </View>
        </View>
    );
}