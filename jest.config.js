import {withEnzyme} from 'jest-expo-enzyme'

import iosJestPreset from 'jest-expo/ios/jest-preset'
import androidJestPreset from 'jest-expo/android/jest-preset'
import webJestPreset from 'jest-expo/web/jest-preset'

module.exports = {
  projects: [
    // Skipping Node because we want to test DOM presets only
    withEnzyme(iosJestPreset),
    withEnzyme(androidJestPreset),
    // The Enzyme support added to web is different from that added to native, which `withEnzyme` handles
    // Luckily you won't have to do anything special because it reads the platform from
    // `haste.defaultPlatform` of the provided Jest config
    withEnzyme(webJestPreset),
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)',
  ],
  setupFiles: ['<rootDir>setup-tests.js'],
}
