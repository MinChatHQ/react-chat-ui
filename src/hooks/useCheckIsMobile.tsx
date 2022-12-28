import { useEffect, useState } from "react";


const useCheckIsMobile = () =>{
    
    const checkIsMobile = () => {
        const match = window.matchMedia(`(max-width: 640px)`);
        return match.matches;
    };

    const [isMobile, setIsMobile] = useState(checkIsMobile);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(checkIsMobile());
        });
    }, []);

    return isMobile
}

export default useCheckIsMobile