# Digital Clock - React Native App

A beautiful and feature-rich digital clock application built with React Native and Expo.

## 🎨 Features

- ⏰ **Real-time Digital Clock** - Beautiful clock display with current time and date
- 🌍 **Multiple Timezones** - View time in 12+ popular timezones worldwide
- 🔔 **Alarm Management** - Create and manage alarms
- 🌙 **Dark/Light Mode** - Toggle between themes
- 📱 **Responsive Design** - Works on all device sizes
- 🎯 **Smooth Animations** - Fluid user interface

## 📋 Prerequisites

- Node.js >= 14
- npm or yarn
- Expo CLI (install with `npm install -g expo-cli`)

## 🚀 Installation

### 1. Install Dependencies

```bash
cd digital-clock
npm install
```

### 2. Start the App

#### For Web
```bash
npm run web
```

#### For iOS Simulator
```bash
npm run ios
```

#### For Android Emulator
```bash
npm run android
```

#### Using Expo Go App
```bash
npm start
```
Then scan the QR code with Expo Go app on your phone.

## 📦 Build APK for Android

### Method 1: Using EAS Build (Recommended)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo account (create one at expo.dev)
eas login

# Build APK
eas build --platform android --local
```

### Method 2: Using Android Studio

```bash
# Build Android project
npm run android -- --build

# Then use Android Studio to build APK
cd android
./gradlew assembleRelease
```

## 📱 Screen Navigation

### Clock Screen
- Main clock display
- Current date and timezone
- Format toggle (24-hour/12-hour)
- Dark mode toggle

### Timezones Screen
- View time in multiple timezones
- Search timezones
- Display timezone offset

### Alarm Screen
- Create new alarms
- Enable/disable alarms
- Delete alarms
- View alarm count

### Settings Screen
- Theme settings
- App information
- Feature list

## 🛠 Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - App navigation
- **React Native Paper** - UI components
- **moment-timezone** - Timezone handling
- **react-native-vector-icons** - Icons

## 📱 Supported Timezones

- America/New_York (New York)
- Europe/London (London)
- Asia/Tokyo (Tokyo)
- Asia/Dubai (Dubai)
- Asia/Singapore (Singapore)
- Australia/Sydney (Sydney)
- Asia/Hong_Kong (Hong Kong)
- Asia/Bangkok (Bangkok)
- Asia/Jakarta (Jakarta)
- Asia/Manila (Manila)
- Africa/Johannesburg (Johannesburg)
- America/Sao_Paulo (São Paulo)

## 🎨 Color Scheme

### Dark Mode
- Primary: #00d4ff (Cyan)
- Secondary: #b537f2 (Purple)
- Tertiary: #ff006e (Pink)
- Background: #0f172a (Dark Blue)
- Surface: #1e293b (Slate)

### Light Mode
- Primary: #0066cc (Blue)
- Secondary: #6200ee (Purple)
- Background: #ffffff (White)
- Surface: #f5f5f5 (Light Gray)

## 📝 Project Structure

```
digital-clock/
├── src/
│   └── screens/
│       ├── ClockScreen.js
│       ├── TimezonesScreen.js
│       ├── AlarmScreen.js
│       └── SettingsScreen.js
├── App.js
├── app.json
├── package.json
└── README.md
```

## 🚀 Publishing to App Stores

### Google Play Store

```bash
# Build production APK
eas build --platform android --release

# Upload to Google Play Console
```

### Apple App Store

```bash
# Build production IPA
eas build --platform ios --release

# Upload to App Store Connect
```

## 📄 License

MIT License - feel free to use this project for any purpose.

## 👨‍💻 Author

Senxz45

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📞 Support

If you have any questions or need help, feel free to reach out!
