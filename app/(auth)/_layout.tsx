import { useSession } from "@/hooks/useAuth";
import { Redirect, Slot, Stack } from "expo-router";
import { ActivityIndicator } from "react-native-paper";

export default function AuthLayout(){   
    const {session, isAuthLoading} = useSession() 

    if(isAuthLoading) {
        return <ActivityIndicator animating={true} size={"large"} className="flex-1" />
    }

    

    return (
        <>
            {
                session ? (
                    <Redirect href={'/(tabs)'} />
                ) : (
                    <Stack />
                )
            }
        </>
    )
}