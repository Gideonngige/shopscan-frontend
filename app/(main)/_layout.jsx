import { MaterialCommunityIcons } from '@expo/vector-icons'; // replace Ionicons
import { Tabs } from "expo-router";
import Logout from './logout';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { backgroundColor: "#2563EB" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
        headerShadowVisible: false,

        // ✅ Tab styling
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home-outline';
          }
          else if (route.name === 'products') {
            iconName = 'cube-outline';
          }
          else if (route.name === 'dashboard') {
            iconName = 'grid';
          }
          else if (route.name === 'scan') {
            iconName = 'barcode-scan';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#619ae0ff',
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home", headerRight: () => <Logout/>}} />
      <Tabs.Screen name="products" options={{ title: "Products"}} />
      <Tabs.Screen name="addproduct" options={{ href: null, title: "Add Product"}} />
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard"}} />
      <Tabs.Screen name="scan" options={{ title: "Scan"}} />
      <Tabs.Screen name="logout" options={{ href: null, title: "Logout"}} />

      
      
    </Tabs>
  );
}