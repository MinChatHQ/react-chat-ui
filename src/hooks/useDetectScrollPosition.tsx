import { RefObject } from "react"


const useDetectScrollPosition = (ref: RefObject<HTMLElement>) => {

    const detectTop = () => {
        if (ref.current) {
            return ref.current.scrollTop < 50
        }
        return false
    }

    const detectBottom = () => {
        if (ref.current) {
            return ref.current.scrollHeight - ref.current.scrollTop === ref.current.clientHeight
        }
        return false
    }


    
    return { detectTop, detectBottom }


}

export default useDetectScrollPosition
