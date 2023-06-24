###title: Setup Navigation with breeze using expo-router.

###Introduction
I have used expo-router on couple of projects now and i must say it is a very powerful library. It is a wrapper around react-navigation and it makes setting up navigation in your react-native app a breeze.

It is no news how much excitement Next.js-13 has brought to the React community. I think we all can attest to how easy it has become to setup navigation between pages. This is the same similarity i see between expo-router and Next.js-13. It is very easy to setup navigation between screens in your react-native app using expo-router.

In this post, i will be talking about:
1-  How to set up different layouts / navigation using expo-router.
2-  Reveal a common pattern involved in setting up any form of layout/navigation.

###Setting up different layouts / navigation using expo-router
I will be using the expo-cli to create a new project. If you don't have it installed, you can install it by running the command below in your terminal.

```bash
npm install -g expo-cli
```
After installing the expo-cli, you can create a new project by running the command below in your terminal. We will be using typescript for this project.

```bash
mkdir navigation-tuto && cd navigation-tuto
npx npx create-expo-app@latest --example with-router .
touch tsconfig.json && expo start //This will create a tsconfig.json file, setup all necessary dependencies to run typescript and start the expo server
mv index.js index.ts //This will rename the index.js file to index.ts
npm install @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/core @expo/vector-icons
mkdir components && cd components && touch AppButton.ts //This will create a components folder and a file called AppButton.ts
mkdir layout && cd layout && touch drawer.tsx && touch bottomTabs.tsx //This will create a layout folder and two files called drawer.tsx and bottomTabs.tsx
```
```




