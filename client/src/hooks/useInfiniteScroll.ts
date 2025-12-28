import { useState, useCallback } from 'react';
import { generateGradient, generateMeshGradient, generateTexture } from '@/lib/generators';

export type ScrollItem = {
  id: string;
  type: 'gradient' | 'mesh' | 'texture';
  data: string;
  height: number;
  style?: React.CSSProperties;
};

const generateItem = (): ScrollItem => {
  const types: ('gradient' | 'mesh' | 'texture')[] = ['gradient', 'gradient', 'mesh', 'texture'];
  const type = types[Math.floor(Math.random() * types.length)];
  const id = Math.random().toString(36).substr(2, 9);
  const height = Math.floor(Math.random() * 300) + 400; // Taller cards for better scroll feel

  let data = '';
  let style: React.CSSProperties = {};

  if (type === 'gradient') {
    data = generateGradient();
  } else if (type === 'mesh') {
    data = generateMeshGradient();
  } else {
    data = '#ffffff';
    style = {
      backgroundImage: generateTexture(),
      backgroundSize: '20px 20px'
    };
  }

  return { id, type, data, height, style };
};

export const useInfiniteScroll = (initialCount = 10) => {
  const [items, setItems] = useState<ScrollItem[]>(() => 
    Array.from({ length: initialCount }, generateItem)
  );

  const loadMore = useCallback(() => {
    setItems(prev => [
      ...prev,
      ...Array.from({ length: 5 }, generateItem)
    ]);
  }, []);

  const refresh = useCallback(() => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        setItems(Array.from({ length: initialCount }, generateItem));
        resolve();
      }, 1500);
    });
  }, [initialCount]);

  return { items, loadMore, refresh };
};
