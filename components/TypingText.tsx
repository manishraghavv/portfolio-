"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type TypingTextProps = {
  words: string[];
  className?: string;
  /** ms per character while typing. */
  typingSpeed?: number;
  /** ms per character while deleting. */
  deletingSpeed?: number;
  /** ms to hold a fully typed word before deleting it. */
  pause?: number;
};

/**
 * Infinite type / pause / delete loop.
 * The caret is a separate span so the text width can animate naturally.
 */
export default function TypingText({
  words,
  className,
  typingSpeed = 65,
  deletingSpeed = 30,
  pause = 1500,
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timer: number | undefined;

    if (!deleting && text === current) {
      // Fully typed — wait, then start deleting.
      timer = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      // Fully deleted — advance to the next word.
      setDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
    } else {
      timer = window.setTimeout(
        () => {
          setText(current.slice(0, text.length + (deleting ? -1 : 1)));
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      {/* Screen readers get the full list once instead of every keystroke */}
      <span className="sr-only">{words.join(", ")}</span>

      <span aria-hidden="true">{text}</span>

      {/* Blinking caret, tinted to match the accent palette */}
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-[3px] shrink-0 animate-pulse rounded-full bg-gradient-to-b from-violet-400 to-cyan-400"
      />
    </span>
  );
}
