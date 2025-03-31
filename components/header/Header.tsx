import { View } from "react-native";
import { ThemedText } from "@/components/text/ThemedText";
import { Avatar, Menu, Button } from "react-native-paper";
import { useState } from "react";
import { useSession } from "@/hooks/useAuth";

export function Header(){
    const [menuVisible, setMenuVisible] = useState(false)
    const {signOut} = useSession()
    return(
        <View className="absolute top-0 right-0 left-0 mb-[20px] flex-row justify-between items-center px-6 py-4 bg-slate-300 dark:bg-slate-800 backdrop-blur-sm rounded-b-xl">
            <ThemedText className="font-semibold text-xl">
                SmartBake
            </ThemedText>
            <Menu
            anchorPosition="bottom"
            visible={menuVisible}
            onDismiss={()=> setMenuVisible(false)}
            anchor={
                <Button onPress={() => setMenuVisible(true)}>
                    <Avatar.Image size={45} source={{uri: 'https://lh3.googleusercontent.com/pw/AP1GczP3yfdIGOvm36xRXxnbdvjP5dMfaMV0LSSRbDvaFTORNlCbAYJ35W1xT_v4dbMj-BSWyAtCMbVP82pyLSOegEoSyo8Lf3PmiW9dOXQG1TbjPVAXD3NidfAmt1e5stYDgF6Q7po24FZ_UJJm6pCcypkJSA=w548-h973-s-no-gm'}} />
                </Button>

            }
            >
                <Menu.Item title="Cerrar sesión" onPress={signOut} titleStyle={{fontSize: 14, color: 'red'}} />
            </Menu>
        </View>
    )
}