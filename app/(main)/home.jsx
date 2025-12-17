import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6">

        {/* Header */}
        <View className="flex-row items-center justify-between mt-14 mb-8">
          <View className="flex-row items-center">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              className="w-12 h-12 rounded-full mr-3"
            />
            <View>
              <Text className="text-gray-500 text-sm">Welcome back</Text>
              <Text className="text-lg font-bold text-gray-900">
                Gideon
              </Text>
            </View>
          </View>

          <TouchableOpacity className="w-11 h-11 bg-white rounded-full items-center justify-center shadow">
            <Ionicons name="notifications-outline" size={22} color="#2563eb" />
          </TouchableOpacity>
        </View>

        {/* Sales Card */}
        <View className="bg-blue-600 rounded-3xl p-6 mb-10 shadow-lg">
          <Text className="text-blue-100 text-sm mb-2">
            Today’s Sales
          </Text>
          <Text className="text-white text-3xl font-extrabold mb-1">
            KES 24,500
          </Text>
          <Text className="text-blue-100">
            +12% compared to yesterday
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-between mb-12">

          <ActionButton icon="scan-outline" label="Scan" />
          <ActionButton icon="add-circle-outline" label="Add Stock" />
          <ActionButton icon="cube-outline" label="Add Product" />
          <ActionButton icon="grid-outline" label="Dashboard" />

        </View>

        {/* Recent Sales */}
        <View className="bg-white rounded-3xl p-6 shadow">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-900">
              Recent Sales
            </Text>
            <Text className="text-blue-600 font-medium">
              View all
            </Text>
          </View>

          <SaleItem name="Milk 500ml" amount="KES 120" time="2 mins ago" />
          <SaleItem name="Bread" amount="KES 80" time="10 mins ago" />
          <SaleItem name="Sugar 1kg" amount="KES 230" time="30 mins ago" />
        </View>

      </View>
    </ScrollView>
  );
}

/* ---------- Components ---------- */

function ActionButton({ icon, label }) {
  return (
    <TouchableOpacity className="items-center">
      <View className="w-16 h-16 bg-white rounded-full items-center justify-center shadow mb-2">
        <Ionicons name={icon} size={24} color="#2563eb" />
      </View>
      <Text className="text-sm text-gray-700 font-medium text-center">
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function SaleItem({ name, amount, time }) {
  return (
    <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
      <View>
        <Text className="text-gray-900 font-medium">{name}</Text>
        <Text className="text-gray-400 text-sm">{time}</Text>
      </View>
      <Text className="text-gray-900 font-semibold">{amount}</Text>
    </View>
  );
}
