import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useRouter } from "expo-router";
import { colors, spacing, typography } from "@/constants/theme";
const PncLogo = require("@/assets/pnc-logo-rev.svg").default;

export function Header() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/")} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
        <PncLogo width={80} height={32} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signOnBtn}
        onPress={() => router.push("/(auth)/login")}
        activeOpacity={0.8}
      >
        <Text style={styles.signOnText}>SIGN ON</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 4,
    backgroundColor: colors.navBg,
    ...(Platform.OS === "ios" ? { paddingTop: 52 } : { paddingTop: spacing.md }),
  },
  signOnBtn: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 4,
  },
  signOnText: {
    color: colors.white,
    ...typography.bodySmall,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
