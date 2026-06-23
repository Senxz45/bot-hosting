import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Switch, Button, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = ({ isDarkMode, setIsDarkMode }) => {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Display Settings */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          Display Settings
        </Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingContent}>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color={theme.colors.primary} />
            <View style={styles.settingText}>
              <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: 'bold' }}>
                Dark Mode
              </Text>
              <Text style={{ color: theme.colors.outline, fontSize: 12 }}>
                {isDarkMode ? 'Enabled' : 'Disabled'}
              </Text>
            </View>
          </View>
          <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        </View>
      </Card>

      {/* About */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          About
        </Text>
        
        <View style={styles.aboutItem}>
          <Text style={{ color: theme.colors.outline, fontSize: 12, marginBottom: 8 }}>
            App Name
          </Text>
          <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: 'bold' }}>
            Digital Clock
          </Text>
        </View>

        <View style={[styles.aboutItem, { borderTopWidth: 1, borderTopColor: theme.colors.outline, paddingTop: 12 }]}>
          <Text style={{ color: theme.colors.outline, fontSize: 12, marginBottom: 8 }}>
            Version
          </Text>
          <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: 'bold' }}>
            1.0.0
          </Text>
        </View>

        <View style={[styles.aboutItem, { borderTopWidth: 1, borderTopColor: theme.colors.outline, paddingTop: 12 }]}>
          <Text style={{ color: theme.colors.outline, fontSize: 12, marginBottom: 8 }}>
            Developer
          </Text>
          <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: 'bold' }}>
            Senxz45
          </Text>
        </View>
      </Card>

      {/* Features */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          Features
        </Text>
        
        {[
          { icon: 'clock-digital', label: 'Real-time Digital Clock', color: theme.colors.primary },
          { icon: 'globe', label: 'Multiple Timezones', color: theme.colors.secondary },
          { icon: 'alarm', label: 'Alarm Management', color: theme.colors.tertiary },
          { icon: 'theme-light-dark', label: 'Dark/Light Mode', color: theme.colors.primary },
        ].map((feature, index) => (
          <View key={index} style={[styles.featureItem, index > 0 && { borderTopWidth: 1, borderTopColor: theme.colors.outline }]}>
            <MaterialCommunityIcons name={feature.icon} size={20} color={feature.color} />
            <Text style={[styles.featureLabel, { color: theme.colors.outline, marginLeft: 12 }]}>
              {feature.label}
            </Text>
          </View>
        ))}
      </Card>

      {/* Actions */}
      <View style={styles.actions}>
        <Button
          mode="contained"
          icon="information"
          onPress={() => alert('Digital Clock v1.0.0\n\nA beautiful and feature-rich digital clock application with timezone support.')}
          style={styles.actionButton}
        >
          About App
        </Button>
        <Button
          mode="outlined"
          icon="refresh"
          onPress={() => alert('Settings reset to defaults')}
          style={styles.actionButton}
        >
          Reset Settings
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 12,
    flex: 1,
  },
  aboutItem: {
    marginTop: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  featureLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  actions: {
    marginTop: 16,
    marginBottom: 32,
  },
  actionButton: {
    marginBottom: 12,
  },
});

export default SettingsScreen;
