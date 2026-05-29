
import { useSSO } from "@clerk/expo"
import { useState } from "react"
import { Alert } from "react-native"


const useSocialAuth = () => {
  const [loadingStrategy, setLoadingStratey] = useState<string | null>(null)
  const { startSSOFlow } = useSSO()

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple" | "oauth_github") => {
    if (loadingStrategy) return
    setLoadingStratey(strategy)

    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy })
      if (!createdSessionId || !setActive) {
        const provider = strategy === "oauth_google" ? "Google" : strategy === "oauth_apple" ? "Apple" : "GitHub";
        Alert.alert(`Failed to sign in with ${provider}`)
        return
      }
      await setActive({ session: createdSessionId })
    } catch (error) {
      console.error("SSO Flow error:", error);
      const provider = strategy === "oauth_google" ? "Google" : strategy === "oauth_apple" ? "Apple" : "GitHub";
      Alert.alert("An error occurred", `Failed to sign in with ${provider}`);

    } finally {
      setLoadingStratey(null)
    }
  }

  return {
    loadingStrategy, handleSocialAuth
  }
}

export default useSocialAuth