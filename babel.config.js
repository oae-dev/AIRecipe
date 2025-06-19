module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      safe: false,          // set true if you want strict validation with .env.example
      allowUndefined: true, // allow missing vars without error
    }],
    'react-native-reanimated/plugin',
  ],
};
