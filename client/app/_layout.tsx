import { Slot } from "expo-router";
import { SessionProvider } from "@/context/ctx";
import '../global.css'
import { ThemeProvider } from "@/context/theme";

export default function Root() {
	// Set up the auth context and render our layout inside of it.
	return (
		<SessionProvider>
			<ThemeProvider>
				<Slot />
			</ThemeProvider>
		</SessionProvider>
	);
}
