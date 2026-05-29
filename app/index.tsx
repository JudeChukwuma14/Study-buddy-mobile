import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth()
  if(!isLoaded) return null
  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
