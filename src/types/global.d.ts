declare global {
  interface Window {
    onHCaptchaSuccess?: (token: string) => void;
  }
}
export {};
