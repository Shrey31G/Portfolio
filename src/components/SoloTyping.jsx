import { useEffect, useState } from "react"

export const SoloTyping = ({ text = "Hello World", speed = 200, pause = 1000 }) => {
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!deleting) {

                if (index < text.length) {
                    setDisplayed((prev) => prev + text[index]);
                    setIndex((prev) => prev + 1);
                } else {
                    setDeleting(() => setDeleting(true), pause);
                }
            } else {
                if (index > 0) {
                    setDisplayed((prev) => prev.slice(0, -1));
                    setIndex((prev) => prev - 1);
                } else {
                    setDeleting(false);
                }
            }
        }, speed);
        return () => clearTimeout(timeout);
    }, [index, deleting, text, speed, pause]);

    return (
        <h1 className="text-4xl font-bold text-black dark:text-white whitespace-pre">
            {displayed}
            <span className="animate-pulse">|</span>
        </h1>
    )
}