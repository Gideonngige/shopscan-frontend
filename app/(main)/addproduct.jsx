import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddProduct() {
  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 pt-14">

        <Text className="text-gray-500 mb-10">
          Enter product details below
        </Text>

        {/* Product Name */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-2 font-medium">
            Product Name
          </Text>
          <TextInput
            placeholder="e.g. Sugar"
            className="bg-white rounded-2xl px-5 py-4 text-gray-900 shadow"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Product ID-barcode number */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-2 font-medium">
            Product Id (barcode number)
          </Text>
          <TextInput
            placeholder="e.g. 1234567891234"
            className="bg-white rounded-2xl px-5 py-4 text-gray-900 shadow"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Price */}
        <View className="mb-6">
          <Text className="text-gray-700 mb-2 font-medium">
            Price (Ksh)
          </Text>
          <TextInput
            placeholder="e.g. 100"
            keyboardType="numeric"
            className="bg-white rounded-2xl px-5 py-4 text-gray-900 shadow"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Quantity */}
        <View className="mb-10">
          <Text className="text-gray-700 mb-2 font-medium">
            Quantity
          </Text>
          <TextInput
            placeholder="e.g. 20 kg"
            className="bg-white rounded-2xl px-5 py-4 text-gray-900 shadow"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Add Product Button */}
        <TouchableOpacity className="bg-blue-600 py-4 rounded-2xl items-center shadow-lg">
          <Text className="text-white text-lg font-bold">
            Add Product
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
