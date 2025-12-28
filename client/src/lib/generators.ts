// Vaporwave color palette
const PALETTE = {
  pinks: ['#FFB7B2', '#FF9AA2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'],
  cyans: ['#A0E7E5', '#B4F8C8', '#FBE7C6', '#FFAEBC', '#75E6DA', '#189AB4'],
  purples: ['#D4A5A5', '#9D8189', '#555B6E', '#89B0AE', '#BEE3DB', '#FAF9F9'],
  darks: ['#2C3E50', '#34495E', '#2E2E2E', '#4B4B4B', '#1A1A1D', '#4E4E50']
};

export const generateGradient = () => {
  const mode = Math.random() > 0.3 ? 'light' : 'dark';
  const colors = mode === 'light' 
    ? [...PALETTE.pinks, ...PALETTE.cyans] 
    : [...PALETTE.purples, ...PALETTE.darks];
    
  const c1 = colors[Math.floor(Math.random() * colors.length)];
  const c2 = colors[Math.floor(Math.random() * colors.length)];
  const angle = Math.floor(Math.random() * 360);
  
  return `linear-gradient(${angle}deg, ${c1}, ${c2})`;
};

export const generateMeshGradient = () => {
  const c1 = PALETTE.pinks[Math.floor(Math.random() * PALETTE.pinks.length)];
  const c2 = PALETTE.cyans[Math.floor(Math.random() * PALETTE.cyans.length)];
  const c3 = PALETTE.purples[Math.floor(Math.random() * PALETTE.purples.length)];
  const c4 = PALETTE.pinks[Math.floor(Math.random() * PALETTE.pinks.length)];
  
  return `radial-gradient(at 0% 0%, ${c1} 0px, transparent 50%),
          radial-gradient(at 100% 0%, ${c2} 0px, transparent 50%),
          radial-gradient(at 100% 100%, ${c3} 0px, transparent 50%),
          radial-gradient(at 0% 100%, ${c4} 0px, transparent 50%),
          #f7f7f7`;
};

export const generateTexture = () => {
  // We'll use CSS patterns for textures to keep it lightweight
  const patterns = [
    `radial-gradient(#e5e7eb 1px, transparent 1px)`,
    `linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6), linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6)`,
    `repeating-linear-gradient(45deg, #f9fafb, #f9fafb 10px, #f3f4f6 10px, #f3f4f6 20px)`
  ];
  
  return patterns[Math.floor(Math.random() * patterns.length)];
};
