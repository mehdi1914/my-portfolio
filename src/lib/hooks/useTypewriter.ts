import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  words: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterOptions) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const typeText = useCallback(() => {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting;
    const currentText = text;

    if (shouldDelete) {
      setText(currentText.slice(0, -1));
      if (currentText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText.length === currentWord.length) {
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenWords);
      } else {
        setText(currentWord.slice(0, currentText.length + 1));
      }
    }
  }, [text, wordIndex, isDeleting, words, delayBetweenWords]);

  useEffect(() => {
    if (isWaiting) return;

    const timeout = setTimeout(
      typeText,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [typeText, isDeleting, isWaiting, deletingSpeed, typingSpeed]);

  return text;
}