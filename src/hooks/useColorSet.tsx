import { useContext } from "react";
import MinChatUIContext from "../contexts/MinChatUIContext";



export default function useColorSet(label: string): string | undefined {

    const { colorSet } = useContext(MinChatUIContext)

    return colorSet ? (colorSet as any)[label] : undefined
}