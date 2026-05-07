import { useEffect, useRef, useState } from 'react';

export const useVisibleCards = (count: number) => {
  const [visibleIndexes, setVisibleIndexes] = useState(new Set<number>());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, count);
  }, [count]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = new Set<number>();
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          newVisible.add(index);
        }
      });
      setVisibleIndexes((prev) => {
        if (prev.size === newVisible.size && [...prev].every((v) => newVisible.has(v))) return prev;
        return newVisible;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { visibleIndexes, cardRefs };
};