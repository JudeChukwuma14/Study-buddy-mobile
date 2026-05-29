import React from 'react'
import { Stack } from 'expo-router'
import { useAuth } from '@clerk/expo'
import { Redirect } from 'expo-router'

const AuthLayout = () => {
    const { isSignedIn } = useAuth()
    if (isSignedIn) {
        <Redirect href={"/"} />
    }
    return (
        <Stack screenOptions={{ headerShown: false }} />

    )
}

export default AuthLayout