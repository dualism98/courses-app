module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/app': './src/app',
          '~/assets': './src/assets',
          '~/screens': './src/screens',
          '~/widgets': './src/widgets',
          '~/entities': './src/entities',
          '~/shared': './src/shared',
        },
      },
    ],
  ],
};
