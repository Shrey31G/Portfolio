import { useEffect, useRef } from "react";


export function InfiniteSlider({children}) {
    const sliderRef = useRef();
    let scrollAmount = 0;
    
    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            scrollAmount += 1;
            if(slider.scrollLeft >= slider.scrollWidth /2) {
                slider.scrollLeft = 0;
                scrollAmount = 0;
            } else {
                slider.scrollAmount = scrollAmount;
            }
        };

        const interval = setInterval(scroll, 20);
        return () => clearInterval(interval);
    }, [])

    return (
        <div ref={sliderRef} className="flex overflow-hidden whitespace-nowrap w-full">
            <div className="flex">
                {children}
                {children}
            </div>
        </div>
    )
}   