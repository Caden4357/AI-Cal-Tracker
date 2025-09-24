import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

type Props = {
    goal: number;
    eaten: number;
    type: string;
};

const colors = {
    Calories: "#FF6B6B",
    Protein: "#4ECDC4",
    Carbohydrates: "#FFD93D",
    Fat: "#F5A623",
}
const NutritionRings = ({
    goal,
    eaten,
    type
}: Props) => {
    // if eaten exceeds goal, show total eaten and 0 remaining
    const remaining = Math.max(goal - eaten, 0);
    const nutritionData = [
        { value: eaten, color: type === 'Calories (kcal)' ? colors.Calories : type === 'Protein (g)' ? colors.Protein : type === 'Carbohydrates (g)' ? colors.Carbohydrates : colors.Fat },  // eaten
        { value: remaining, color: "#EFEFEF" },  // remaining (grey)
    ];

    return (
        <View>
            <PieChart
                donut
                radius={80}
                innerRadius={60}
                data={nutritionData}
                centerLabelComponent={() => (
                    <View className="items-center gap-1">
                        <Text className="text-sm text-gray-600">Remaining</Text>
                        <Text className="text-2xl font-bold">{remaining}</Text>
                        <Text className="text-xs text-gray-400">
                            of {goal} {type}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

export default NutritionRings;