import { useState, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MOCK_ACCOUNTS, MOCK_TRANSACTIONS, type Transaction } from '../data/mockData';

const PNC_ORANGE = '#EF7622';
const PNC_NAVY = '#003087';

function formatCurrency(amount: number) {
  const abs = Math.abs(amount);
  const formatted = abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return amount < 0 ? `-$${formatted}` : `+$${formatted}`;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

const CATEGORIES = ['All', 'Groceries', 'Food & Dining', 'Shopping', 'Subscriptions', 'Gas', 'Income', 'Transfer'];

export default function TransactionsScreen() {
  const [selectedAccount, setSelectedAccount] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return MOCK_TRANSACTIONS.filter((tx) => {
      const matchAccount = selectedAccount === 'all' || tx.accountId === selectedAccount;
      const matchCategory = selectedCategory === 'All' || tx.category === selectedCategory;
      const matchSearch = tx.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchAccount && matchCategory && matchSearch;
    }).sort((a, b) => b.date.localeCompare(a.date));
  }, [selectedAccount, selectedCategory, searchQuery]);

  const totalDebit = filtered.filter((t) => t.amount < 0).reduce((s, t) => s + t.amount, 0);
  const totalCredit = filtered.filter((t) => t.amount > 0).reduce((s, t) => s + t.amount, 0);

  function renderItem({ item }: { item: Transaction }) {
    const isPositive = item.amount > 0;
    return (
      <View style={styles.txCard}>
        <View style={[styles.txIconContainer, isPositive ? styles.positiveIcon : styles.negativeIcon]}>
          <Text style={styles.txIcon}>{isPositive ? '↓' : '↑'}</Text>
        </View>
        <View style={styles.txDetails}>
          <View style={styles.txRow}>
            <Text style={styles.txDescription} numberOfLines={1}>{item.description}</Text>
            <Text style={[styles.txAmount, isPositive ? styles.positiveAmt : styles.negativeAmt]}>
              {formatCurrency(item.amount)}
            </Text>
          </View>
          <View style={styles.txMeta}>
            <Text style={styles.txCategory}>{item.category}</Text>
            <Text style={styles.txDot}> · </Text>
            <Text style={styles.txDate}>{formatDate(item.date)}</Text>
            {item.pending && (
              <>
                <Text style={styles.txDot}> · </Text>
                <Text style={styles.pendingText}>Pending</Text>
              </>
            )}
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transactions</Text>
      </View>

      {/* Account Filter */}
      <View style={styles.accountTabs}>
        <TouchableOpacity
          style={[styles.accountTab, selectedAccount === 'all' && styles.accountTabActive]}
          onPress={() => setSelectedAccount('all')}
        >
          <Text style={[styles.accountTabText, selectedAccount === 'all' && styles.accountTabTextActive]}>
            All
          </Text>
        </TouchableOpacity>
        {MOCK_ACCOUNTS.map((acct) => (
          <TouchableOpacity
            key={acct.id}
            style={[styles.accountTab, selectedAccount === acct.id && styles.accountTabActive]}
            onPress={() => setSelectedAccount(acct.id)}
          >
            <Text style={[styles.accountTabText, selectedAccount === acct.id && styles.accountTabTextActive]}>
              {acct.type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search transactions..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Text style={styles.clearSearch}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Category Filter */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={CATEGORIES}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryChip, selectedCategory === item && styles.categoryChipActive]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text style={[styles.categoryChipText, selectedCategory === item && styles.categoryChipTextActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Summary Row */}
      <View style={styles.summaryRow}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Money In</Text>
          <Text style={[styles.summaryValue, styles.positiveAmt]}>{formatCurrency(totalCredit)}</Text>
        </View>
        <View style={styles.summaryDivider} />
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Money Out</Text>
          <Text style={[styles.summaryValue, styles.negativeAmt]}>{formatCurrency(totalDebit)}</Text>
        </View>
        <View style={styles.summaryDivider} />
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Net</Text>
          <Text style={[styles.summaryValue, (totalCredit + totalDebit) >= 0 ? styles.positiveAmt : styles.negativeAmt]}>
            {formatCurrency(totalCredit + totalDebit)}
          </Text>
        </View>
      </View>

      {/* Transactions List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No transactions found</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  header: {
    backgroundColor: PNC_NAVY,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '700' },
  accountTabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  accountTab: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },
  accountTabActive: { backgroundColor: PNC_NAVY },
  accountTabText: { fontSize: 13, fontWeight: '600', color: '#555' },
  accountTabTextActive: { color: '#fff' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    height: 44,
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#222' },
  clearSearch: { color: '#888', fontSize: 16, padding: 4 },
  categoryList: { paddingHorizontal: 16, paddingBottom: 10, gap: 8 },
  categoryChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#D0D0D0',
  },
  categoryChipActive: { backgroundColor: PNC_ORANGE, borderColor: PNC_ORANGE },
  categoryChipText: { fontSize: 13, fontWeight: '600', color: '#555' },
  categoryChipTextActive: { color: '#fff' },
  summaryRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  summaryItem: { flex: 1, alignItems: 'center' },
  summaryLabel: { color: '#888', fontSize: 11, marginBottom: 4 },
  summaryValue: { fontSize: 15, fontWeight: '700' },
  summaryDivider: { width: 1, backgroundColor: '#E0E0E0' },
  listContent: { paddingHorizontal: 16, paddingBottom: 24 },
  txCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  txIconContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  positiveIcon: { backgroundColor: '#E8F5E9' },
  negativeIcon: { backgroundColor: '#FFF3F3' },
  txIcon: { fontSize: 18, fontWeight: '700' },
  txDetails: { flex: 1 },
  txRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  txDescription: { fontWeight: '600', color: '#222', fontSize: 14, flex: 1, marginRight: 8 },
  txAmount: { fontSize: 15, fontWeight: '700' },
  positiveAmt: { color: '#2E7D32' },
  negativeAmt: { color: '#D32F2F' },
  txMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  txCategory: { color: '#888', fontSize: 12 },
  txDot: { color: '#BBB', fontSize: 12 },
  txDate: { color: '#888', fontSize: 12 },
  pendingText: { color: PNC_ORANGE, fontSize: 12, fontWeight: '700' },
  empty: { alignItems: 'center', paddingVertical: 40 },
  emptyText: { color: '#888', fontSize: 15 },
});
