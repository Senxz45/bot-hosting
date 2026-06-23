import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Text, Card, Searchbar, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-timezone';

const TimezonesScreen = ({ theme }) => {
  const [timezones, setTimezones] = useState([]);
  const [filteredTimezones, setFilteredTimezones] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(moment());
  const appTheme = useTheme();

  const popularTimezones = [
    { name: 'New York', timezone: 'America/New_York' },
    { name: 'London', timezone: 'Europe/London' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { name: 'Dubai', timezone: 'Asia/Dubai' },
    { name: 'Singapore', timezone: 'Asia/Singapore' },
    { name: 'Sydney', timezone: 'Australia/Sydney' },
    { name: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
    { name: 'Bangkok', timezone: 'Asia/Bangkok' },
    { name: 'Jakarta', timezone: 'Asia/Jakarta' },
    { name: 'Manila', timezone: 'Asia/Manila' },
    { name: 'Johannesburg', timezone: 'Africa/Johannesburg' },
    { name: 'São Paulo', timezone: 'America/Sao_Paulo' },
  ];

  useEffect(() => {
    setTimezones(popularTimezones);
    setFilteredTimezones(popularTimezones);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredTimezones(timezones);
    } else {
      setFilteredTimezones(
        timezones.filter(tz =>
          tz.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tz.timezone.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, timezones]);

  const TimezoneCard = ({ item }) => {
    const time = currentTime.tz(item.timezone);
    const offset = time.format('Z');

    return (
      <Card style={[styles.timezoneCard, { backgroundColor: appTheme.colors.surface }]}>
        <View style={styles.timezoneContent}>
          <View style={styles.timezoneHeader}>
            <MaterialCommunityIcons name="map-marker" size={24} color={appTheme.colors.primary} />
            <View style={styles.timezoneTitle}>
              <Text style={[styles.cityName, { color: appTheme.colors.primary }]}>
                {item.name}
              </Text>
              <Text style={[styles.tzName, { color: appTheme.colors.outline }]}>
                {item.timezone}
              </Text>
            </View>
          </View>
          <View style={styles.timezoneDetails}>
            <View>
              <Text style={[styles.timeDisplay, { color: appTheme.colors.secondary }]}>
                {time.format('HH:mm:ss')}
              </Text>
              <Text style={[styles.dateDisplay, { color: appTheme.colors.outline }]}>
                {time.format('MMM DD, YYYY')}
              </Text>
            </View>
            <View style={styles.offsetBadge}>
              <Text style={[styles.offsetText, { color: appTheme.colors.tertiary }]}>
                {offset}
              </Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: appTheme.colors.background }]}>
      <Searchbar
        placeholder="Search timezone or city..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={[styles.searchbar, { backgroundColor: appTheme.colors.surface }]}
      />
      <FlatList
        data={filteredTimezones}
        keyExtractor={(item) => item.timezone}
        renderItem={({ item }) => <TimezoneCard item={item} />}
        contentContainerStyle={styles.listContent}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  searchbar: {
    margin: 16,
    borderRadius: 12,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  timezoneCard: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 4,
  },
  timezoneContent: {
    padding: 16,
  },
  timezoneHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  timezoneTitle: {
    marginLeft: 12,
    flex: 1,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tzName: {
    fontSize: 12,
    marginTop: 2,
  },
  timezoneDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeDisplay: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  dateDisplay: {
    fontSize: 12,
    marginTop: 4,
  },
  offsetBadge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
  },
  offsetText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TimezonesScreen;
