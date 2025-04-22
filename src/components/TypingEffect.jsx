import { useEffect, useState } from "react";

export const TypingEffect = ({
  texts = ["Hello", "World", "Friend"],
  speed = 80,
  pause = 1000,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0); 
  const [textIndex, setTextIndex] = useState(0); 

  useEffect(() => {
    const currentText = texts[textIndex % texts.length];

    const timeout = setTimeout(() => {
      if (!deleting) {

        if (index < currentText.length) {
          setDisplayed((prev) => prev + currentText[index]);
          setIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {

        if (index > 0) {
          setDisplayed((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {

          setDeleting(false);
          setTextIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, deleting, texts, textIndex, speed, pause]);

  return (
    <h1 className="text-4xl font-bold text-black dark:text-white whitespace-pre">
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
  );
};
