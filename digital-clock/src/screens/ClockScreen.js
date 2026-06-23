import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Switch, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-timezone';

const ClockScreen = ({ isDarkMode, setIsDarkMode }) => {
  const [currentTime, setCurrentTime] = useState(moment());
  const [use24Hour, setUse24Hour] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeFormat = use24Hour ? 'HH:mm:ss' : 'hh:mm:ss A';
  const dateFormat = 'dddd, MMMM D, YYYY';

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Main Clock */}
      <Card style={[styles.mainClockCard, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.clockDisplay}>
          <Text style={[styles.timeText, { color: theme.colors.primary }]}>
            {currentTime.format(timeFormat)}
          </Text>
          <Text style={[styles.dateText, { color: theme.colors.secondary }]}>
            {currentTime.format(dateFormat)}
          </Text>
          <View style={styles.timezoneInfo}>
            <MaterialCommunityIcons name="map-marker" size={20} color={theme.colors.tertiary} />
            <Text style={[styles.timezoneText, { color: theme.colors.tertiary }]}>
              {currentTime.format('z')} - {currentTime.format('Z')}
            </Text>
          </View>
        </View>
      </Card>

      {/* Settings Section */}
      <Card style={[styles.settingsCard, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.settingItem}>
          <View>
            <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: 'bold' }}>
              24-Hour Format
            </Text>
            <Text style={{ color: theme.colors.outline, fontSize: 12 }}>
              Toggle between 24-hour and 12-hour format
            </Text>
          </View>
          <Switch value={use24Hour} onValueChange={setUse24Hour} />
        </View>

        <View style={[styles.settingItem, { borderTopWidth: 1, borderTopColor: theme.colors.outline }]}>
          <View>
            <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: 'bold' }}>
              Dark Mode
            </Text>
            <Text style={{ color: theme.colors.outline, fontSize: 12 }}>
              Toggle dark/light theme
            </Text>
          </View>
          <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        </View>
      </Card>

      {/* Info Cards */}
      <Card style={[styles.infoCard, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.infoRow}>
          <MaterialCommunityIcons name="clock-time-eight" size={24} color={theme.colors.primary} />
          <View style={styles.infoContent}>
            <Text style={{ color: theme.colors.outline, fontSize: 12 }}>Current Hour</Text>
            <Text style={{ color: theme.colors.primary, fontSize: 18, fontWeight: 'bold' }}>
              {currentTime.format('HH')}
            </Text>
          </View>
        </View>
        <View style={[styles.infoRow, { borderTopWidth: 1, borderTopColor: theme.colors.outline }]}>
          <MaterialCommunityIcons name="calendar" size={24} color={theme.colors.secondary} />
          <View style={styles.infoContent}>
            <Text style={{ color: theme.colors.outline, fontSize: 12 }}>Day of Year</Text>
            <Text style={{ color: theme.colors.secondary, fontSize: 18, fontWeight: 'bold' }}>
              {currentTime.format('DDD')}
            </Text>
          </View>
        </View>
        <View style={[styles.infoRow, { borderTopWidth: 1, borderTopColor: theme.colors.outline }]}>
          <MaterialCommunityIcons name="week" size={24} color={theme.colors.tertiary} />
          <View style={styles.infoContent}>
            <Text style={{ color: theme.colors.outline, fontSize: 12 }}>Week Number</Text>
            <Text style={{ color: theme.colors.tertiary, fontSize: 18, fontWeight: 'bold' }}>
              {currentTime.format('WW')}
            </Text>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  mainClockCard: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 8,
  },
  clockDisplay: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 72,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginBottom: 12,
  },
  dateText: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: '600',
  },
  timezoneInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  timezoneText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  settingsCard: {
    marginBottom: 16,
    borderRadius: 12,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  infoCard: {
    marginBottom: 16,
    borderRadius: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  infoContent: {
    marginLeft: 16,
    flex: 1,
  },
});

export default ClockScreen;
