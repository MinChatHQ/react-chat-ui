import { useEffect, useState } from "react";


const useCheckIsMobile = (containerRef: React.RefObject<HTMLDivElement>) => {


    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (containerRef?.current) {
            const resizeObserver = new ResizeObserver(entries => {
                if (!Array.isArray(entries) || !entries.length) {
                    return;
                }

                const width = entries[0].contentRect.width
                setIsMobile(width < 768);
            });

            resizeObserver.observe(containerRef.current);


            return () => {
                if (containerRef.current) {
                    resizeObserver.unobserve(containerRef.current);
                }
            }
        }

        return () =>{}

    }, [containerRef?.current]);

    return isMobile
}

export default useCheckIsMobile