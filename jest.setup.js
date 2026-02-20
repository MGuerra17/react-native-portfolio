import "@testing-library/jest-native/extend-expect";

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

// Mock expo-router (useRouter as jest.fn so tests can override with mockReturnValue)
const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  canGoBack: jest.fn(() => true),
};
jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => mockRouter),
  useLocalSearchParams: () => ({}),
  usePathname: () => "/",
  Stack: ({ children }) => children,
}));

// Mock expo-haptics
jest.mock("expo-haptics", () => ({
  impactAsync: jest.fn(),
  ImpactFeedbackStyle: {
    Light: "light",
    Medium: "medium",
    Heavy: "heavy",
  },
}));

// Mock expo-image to avoid expo-modules-core EventEmitter in tests
jest.mock("expo-image", () => {
  const mockView = require("react-native").View;
  return { Image: mockView };
});

// Mock @expo/vector-icons so test renderer gets a valid component (real package exports break in Jest)
jest.mock("@expo/vector-icons/Entypo", () => ({
  __esModule: true,
  default: require("./__tests__/mocks/ExpoVectorIconMock"),
}));
jest.mock("@expo/vector-icons/Octicons", () => ({
  __esModule: true,
  default: require("./__tests__/mocks/ExpoVectorIconMock"),
}));
jest.mock("@expo/vector-icons/Ionicons", () => ({
  __esModule: true,
  default: require("./__tests__/mocks/ExpoVectorIconMock"),
}));

// Mock useUI so components don't need ThemeProvider + LocaleProvider in tests.
// Styles: Proxy returning {} for any key so styles.xxx never breaks.
const createStylesProxy = () =>
  new Proxy(
    {},
    {
      get() {
        return {};
      },
    }
  );

jest.mock("@/modules/core/hooks/useUI", () => {
  const theme = require("@/constants/theme");
  const lightColors = theme.lightColors;
  const ThemeMode = theme.ThemeMode;
  const getLayoutInfo = theme.getLayoutInfo;
  const defaultLayout = getLayoutInfo(390, 844);
  return {
    useUI: (styleFactory) => {
      const styles = styleFactory
        ? styleFactory({ colors: lightColors, layout: defaultLayout })
        : createStylesProxy();
      return {
        t: (key) => key,
        styles,
        layout: defaultLayout,
        colors: lightColors,
        themeMode: ThemeMode.Light,
        setThemeMode: jest.fn(),
        setLocale: jest.fn(),
        locale: "en",
      };
    },
  };
});
