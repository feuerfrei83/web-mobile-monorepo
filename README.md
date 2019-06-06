# Lerna monorepo setup for a NextJS project and an React Native CLI mobile app

### How to run:

1. At the root directory run:
> lerna bootstrap

2. Change directory to the mobile app
> cd packages/app

3. Run Haul bundler
> yarn haul:ios

4. Open another terminal window and run the react native app in the mobile app directory.
> react-native run-ios