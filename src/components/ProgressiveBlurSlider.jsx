import { InfiniteSlider } from "./InfiniteSlider";
import { ProgressiveBlur } from "./ProgressiveBlur";

export function ProgressiveBlurSlider() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <InfiniteSlider>
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-32 text-center text-4xl font-[450] text-black dark:text-white">
                        {i + 1}
                    </div>
                ))}
            </InfiniteSlider>
            <ProgressiveBlur className='pointer-events-none absolute top-0 left-0 h-full w-[200px]' direction='left' blurIntensity={1} />
            <ProgressiveBlur className='pointer-events-none absolute top-0 right-0 h-full w-[200px]' direction='right' blurIntensity={1} />

        </div>
    )
}