import { router } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import '../global.css';

export default function ForgotPassword() {
  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 px-6 justify-center">

        {/* Header */}
        <View className="items-center mt-20 mb-10">
           <View className="w-20 h-20 rounded-2xl bg-blue-600 items-center justify-center mb-4">
            <Text className="text-white text-3xl font-bold">SS</Text>
          </View>

          <Text className="text-2xl font-bold text-gray-900">
            Forgot Password?
          </Text>

          <Text className="text-gray-500 mt-2 text-center">
            Enter your email address and we’ll send you a link to reset your
            password.
          </Text>
        </View>

        {/* Email Field */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Email</Text>
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
          />
        </View>

        {/* Reset Button */}
        <TouchableOpacity className="bg-blue-600 py-4 rounded-xl items-center shadow">
          <Text className="text-white font-bold text-lg">
            Send Reset Link
          </Text>
        </TouchableOpacity>

        {/* Back to Sign In */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">
            Remember your password?
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
