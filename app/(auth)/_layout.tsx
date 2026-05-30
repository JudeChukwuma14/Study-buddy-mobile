import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { useAuth } from '@clerk/expo'

const AuthLayout = () => {
    const { isSignedIn, isLoaded } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (isLoaded && isSignedIn) {
            router.replace("/(tabs)" as any)
        }
    }, [isSignedIn, isLoaded])

    if (!isLoaded) return null

    return (
        <Stack screenOptions={{ headerShown: false }} />
    )
}

export default AuthLayout