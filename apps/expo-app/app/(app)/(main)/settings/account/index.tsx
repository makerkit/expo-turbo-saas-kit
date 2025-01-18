import { Stack } from 'expo-router';
import { View } from 'react-native';

import { UpdateAccountContainer } from '@kit/account';

export default function AccountSettingsPage() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Account',
          headerBackTitle: 'Settings',
          headerBackVisible: true,
          headerBackButtonMenuEnabled: true,
          headerShown: true,
        }}
      />

      <UpdateAccountContainer />
    </View>
  );
}
