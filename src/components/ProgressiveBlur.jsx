
export function ProgressiveBlur({ direction = "left", className = "", blurIntensity = 1 }) {
    const blurStyle = direction === 'left'
        ? 'bg-gradient-to-r from-white/90 dark:from-black/90 to transparent'
        : 'bg-gradient-to-l from-white/90 dark:from-black/90 to-transparent';

    return (
        <div className={`${className} ${blurStyle}`} style={{ filter: `blur(${blurIntensity}px)` }} />
    )
}