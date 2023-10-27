// Login page for the app

import { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import TextField from 'components/general/input/TextField';
import { useApp } from '@realm/react';
import Realm from 'realm';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const app = useApp();

  // signIn() uses the emailPassword authentication provider to log in
  const login = useCallback(async () => {
    const creds = Realm.Credentials.emailPassword(email, password);
    await app.logIn(creds);
  }, [app, email, password]);

  // onPressSignIn() uses the emailPassword authentication provider to log in
  const onPressSignIn = useCallback(async () => {
    try {
      await login();
    } catch (error: any) {
      Alert.alert(`Failed to sign in: ${error?.message}`);
    }
  }, [login]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextField
        value={email}
        onChangeText={setEmail}
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Email"
      />
      <TextField
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        textContentType="password"
        placeholder="Password"
      />
      <Button title="Login" onPress={onPressSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(210, 36%, 96%, 1)',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
