import { Button } from "@/modules/core/components/Button";
import { useUI } from "@/modules/core/hooks/useUI";
import { useRouter } from "expo-router";
import React, { Component, type ReactNode } from "react";
import { Text, View } from "react-native";
import { createErrorBoundaryStyles } from "./ErrorBoundary.styles";

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: (error: Error, resetError: () => void) => ReactNode;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (__DEV__) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.resetError);
      }
      return (
        <DefaultErrorFallback
          error={this.state.error}
          onReset={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({
  error,
  onReset,
}: {
  error: Error;
  onReset: () => void;
}) {
  const { t, styles } = useUI(createErrorBoundaryStyles);

  const router = useRouter();

  const handleGoHome = () => {
    onReset();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t("home.common.error.title") || "Something went wrong"}
      </Text>
      <Text style={styles.message}>
        {t("home.common.error.message") ||
          "An unexpected error occurred. Please try again."}
      </Text>
      {__DEV__ && error.message && (
        <Text style={styles.errorText}>{error.message}</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button
          title={t("home.common.error.retry") || "Try Again"}
          onPress={onReset}
          variant="primary"
        />
      </View>
      <View style={[styles.buttonContainer, { marginTop: 12 }]}>
        <Button
          title={t("home.common.error.goHome") || "Go Home"}
          onPress={handleGoHome}
          variant="outline"
        />
      </View>
    </View>
  );
}
