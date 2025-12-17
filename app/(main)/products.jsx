import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import "../../global.css";

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
          <View className="flex-1 flex-row items-center bg-white rounded-2xl px-4 py-3 shadow mr-3">
            <Ionicons name="search-outline" size={20} color="#9ca3af" />
            <TextInput
              placeholder="Search product..."
              className="ml-2 flex-1 text-gray-800"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <TouchableOpacity
            className="bg-blue-600 w-14 h-14 rounded-2xl items-center justify-center shadow"
            onPress={() => router.push("/addproduct")}
          >
            <Ionicons name="add" size={26} color="white" />
          </TouchableOpacity>
        </View>

        {/* Products List */}
        <ProductItem name="Sugar" price="100" stock="20 kg" />
        <ProductItem name="Rice" price="180" stock="35 kg" />
        <ProductItem name="Cooking Oil" price="350" stock="15 Litres" />

      </View>
    </ScrollView>
  );
}

/* ---------- Product Item ---------- */

function ProductItem({ name, price, stock }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [newStock, setNewStock] = useState("");
  const [newPrice, setNewPrice] = useState(price);

  return (
    <>
      <View className="bg-white rounded-3xl p-5 mb-4 shadow flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-bold text-gray-900">{name}</Text>
          <Text className="text-gray-500 mt-1">
            Ksh {newPrice} • {stock}
          </Text>
        </View>

        <TouchableOpacity
          className="bg-blue-100 px-4 py-2 rounded-xl"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-blue-600 font-semibold">
            Add Stock
          </Text>
        </TouchableOpacity>
      </View>

      {/* Add Stock Modal */}
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 bg-black/40 justify-center px-6">
          <View className="bg-white rounded-3xl p-6">

            <Text className="text-xl font-bold text-gray-900 mb-4">
              Update Product
            </Text>

            {/* Edit Price */}
            <Text className="text-gray-700 mb-2 font-medium">
              Edit Price (Ksh)
            </Text>
            <TextInput
              value={newPrice}
              onChangeText={setNewPrice}
              keyboardType="numeric"
              className="bg-gray-100 rounded-2xl px-4 py-3 mb-4"
            />

            {/* Add Stock */}
            <Text className="text-gray-700 mb-2 font-medium">
              Add Stock
            </Text>
            <TextInput
              placeholder="e.g. 10 kg"
              value={newStock}
              onChangeText={setNewStock}
              className="bg-gray-100 rounded-2xl px-4 py-3 mb-6"
              placeholderTextColor="#9ca3af"
            />

            {/* Buttons */}
            <View className="flex-row justify-between">
              <TouchableOpacity
                className="flex-1 mr-3 bg-gray-200 py-3 rounded-xl items-center"
                onPress={() => setModalVisible(false)}
              >
                <Text className="font-semibold text-gray-700">
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-1 ml-3 bg-blue-600 py-3 rounded-xl items-center"
                onPress={() => {
                  setModalVisible(false);
                  setNewStock("");
                }}
              >
                <Text className="font-semibold text-white">
                  Save
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </>
  );
}
