module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'], // <- this is the same as the baseUrl
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
        ],
        alias: {
          '@': './src/',
          '@views': './src/views/',
          '@components': './src/components/',
          '@utils': './src/utils/',
          '@constants': './src/constants/',
          '@hooks': './src/hooks/',
          '@helper': './src/helper/',
          '@navigation': './src/navigation/',
          '@assets': './src/assets/',
          '@redux': './src/redux/',
          '@styles': './src/styles/',
        },
      },
    ],
  ],
};
