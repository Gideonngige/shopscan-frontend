import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import '../global.css';

export default function SignUpScreen() {
  const [shopKeeperName, setShopKeeperName] = useState("");
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!shopName || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://192.168.1.199:8000/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shopkeeper_name: shopKeeperName,
          shop_name: shopName,
          phone_number: phoneNumber,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert("Signup failed", JSON.stringify(data));
        return;
      }

      Alert.alert("Success", "Account created successfully");
      router.replace("/signin");

    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

        {/* ShopKeeper Name */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2">Shopkeeper Name</Text>
          <TextInput
            placeholder="Enter your shopkeeper name"
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            value={shopKeeperName} 
            onChangeText={setShopKeeperName}
          />
        </View>

        {/* Shop Name */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2">Shop Name</Text>
          <TextInput
            placeholder="Enter your shop name"
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            value={shopName} 
            onChangeText={setShopName}
          />
        </View>

        {/* Phone Number */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2">Phone Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            value={phoneNumber} 
            onChangeText={setPhoneNumber}
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
            value={email} 
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <View className="mb-4">
          <Text className="text-gray-700 mb-2">Password</Text>
          <TextInput
            placeholder="Create a password"
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            value={password} 
            onChangeText={setPassword}
          />
        </View>

        {/* Confirm Password */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-2">Confirm Password</Text>
          <TextInput
            placeholder="Re-enter your password"
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-900"
            value={confirmPassword} 
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          className={`py-4 rounded-xl items-center ${
            loading ? "bg-gray-400" : "bg-blue-600"
          }`}
          onPress={handleSignup}
          disabled={loading}
        >
          <Text className="text-white font-bold text-lg">
            {loading ? "Creating..." : "Create Account"}
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
