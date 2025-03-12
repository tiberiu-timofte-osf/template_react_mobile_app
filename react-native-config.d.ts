declare module 'react-native-config' {
  export interface NativeConfig {
    ENV?: string;
    AUTH_ENDPOINT?: string;
    CONSUMER_KEY?: string;
    CONSUMER_SECRET?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
