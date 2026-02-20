/**
 * Runs after react-native jest setup and before jest-expo setup. Ensures
 * NativeModules.UIManager and NativeUnimoduleProxy.viewManagersMetadata exist
 * so jest-expo's setup does not throw "Object.defineProperty called on non-object".
 */
const NativeModules = require("react-native/Libraries/BatchedBridge/NativeModules");

if (NativeModules && (typeof NativeModules.UIManager === "undefined" || NativeModules.UIManager === null)) {
  NativeModules.UIManager = {};
}
if (NativeModules?.NativeUnimoduleProxy) {
  const p = NativeModules.NativeUnimoduleProxy;
  if (typeof p.viewManagersMetadata !== "object" || p.viewManagersMetadata == null) {
    p.viewManagersMetadata = {};
  }
}
