import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const TabLayout = () => {
	return (
		<SafeAreaView className="flex-1">
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						height: 80,
						elevation: 0,
						backgroundColor: "#ffedd5",
						borderTopWidth: 0,
						borderBottomColor: "#ffffff",
						borderBottomWidth: 1,
						paddingTop: 8,
						paddingBottom: 8,
						paddingHorizontal: 16,
					},
					tabBarLabelStyle: {
						fontSize: 12,
						fontWeight: "600",
						marginTop: 4,
					},
					tabBarActiveTintColor: "#e8a87c",
					tabBarInactiveTintColor: "#6B7280",
					tabBarIconStyle: {
						marginTop: 4,
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						headerShown: false,
						title: "Home",
						tabBarIcon: ({ color, focused }) => (
							<AntDesign 
								name="home" 
								size={24} 
								color='#e8a87c' 
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="camera"
					options={{
						headerShown: false,
						title: "Camera",
						tabBarIcon: ({ color, focused }) => (
							<AntDesign 
								name="camera" 
								size={24} 
								color='#e8a87c' 
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						headerShown: false,
						title: "Profile",
						tabBarIcon: ({ color, focused }) => (
							<AntDesign 
								name="user" 
								size={24} 
								color='#e8a87c' 
							/>
						),
					}}
				/>
			</Tabs>
		</SafeAreaView>
	);
};

export default TabLayout;
