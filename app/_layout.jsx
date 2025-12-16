import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{
    headerShown: true,
    headerStyle: { backgroundColor: "#2563EB" },
    headerTintColor: "#fff",
    headerTitleStyle: { fontWeight: "bold" },
    headerTitleAlign: "center",
    headerShadowVisible: false,
    animation: "fade_from_bottom",
    animationDuration: 300,
    headerBackTitleVisible: false,
    headerBackTitle: "Back",
    headerBackAllowFontScaling: true,
    headerBackAccessibilityLabel: "Go back",
    headerBackAccessibilityRole: "button",
    headerBackAccessibilityHint: "Returns to the previous screen",
    }}>
    <Stack.Screen name="index"options={{title:"Welcome", headerShown:false}}  />
    <Stack.Screen name="notifications"options={{title:"Notifications"}}  />
    
  </Stack>
  )
}