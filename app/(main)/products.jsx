import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import '../../global.css';

export default function Products() {
  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 pt-14">

        {/* Top Controls */}
        <View className="flex-row items-center mb-8">

          {/* Search */}
          <View className="flex-1 flex-row items-center bg-white rounded-2xl px-4 py-3 shadow mr-3">
            <Ionicons name="search-outline" size={20} color="#9ca3af" />
            <TextInput
              placeholder="Search product..."
              className="ml-2 flex-1 text-gray-800"
              placeholderTextColor="#9ca3af"
            />
          </View>

          {/* Add Product */}
          <TouchableOpacity className="bg-blue-600 w-14 h-14 rounded-2xl items-center justify-center shadow" onPress={() => router.push('/addproduct')}>
            <Ionicons name="add" size={26} color="white" />
          </TouchableOpacity>

        </View>

        {/* Products List */}
        <View className="space-y-4">

          <ProductItem
            name="Sugar"
            price="Ksh 100"
            stock="20 kg"
          />

          <ProductItem
            name="Rice"
            price="Ksh 180"
            stock="35 kg"
          />

          <ProductItem
            name="Cooking Oil"
            price="Ksh 350"
            stock="15 Litres"
          />

        </View>

      </View>
    </ScrollView>
  );
}

/* ---------- Components ---------- */

function ProductItem({ name, price, stock }) {
  return (
    <View className="bg-white rounded-3xl p-5 mb-4 shadow flex-row items-center justify-between">

      {/* Product Info */}
      <View>
        <Text className="text-lg font-bold text-gray-900">{name}</Text>
        <Text className="text-gray-500 mt-1">
          {price} • {stock}
        </Text>
      </View>

      {/* Add Stock */}
      <TouchableOpacity className="bg-blue-100 px-4 py-2 rounded-xl">
        <Text className="text-blue-600 font-semibold">
          Add Stock
        </Text>
      </TouchableOpacity>

    </View>
  );
}
