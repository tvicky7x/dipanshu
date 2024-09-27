import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

function TextTypeSection({ textMotion, onCompleteTyping }) {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = typewriterRef.current;

      if (textMotion) {
        typewriter.start(); // Start typing when textMotion is true
      } else {
        typewriter.stop(); // Stop typing when textMotion is false
      }
    }
  }, [textMotion]);

  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriterRef.current = typewriter; // Store the typewriter instance
        typewriter
          .changeDelay(70)
          .typeString("Hello my name is Dipanshu")
          .pauseFor(500)
          .deleteAll()
          .typeString("I am a peach")
          .pauseFor(500)
          .deleteAll()
          .typeString("Never mind me,<br/> just doing my shit")
          .pauseFor(500)
          .callFunction(() => {
            onCompleteTyping();
          });
      }}
    />
  );
}

export default TextTypeSection;
