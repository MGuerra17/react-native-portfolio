# Mobile Portfolio

A modern mobile portfolio application built with React Native and Expo, showcasing projects and professional experience. This portfolio demonstrates best practices in mobile development, including modular architecture, state management, internationalization, and accessibility.

## 🚀 Features

- **Modular Architecture**: Feature-based module organization for scalability
- **Internationalization (i18n)**: Full support for English and Spanish
- **Theme System**: Dark mode, light mode, and system preference support
- **Accessibility**: Comprehensive accessibility support with proper labels and roles
- **State Management**: Zustand for global state, React Context for UI state
- **Type Safety**: Full TypeScript coverage with strict mode
- **Error Handling**: Error boundaries and proper error logging
- **Custom Hooks**: Reusable hooks for data fetching and UI state

## 📱 Projects Showcase

### Shoe Store Demo
A complete e-commerce demo featuring:
- Product browsing with filters and search
- Product detail pages with size selection
- Shopping bag with persistent storage
- Favorites system
- Smooth animations and transitions

## 🛠 Tech Stack

- **Framework**: React Native 0.81.5
- **Platform**: Expo SDK 54
- **Routing**: Expo Router (file-based routing)
- **Language**: TypeScript 5.9.2
- **State Management**: Zustand 5.0.11
- **UI Libraries**:
  - React Navigation (native, bottom-tabs, elements)
  - React Native Reanimated
  - React Native Gesture Handler
  - Expo Image
  - Expo Linear Gradient
- **Storage**: AsyncStorage (@react-native-async-storage/async-storage)
- **Fonts**: Montserrat (via @expo-google-fonts/montserrat)

## 📁 Project Structure

```
MobilePortfolio/
├── app/                    # Expo Router file-based routes
│   ├── _layout.tsx        # Root layout with providers
│   ├── index.tsx          # Home screen route
│   ├── about.tsx          # About screen route
│   └── projects/          # Projects module routes
│       └── shoe-store/    # Shoe store demo routes
├── modules/               # Feature modules
│   ├── core/              # Shared core functionality
│   │   ├── components/   # Reusable UI components
│   │   ├── context/       # React Context providers
│   │   ├── hooks/         # Custom hooks
│   │   └── containers/    # Container components
│   ├── home/              # Home screen module
│   ├── about/             # About screen module
│   ├── projects/          # Projects listing module
│   └── shoe-store/        # Shoe store demo module
│       ├── components/    # Module-specific components
│       ├── screens/       # Screen components
│       ├── hooks/         # Module hooks
│       ├── services/      # API/data services
│       ├── stores/        # Zustand stores
│       └── utils/         # Utility functions
├── constants/             # App-wide constants
│   ├── theme/            # Theme configuration
│   └── i18n/             # i18n configuration
├── translations/          # Translation files
│   ├── home/
│   ├── about/
│   ├── projects/
│   └── shoe-store/
└── assets/               # Images, fonts, etc.
```

## 🏗 Architecture Decisions

### State Management
- **Zustand** is used for global application state (bag, favorites) that needs persistence
- **React Context** is used for UI-level state (theme, locale) that doesn't require persistence
- Local component state (`useState`) for component-specific UI state

### Data Fetching
- Custom `useQuery` hook that mimics react-query behavior
- Designed to be easily replaceable with tanstack-query in the future
- Services layer abstracts data fetching logic from components

### Module Organization
Each feature module follows a consistent structure:
- `components/`: UI components specific to the module
- `screens/`: Screen components (Screen + ScreenView pattern)
- `hooks/`: Custom hooks for the module
- `services/`: Data fetching and business logic
- `stores/`: Zustand stores (if needed)
- `utils/`: Utility functions
- `constants/`: Module-specific constants
- `types/`: TypeScript type definitions

### Component Patterns
- **Screen + ScreenView**: Separation of logic (Screen) and presentation (ScreenView)
- **Container + View**: Similar pattern for reusable components
- **Styles**: Separate `.styles.ts` files using StyleSheet.create()
- **Types**: Separate `.types.ts` files for TypeScript definitions

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Expo CLI (optional, but recommended)
- iOS Simulator (Mac) or Android Emulator

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npx expo start
```

### Running on Devices

- **iOS**: Press `i` in the terminal or scan QR code with Expo Go app
- **Android**: Press `a` in the terminal or scan QR code with Expo Go app
- **Web**: Press `w` in the terminal

### Development Commands

```bash
# Start Expo dev server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web

# Lint code
npm run lint
```

## 🌐 Internationalization

The app supports English and Spanish. Translations are organized by module in the `translations/` directory. The locale is persisted in AsyncStorage and can be toggled via the language toggle in the header.

### Adding Translations

1. Add keys to the appropriate module's translation files (`en.ts` and `es.ts`)
2. Use the `useLocale` hook or `useUI` hook to access translations:
   ```typescript
   const { t } = useUI();
   const text = t("module.section.key");
   ```

## 🎨 Theming

The app supports three theme modes:
- **Light**: Light color scheme
- **Dark**: Dark color scheme
- **System**: Follows device preference

Theme is managed via React Context and persisted in AsyncStorage. Components use the `useUI` hook to access theme colors and create styles.

## ♿ Accessibility

The app follows React Native accessibility best practices:
- All interactive elements have `accessibilityRole` and `accessibilityLabel`
- Proper semantic roles (button, link, etc.)
- Accessibility hints where helpful
- Screen reader friendly navigation

## 🧪 Testing

- **Unit & component**: Jest and React Native Testing Library (`npm test`, `npm run test:watch`). Tests live in `**/__tests__/*.test.{ts,tsx}`.
- **E2E**: Maestro flows in `.maestro/flows/`. Run with `npm run e2e` or `npm run e2e:smoke`. Requires a development build and Maestro CLI. See [docs/e2e.md](docs/e2e.md) for setup, running locally/CI, and testID conventions.

## 📝 Code Quality

- **ESLint**: Configured with Expo preset
- **TypeScript**: Strict mode enabled
- **Code Organization**: Modular, feature-based structure
- **Error Handling**: Error boundaries and proper error logging
- **Performance**: Optimized FlatList rendering, memoization where needed

## 🔮 Future Improvements

- [ ] Add comprehensive test coverage
- [ ] Set up CI/CD pipeline
- [ ] Add performance monitoring
- [ ] Migrate to tanstack-query for data fetching
- [ ] Add more projects/demos
- [ ] Implement analytics
- [ ] Add push notifications (if needed)

## 📄 License

This project is a portfolio showcase. All code is available for review and demonstration purposes.

## 👤 Author

Built as a mobile development portfolio to showcase skills and best practices in React Native development.
