// components/NutrientGrid.tsx
import React from "react";
import { View } from "react-native";
import NutrientBar from "./NutrientBar";

type Nutrient = {
    key: string;
    label: string;
    value: number;
    goal: number;
    unit?: string;
    color?: string;
};

export default function NutrientGrid({ items }: { items: Nutrient[] }) {
    // two columns: left/right
    const left = items.filter((_, i) => i % 2 === 0);
    const right = items.filter((_, i) => i % 2 === 1);

    return (
        <View className="flex-row px-4 mt-4 gap-4">
            <View className="flex-1">
                {left.map((n) => (
                    <NutrientBar
                        key={n.key}
                        label={n.label}
                        value={n.value}
                        goal={n.goal}
                        unit={n.unit}
                        color={n.color}
                    />
                ))}
            </View>

            <View style={{ flex: 1 }}>
                {right.map((n) => (
                    <NutrientBar
                        key={n.key}
                        label={n.label}
                        value={n.value}
                        goal={n.goal}
                        unit={n.unit}
                        color={n.color}
                    />
                ))}
            </View>
        </View>
    );
}
