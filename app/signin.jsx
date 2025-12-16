import { router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignInScreen() {
  return (
    
      <View className="flex-1 px-6 justify-center">

        {/* Logo / App Name */}
        <View className="items-center mb-10">
          <View className="w-20 h-20 rounded-2xl bg-blue-600 items-center justify-center mb-4">
            <Text className="text-white text-3xl font-bold">SS</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-900">
            Welcome to ShopScan
          </Text>
          <Text className="text-gray-500 mt-1">
            Scan smarter. Shop better.
          </Text>
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
        <View className="mb-2">
          <Text className="text-gray-700 mb-2">Password</Text>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
          />
        </View>

        {/* Forgot password */}
        <TouchableOpacity className="items-end mb-6" onPress={() => router.push("/forgotpassword")}>
          <Text className="text-blue-600 font-medium">
            Forgot password?
          </Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity className="bg-blue-600 py-4 rounded-xl items-center shadow">
          <Text className="text-white font-bold text-lg">
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-[1px] bg-gray-200" />
          <Text className="mx-3 text-gray-400">OR</Text>
          <View className="flex-1 h-[1px] bg-gray-200" />
        </View>

        {/* Social Login */}
        <TouchableOpacity className="border border-gray-300 py-3 rounded-xl items-center mb-3">
          <Text className="text-gray-700 font-medium">
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">
            Don’t have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text className="text-blue-600 font-semibold ml-1">
            Sign Up
          </Text>
          </TouchableOpacity>
        </View>

      </View>
  );
}
