import { router } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import '../global.css';

export default function Index() {
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6">

        {/* Top Section */}
        <View className="mt-16 mb-12">
          {/* Logo */}
          <View className="w-24 h-24 bg-white rounded-3xl items-center justify-center mb-6">
            <Image
              source={require("../assets/images2/ShopScan.png")}
              className="w-40 h-40"
              resizeMode="contain"
            />
          </View>

          {/* Headline */}
          <Text className="text-4xl font-extrabold text-gray-900 leading-tight">
            Scan smarter.{"\n"}Shop better.
          </Text>

          {/* Subtitle */}
          <Text className="text-gray-500 text-lg mt-4">
            ShopScan helps you scan products, compare prices, and make smarter
            shopping decisions instantly.
          </Text>
        </View>

        {/* Middle Highlight Card */}
        <View className="bg-blue-50 rounded-3xl p-6 shadow-sm mb-12">
          <Text className="text-blue-600 font-semibold text-sm mb-2">
            WHY SHOPSCAN?
          </Text>

          <Text className="text-gray-800 text-lg font-medium leading-7">
            • Scan barcodes in seconds{"\n"}
            • Get accurate product details{"\n"}
            • Compare prices instantly{"\n"}
            • Save money effortlessly
          </Text>
        </View>

        {/* Bottom Actions */}
        <View className="mb-6 mt-16">
          <TouchableOpacity
            onPress={() => router.push("/signup")}
            className="bg-blue-600 py-4 rounded-2xl items-center shadow-lg"
          >
            <Text className="text-white text-lg font-bold">
              Get Started
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/signin")}
            className="mt-4 items-center"
          >
            <Text className="text-gray-600">
              Already have an account?{" "}
              <Text className="text-blue-600 font-semibold">
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        

      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
