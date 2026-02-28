import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";
import { colors, spacing, typography } from "@/constants/theme";

interface CardProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  children?: React.ReactNode;
  Icon?: React.FC<SvgProps>;
}

export function Card({ title, onPress, style, children, Icon }: CardProps) {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={[styles.card, style]}
    >
      {Icon && (
        <View style={styles.iconWrap}>
          <Icon width={48} height={48} />
        </View>
      )}
      {children ?? null}
      <Text style={styles.title}>{title}</Text>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: spacing.lg,
    minHeight: 100,
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconWrap: {
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.headline,
    color: colors.text,
  },
});
