import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import '../global.css';

export default function Index() {
  // function to go to push notification page
  const goToPushNotification = () => {
    router.push("/notifications");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className='bg-blue-600'>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onPress={goToPushNotification}>
        <Text className="text-white">Push Notifications</Text>
      </TouchableOpacity>
    </View>
  );
}
