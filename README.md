# Management React Native

A cross-platform mobile app for bakery management, built with React Native and Expo. This app is the mobile frontend for the Management Express backend, providing features for inventory, orders, and customer management.

## Features
- User authentication
- Product and inventory management
- Order and sales tracking
- Customer management
- Modern UI with React Native Paper and Tailwind CSS
- State management with Zustand
- Form validation with Formik and Yup

## Tech Stack
- React Native (Expo)
- TypeScript
- Zustand
- React Native Paper
- Tailwind CSS (NativeWind)
- Expo Router
- Axios

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation
```bash
git clone https://github.com/IgnacioSotelo5/management-react-native.git
cd management-react-native
npm install
# or
yarn install
```

### Running the App
```bash
npm start
# or
yarn start
```

Follow the Expo CLI instructions to run on Android, iOS, or web.

## Project Structure
```
management-react-native/
  app/           # App entry and routes
  components/    # Reusable UI components
  screens/       # App screens
  store/         # Zustand state management
  utils/         # Utility functions
  ...
```

## Roadmap
- [ ] Add push notifications
- [ ] Add offline support
- [ ] Improve analytics and reporting

## License
MIT
