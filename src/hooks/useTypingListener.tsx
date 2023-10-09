import { useEffect, useState } from "react";




export type Props = {
    onStartTyping?: () => void,
    onEndTyping?: () => void,
}

const useTypingListener = (props: Props) => {
    const [typing, setTyping] = useState(false);

    let timeout: any;

    useEffect(() => {
        //call the function when typing starts or ends but should not call it on every render and should only be called when the value of typing changes
        if (typing) {
            props.onStartTyping && props.onStartTyping()
        } else {
            props.onEndTyping && props.onEndTyping()
        }

    }, [typing])

    const onKeyDown = () => {
        clearTimeout(timeout);
        setTyping(true);
    }

    const onKeyUp = () => {
        timeout = setTimeout(() => {
            setTyping(false);
        }, 2_000);
    }
    return { setTyping, onKeyUp, onKeyDown }

}

export default useTypingListener
