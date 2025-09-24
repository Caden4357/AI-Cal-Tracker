// app/_layout.tsx
import { DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SessionProvider } from "@/context/ctx";
import { ThemeProvider } from "@/context/theme";
import "../global.css";

const navTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "#ffedd5", // <- screen background
		card: "#ffedd5",       // <- headers/cards if you want them blue too
	},
};

export default function Root() {
	return (
		<SessionProvider>
			<ThemeProvider>
				<NavThemeProvider value={navTheme}>
					<View className="flex-1" style={{ backgroundColor: "#ffedd5" }}>
						<StatusBar style="light" backgroundColor="#ffedd5" />
						<Slot />
					</View>
				</NavThemeProvider>
			</ThemeProvider>
		</SessionProvider>
	);
}
