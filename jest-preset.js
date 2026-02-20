"use strict";

const path = require("path");
const base = require("jest-expo/jest-preset");

// Run our patch after react-native setup and before jest-expo setup so that
// NativeModules.UIManager and viewManagersMetadata exist when jest-expo runs.
const rnSetup = require.resolve("react-native/jest/setup.js");
const expoSetup = require.resolve("jest-expo/src/preset/setup.js");
const patchPath = path.resolve(__dirname, "jest.early-setup.js");

const setupFiles = Array.isArray(base.setupFiles) ? [...base.setupFiles] : [];
const rnIndex = setupFiles.indexOf(rnSetup);
const expoIndex = setupFiles.indexOf(expoSetup);

if (rnIndex !== -1 && expoIndex !== -1 && expoIndex > rnIndex) {
  setupFiles.splice(expoIndex, 0, patchPath);
} else {
  setupFiles.push(patchPath);
}

// Resolve expo-modules-core subpaths that the package does not export.
const expoModulesCoreRoot = path.dirname(require.resolve("expo-modules-core/package.json"));
const expoModulesCoreSrc = path.join(expoModulesCoreRoot, "src");

module.exports = {
  ...base,
  setupFiles,
  moduleNameMapper: {
    ...base.moduleNameMapper,
    "^expo-modules-core/src/Refs$": path.join(expoModulesCoreSrc, "Refs.ts"),
    "^expo-modules-core/src/uuid/uuid\\.web$": path.join(expoModulesCoreSrc, "uuid", "index.web.ts"),
    "^expo-modules-core/src/web/index\\.web$": path.resolve(__dirname, "__tests__/mocks/expo-modules-core-web-stub.js"),
  },
};
