import { router } from "expo-router";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import '../global.css';

export default function SignUpScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 justify-center">

        {/* Header */}
        <View className="items-center mt-16 mb-10">
          <View className="w-24 h-24 rounded-2xl bg-white items-center justify-center mb-4">
            <Image
              source={require("../assets/images2/ShopScan.png")}
              className="w-40 h-40"
              resizeMode="contain"
            />
          </View>
          <Text className="text-2xl font-bold text-gray-900">
            Create your account
          </Text>
          <Text className="text-gray-500 mt-1 text-center">
            Start scanning and managing your shop smarter
          </Text>
        </View>

        {/* Shop Name */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2">Shop Name</Text>
          <TextInput
            placeholder="Enter your shop name"
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
          />
        </View>

        {/* Email */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2">Email</Text>
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
          />
        </View>

        {/* Password */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2">Password</Text>
          <TextInput
            placeholder="Create a password"
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
          />
        </View>

        {/* Confirm Password */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Confirm Password</Text>
          <TextInput
            placeholder="Re-enter your password"
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity className="bg-blue-600 py-4 rounded-xl items-center shadow">
          <Text className="text-white font-bold text-lg">
            Create Account
          </Text>
        </TouchableOpacity>

        {/* Sign In Redirect */}
        <View className="flex-row justify-center mt-6 mb-8">
          <Text className="text-gray-600">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text className="text-blue-600 font-semibold ml-1">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
