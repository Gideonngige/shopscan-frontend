import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 bg-white items-center justify-center px-6">
        <Ionicons name="camera-outline" size={60} color="#2563eb" />
        <Text className="text-lg font-bold mt-4 text-gray-900">
          Camera Permission Needed
        </Text>
        <Text className="text-gray-500 text-center mt-2 mb-6">
          Allow camera access to scan products
        </Text>

        <TouchableOpacity
          onPress={requestPermission}
          className="bg-blue-600 px-6 py-4 rounded-2xl"
        >
          <Text className="text-white font-bold text-lg">
            Allow Camera
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black">

      {/* Camera */}
      <CameraView
        className="flex-1"
        barcodeScannerSettings={{
          barcodeTypes: ["ean13", "ean8", "upc_a", "upc_e", "qr"],
        }}
        onBarcodeScanned={scanned ? undefined : ({ data }) => {
          setScanned(true);
          setBarcode(data);
        }}
      />

      {/* Overlay */}
      <View className="absolute inset-0 justify-between">

        {/* Top Info */}
        <View className="mt-14 items-center">
          <Text className="text-white text-lg font-semibold">
            Scan Product Barcode
          </Text>
          <Text className="text-gray-300 mt-2">
            Align the barcode inside the frame
          </Text>
        </View>

        {/* Scan Frame */}
        <View className="items-center">
          <View className="w-64 h-64 border-2 border-blue-500 rounded-2xl" />
        </View>

        {/* Bottom Result */}
        <View className="bg-white rounded-t-3xl p-6">

          {barcode ? (
            <>
              <Text className="text-gray-500 text-sm mb-1">
                Scanned Code
              </Text>
              <Text className="text-gray-900 text-lg font-bold mb-4">
                {barcode}
              </Text>

              <TouchableOpacity
                onPress={() => setScanned(false)}
                className="bg-blue-600 py-4 rounded-2xl items-center"
              >
                <Text className="text-white font-bold text-lg">
                  Scan Again
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text className="text-gray-500 text-center">
              Waiting for scan...
            </Text>
          )}

        </View>
      </View>

    </View>
  );
}
