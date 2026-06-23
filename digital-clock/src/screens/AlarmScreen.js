import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Switch } from 'react-native';
import { Text, Card, Button, Dialog, Portal, TextInput, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

const AlarmScreen = ({ theme: appTheme }) => {
  const [alarms, setAlarms] = useState([
    { id: 1, time: '06:30', label: 'Morning Alarm', enabled: true },
    { id: 2, time: '22:00', label: 'Night Reminder', enabled: false },
  ]);
  const [showDialog, setShowDialog] = useState(false);
  const [newAlarmLabel, setNewAlarmLabel] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const theme = useTheme();

  const handleAddAlarm = () => {
    const timeString = selectedTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
    
    setAlarms([...alarms, {
      id: Date.now(),
      time: timeString,
      label: newAlarmLabel || 'New Alarm',
      enabled: true
    }]);
    
    setShowDialog(false);
    setNewAlarmLabel('');
    setSelectedTime(new Date());
  };

  const handleTimeChange = (event, date) => {
    if (date) {
      setSelectedTime(date);
    }
    setShowTimePicker(false);
  };

  const toggleAlarm = (id) => {
    setAlarms(alarms.map(alarm =>
      alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm
    ));
  };

  const deleteAlarm = (id) => {
    setAlarms(alarms.filter(alarm => alarm.id !== id));
  };

  const AlarmCard = ({ alarm }) => (
    <Card style={[styles.alarmCard, { backgroundColor: theme.colors.surface }]}>
      <View style={styles.alarmContent}>
        <View style={styles.alarmLeft}>
          <Text style={[styles.alarmTime, { color: theme.colors.primary }]}>
            {alarm.time}
          </Text>
          <Text style={[styles.alarmLabel, { color: theme.colors.outline }]}>
            {alarm.label}
          </Text>
        </View>
        <View style={styles.alarmRight}>
          <Switch
            value={alarm.enabled}
            onValueChange={() => toggleAlarm(alarm.id)}
          />
          <Button
            icon="delete"
            mode="text"
            onPress={() => deleteAlarm(alarm.id)}
            textColor={theme.colors.error}
          />
        </View>
      </View>
    </Card>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={[styles.infoCard, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.infoContent}>
          <MaterialCommunityIcons name="information" size={24} color={theme.colors.primary} />
          <Text style={[styles.infoText, { color: theme.colors.outline }]}>
            Total Alarms: {alarms.length} | Enabled: {alarms.filter(a => a.enabled).length}
          </Text>
        </View>
      </Card>

      <View style={styles.alarmsList}>
        {alarms.map(alarm => (
          <AlarmCard key={alarm.id} alarm={alarm} />
        ))}
      </View>

      <Button
        mode="contained"
        onPress={() => setShowDialog(true)}
        style={styles.addButton}
        icon="plus"
      >
        Add Alarm
      </Button>

      <Portal>
        <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
          <Dialog.Title>Add New Alarm</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Alarm Label"
              value={newAlarmLabel}
              onChangeText={setNewAlarmLabel}
              mode="outlined"
              style={styles.input}
            />
            <View style={styles.timePickerContainer}>
              <Button onPress={() => setShowTimePicker(true)} mode="outlined">
                Select Time: {selectedTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: false 
                })}
              </Button>
            </View>
            {showTimePicker && (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                display="spinner"
                onChange={handleTimeChange}
              />
            )}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setShowDialog(false)}>Cancel</Button>
            <Button onPress={handleAddAlarm} mode="contained">Add</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  infoCard: {
    marginBottom: 16,
    borderRadius: 12,
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: '600',
  },
  alarmsList: {
    marginBottom: 16,
  },
  alarmCard: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 4,
  },
  alarmContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  alarmLeft: {
    flex: 1,
  },
  alarmTime: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  alarmLabel: {
    fontSize: 14,
    marginTop: 4,
  },
  alarmRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    marginTop: 16,
  },
  input: {
    marginBottom: 16,
  },
  timePickerContainer: {
    marginBottom: 16,
  },
});

export default AlarmScreen;
