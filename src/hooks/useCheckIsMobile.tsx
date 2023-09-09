import { useEffect, useState } from "react";


const useCheckIsMobile = () => {


    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== undefined) {


            const handleResize = () => {
                let mobile = false
                if (typeof window !== undefined) {
                    const match = window.matchMedia(`(max-width: 640px)`);
                    mobile = match.matches;
                }

                setIsMobile(mobile);
            };

            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }

        return () => { };
    }, []);

    return isMobile
}

export default useCheckIsMobile