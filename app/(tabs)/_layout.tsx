import { NativeTabs, Label, Icon } from 'expo-router/unstable-native-tabs';
import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';

const TabsLayout = () => {
    const { isSignedIn, isLoaded } = useAuth()

    if (!isLoaded) return null
    if (!isSignedIn) return <Redirect href="/(auth)" />

    return (
        <NativeTabs>
            <NativeTabs.Trigger name="index">
                <Label>Chats</Label>
                <Icon sf="message" drawable="chat-bubble" />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="explore">
                <Label>Explore</Label>
                <Icon sf="safari" drawable="safari" />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="profile">
                <Label>Profile</Label>
                <Icon sf="person" drawable="person" />
            </NativeTabs.Trigger>

        </NativeTabs>
    )
}

export default TabsLayout