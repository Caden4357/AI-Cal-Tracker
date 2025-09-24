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
						// height: 60,
						elevation: 0,
						backgroundColor: "#f9f9f9",
						// borderWidth:2,
						borderTopWidth: 0,
						// paddingTop:8
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						headerShown: false,
						title: "Home",
						tabBarIcon: ({ color }) => (
							<AntDesign name="home" size={24} color={"black"} />
						),
					}}
				/>
				{/* <Tabs.Screen
				name="camera"
				options={{
					headerShown: false,
					title: "Camera",
					tabBarIcon: ({ color }) => (
						<AntDesign name="camera" size={24} color={"black"} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerShown: false,
					title: "Profile",
					tabBarIcon: ({ color }) => (
						<AntDesign name="user" size={24} color={"black"} />
					),
				}}
			/> */}
			</Tabs>
		</SafeAreaView>
	);
};

export default TabLayout;
