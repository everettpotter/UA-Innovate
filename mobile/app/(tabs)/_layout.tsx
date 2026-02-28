import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const PNC_ORANGE = '#EF7622';
const PNC_NAVY = '#003087';

function TabIcon({ label, active }: { label: string; active: boolean }) {
  const icons: Record<string, string> = {
    Home: '⌂',
    Accounts: '₿',
    Transactions: '≡',
    More: '•••',
  };
  return (
    <View style={tabStyles.container}>
      <Text style={[tabStyles.icon, active && tabStyles.activeIcon]}>
        {icons[label] ?? '○'}
      </Text>
    </View>
  );
}

const tabStyles = StyleSheet.create({
  container: { alignItems: 'center' },
  icon: { fontSize: 20, color: '#888' },
  activeIcon: { color: PNC_ORANGE },
});

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PNC_ORANGE,
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#E0E0E0',
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 10,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabIcon label="Home" active={focused} />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ focused }) => <TabIcon label="Transactions" active={focused} />,
        }}
      />
    </Tabs>
  );
}
