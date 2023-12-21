import { createContext } from "react";

export default createContext<{
    colorSet?: {}
    themeColor: string
}>({
    colorSet: {},
    themeColor: '#6ea9d7'
})