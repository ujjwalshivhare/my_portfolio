export const typewriterEffect = (text: string, delay: number = 100): Promise<void> => {
  return new Promise((resolve) => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        i++;
      } else {
        clearInterval(timer);
        resolve();
      }
    }, delay);
  });
};

export const createShootingStar = (x: number, y: number): HTMLElement => {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  document.body.appendChild(star);
  
  setTimeout(() => {
    if (star.parentNode) {
      star.parentNode.removeChild(star);
    }
  }, 1000);
  
  return star;
};

export const getRandomFloat = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};