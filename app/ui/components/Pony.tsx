"use clinet";

import { useContext, useRef, useEffect } from "react";
import { TextboxContentContext } from "./Textbox";
import { keyboardKeys } from "./Keyboard";

export default function Pony() {
  const { textboxContent, setTextboxContent } = useContext(
    TextboxContentContext,
  );

  const ponyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ponyRef.current) {
      ponyRef.current.style.top = "0px";
      ponyRef.current.style.left = `${window.innerWidth / 2}px`;
    }

    const updatePonyPosition = () => {
      const topDiff = getRandomIntInclusive(-96, 96);
      const leftDiff = getRandomIntInclusive(-96, 96);

      if (ponyRef.current) {
        const newTop = parseInt(ponyRef.current.style.top) + topDiff;
        const newLeft = parseInt(ponyRef.current.style.left) + leftDiff;

        if (newTop >= 0 && newTop <= keyboardKeys.length * 96) {
          ponyRef.current.style.top = `${newTop}px`;
        }

        if (newLeft >= 0 && newLeft <= window.innerWidth) {
          ponyRef.current.style.left = `${newLeft}px`;
        }
      }

      setTimeout(() => requestAnimationFrame(updatePonyPosition), 500);
    };

    requestAnimationFrame(updatePonyPosition);

    const checkIntersection = () => {
      keyboardKeys.flat().forEach((key) => {
        const keyElement = document.getElementById(`keyboard-key-${key}`);

        if (keyElement && ponyRef.current) {
          const keyRect = keyElement.getBoundingClientRect();
          const ponyRect = ponyRef.current.getBoundingClientRect();

          if (
            ponyRect.top < keyRect.bottom &&
            ponyRect.bottom > keyRect.top &&
            ponyRect.left < keyRect.right &&
            ponyRect.right > keyRect.left
          ) {
            setTextboxContent((prev) => prev + key);
          }
        }
      });

      setTimeout(checkIntersection, 500);
    };

    checkIntersection();
  }, [setTextboxContent]);

  return (
    <i className="text-5xl fixed transition-all ease-in-out" ref={ponyRef}>
      🦄
    </i>
  );
}

function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
