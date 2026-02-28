import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { colors, spacing, typography } from "@/constants/theme";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: Variant;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({ title, onPress, variant = "primary", style, textStyle }: ButtonProps) {
  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[
        styles.base,
        isPrimary && styles.primary,
        variant === "secondary" && styles.secondary,
        isOutline && styles.outline,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          isPrimary && styles.textPrimary,
          variant === "secondary" && styles.textSecondary,
          isOutline && styles.textOutline,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.navDark,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    ...typography.body,
    fontWeight: "600",
  },
  textPrimary: {
    color: colors.white,
  },
  textSecondary: {
    color: colors.white,
  },
  textOutline: {
    color: colors.primary,
  },
});
