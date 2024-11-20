import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";  // Import useRouter from expo-router

export default function Index() {
  const router = useRouter();  // Initialize the router

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-col w-full justify-center items-center align-top h-[85vh] px-5">
          <Image
            source={images.logo}
            className="w-[130px] min-h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Welcome to BookSlug! We're excited to have you join our community.
            </Text>
          </View>
        </View>
        <CustomButton 
          title="Sign Up"
          handlepress={() => router.push('./profile')}  // Navigate to profile screen
          containerStyles="py-3 px-5 bg-white rounded-xl text-primary"
          textStyles="font-semibold"
          isLoading={false}  // Set to true if loading state is active
        />
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
