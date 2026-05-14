/// <reference types="vite/client" />

interface Window {
  ym: (counterId: number, action: string, ...args: any[]) => void;
}
