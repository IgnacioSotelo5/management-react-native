import { ThemedText } from "@/components/text/ThemedText";
import { ThemedView } from "@/components/view/ThemedView";

export default function OrdersScreen(){
    return(
        <ThemedView withPadding className="flex-1">
            <ThemedText className="text-3xl font-bold text-left">
                Pedidos
            </ThemedText>
        </ThemedView>
    )
}