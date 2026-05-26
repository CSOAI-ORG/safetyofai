interface Window {
  gtag: (event: string, action: string, params?: Record<string, string | undefined>) => void;
}