// components/NutrientBar.tsx
import React, { useEffect, useRef } from "react";
import { View, Text, Pressable, Animated } from "react-native";

// Props that this component accepts
type Props = {
    label: string;             // nutrient name (e.g. "Protein")
    value: number;             // how much the user has consumed so far
    goal: number;              // daily target for that nutrient
    unit?: "g" | "mg" | "kcal" | string;  // unit of measurement
    color?: string;            // color of the progress fill
    onInfoPress?: () => void;  // optional callback for when user taps the (?) button
    height?: number;           // height of the progress bar
};

// A horizontal progress bar component with label, tally, and optional info button
export default function NutrientBar({
    label,
    value,
    goal,
    unit = "g",                // default to grams
    color = "#4F8EF7",         // default bar color (blue)
    onInfoPress,
    height = 8,                // default track thickness
}: Props) {
    // Clamp percentage between 0 and 1 to avoid overflow/underflow
    const pct = Math.max(0, Math.min(value / (goal || 1), 1));

    // Animated.Value used for smooth width animation
    const anim = useRef(new Animated.Value(0)).current;

    // Whenever pct changes, animate the bar width to new percentage
    useEffect(() => {
        Animated.timing(anim, {
            toValue: pct,       // target progress percentage
            duration: 500,      // half-second animation
            useNativeDriver: false, // must be false because width is a layout property
        }).start();
    }, [pct]);

    // Interpolates anim value (0 → 1) into width percentages ("0%" → "100%")
    const widthInterpolate = anim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
    });

    // Colors for background track and muted text
    const grey = "#E7E7E7";
    const textMuted = "#6B7280"; // slate-500 style

    return (
        <View style={{ marginBottom: 12 }}>
            {/* Top row: nutrient label, tally (value/goal), and optional (?) button */}
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
                {/* Nutrient name */}
                <Text style={{ flex: 1, fontSize: 14 }}>{label}</Text>

                {/* Current progress numbers (e.g. "23/56g") */}
                <Text
                    accessibilityLabel={`${value} of ${goal} ${unit}`}
                    style={{ fontSize: 13, color: textMuted, marginRight: onInfoPress ? 8 : 0 }}
                >
                    {value}/{goal}{unit}
                </Text>

                {/* Optional info button with (?) icon */}
                {/* {onInfoPress && (
                    <Pressable
                        accessibilityRole="button"
                        onPress={onInfoPress}
                        hitSlop={8} // expands tap target
                        style={{
                            width: 18, height: 18, borderRadius: 9,
                            alignItems: "center", justifyContent: "center",
                            backgroundColor: "#F1F5F9",
                        }}
                    >
                        <Text style={{ fontSize: 12, color: textMuted }}>?</Text>
                    </Pressable>
                )} */}
            </View>

            {/* Background track (grey bar) */}
            <View
                style={{
                    height,
                    backgroundColor: grey,
                    borderRadius: 999, // fully rounded ends
                    overflow: "hidden", // ensures fill doesn’t spill outside
                }}
            >
                {/* Animated fill that grows according to progress */}
                <Animated.View
                    style={{
                        height: "100%",
                        width: widthInterpolate, // animated width from 0% → 100%
                        backgroundColor: color,
                        borderRadius: 999, // rounded ends
                    }}
                />
            </View>
        </View>
    );
}
