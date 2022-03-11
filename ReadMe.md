steps start (https://docs.expo.dev/workflow/expo-cli/)
npx expo-cli init    ----- selected typescript project

===================================ENzyme===========
enzyme(https://enzymejs.github.io/enzyme/docs/guides/react-native.html)
--yarn add enzyme-adapter-react-16 jest-expo-enzyme
created setup-tests.js, jest.config.js

===================================storybook===========
--storybook(https://storybook.js.org/docs/react/get-started/install)
https://github.com/expo/examples/tree/master/with-storybook

 npx -p @storybook/cli sb init
 yarn add -D @storybook/react-native

now in App.js configure storybook in navigtion added a screen 

==================================Eslint pretiier==============

https://eslint.org/docs/user-guide/getting-started
https://www.youtube.com/watch?v=1b8akwt-2EQ Configuring expo with eslint, prettier, and absolute imports

 yarn add eslint-config-airbnb eslint-config-prettier eslint-import-resolver-alias eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react-hooks --dev
yarn add prettier eslint-plugin-prettier --dev

=========================================husky============
https://prettier.io/docs/en/precommit.html
npx mrm@2 lint-staged

package.json add for tsx
"lint-staged": {
    "**/*.{js,jsx,ts,tsx}": "eslint --cache --fix"
  }
==========================================