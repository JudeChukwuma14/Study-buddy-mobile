import { NativeTabs, Label, Icon } from 'expo-router/unstable-native-tabs';
import { useAuth } from '@clerk/expo';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

const TabsLayout = () => {
    const { isSignedIn, isLoaded } = useAuth()
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            router.replace("/(auth)")
        }
    }, [isSignedIn, isLoaded])

    if (!isLoaded) return null

    return (
        <NativeTabs>
            <NativeTabs.Trigger name="index">
                <Label>Chats</Label>
                <Icon sf="message" drawable="chat-bubble" selectedColor={"#6C5CE7"} />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="explore">
                <Label>Explore</Label>
                <Icon sf="safari" drawable="safari" selectedColor={"#6C5CE7"} />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="profile">
                <Label>Profile</Label>
                <Icon sf="person" drawable="person" selectedColor={"#6C5CE7"} />
            </NativeTabs.Trigger>

        </NativeTabs>
    )
}

export default TabsLayout