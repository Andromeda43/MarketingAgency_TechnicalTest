// Declaraciones de tipos para extensiones de window
interface Window {
    lottie?: {
      loadAnimation: (config: {
        container: HTMLElement;
        renderer: 'svg' | 'canvas' | 'html';
        loop: boolean;
        autoplay: boolean;
        path: string;
      }) => {
        setSpeed: (speed: number) => void;
        play: () => void;
        pause: () => void;
        stop: () => void;
      };
    };
  }