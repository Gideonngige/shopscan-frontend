import { Dimensions, ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Dashboard() {
  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 pt-14">

        {/* Title */}
        <Text className="text-2xl font-extrabold text-gray-900 mb-8">
          Dashboard
        </Text>

        {/* Top Stats */}
        <View className="flex-row justify-between mb-10">

          <View className="bg-blue-600 flex-1 mr-3 rounded-3xl p-6 shadow-lg">
            <Text className="text-blue-100 text-sm mb-2">
              Total Sales
            </Text>
            <Text className="text-white text-2xl font-extrabold">
              Ksh 145,800
            </Text>
          </View>

          <View className="bg-white flex-1 ml-3 rounded-3xl p-6 shadow">
            <Text className="text-gray-500 text-sm mb-2">
              Total Products
            </Text>
            <Text className="text-gray-900 text-2xl font-extrabold">
              86
            </Text>
          </View>

        </View>

        {/* Weekly Sales Graph */}
        <View className="bg-white rounded-3xl p-6 shadow mb-10">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Weekly Sales
          </Text>

          <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  data: [1200, 1800, 1500, 2100, 2500, 3200, 2800],
                },
              ],
            }}
            width={screenWidth - 48}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              color: () => "#2563eb",
              labelColor: () => "#6b7280",
              propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: "#2563eb",
              },
            }}
            bezier
            style={{
              borderRadius: 16,
            }}
          />
        </View>

        {/* Stock Status */}
        <View className="bg-white rounded-3xl p-6 shadow">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            Stock Status
          </Text>

          <StockItem name="Sugar" status="in" />
          <StockItem name="Rice" status="in" />
          <StockItem name="Cooking Oil" status="out" />
          <StockItem name="Flour" status="out" />

        </View>

      </View>
    </ScrollView>
  );
}

/* ---------- Components ---------- */

function StockItem({ name, status }) {
  const isInStock = status === "in";

  return (
    <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
      <Text className="text-gray-900 font-medium">
        {name}
      </Text>

      <View
        className={`px-3 py-1 rounded-full ${
          isInStock ? "bg-green-100" : "bg-red-100"
        }`}
      >
        <Text
          className={`text-sm font-semibold ${
            isInStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {isInStock ? "In Stock" : "Out of Stock"}
        </Text>
      </View>
    </View>
  );
}
