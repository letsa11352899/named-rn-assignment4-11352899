import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jobizz</Text>
        <Text style={styles.subtitle}>Welcome Back</Text>
        <Text style={styles.text}>Let's log in, Apply to jobs!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.orContinue}>-----Or continue with-----</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/google.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/apple.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/facebook.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.register}>Haven't an account? Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: '#fff' },
  header: { alignItems: 'center', marginVertical: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#5A67D8' },
  subtitle: { fontSize: 20, color: '#2D3748', marginVertical: 10 },
  text: { fontSize: 14, color: '#718096' },
  inputContainer: { marginVertical: 20 },
  input: { height: 40, borderColor: '#CBD5E0', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, marginVertical: 10 },
  button: { backgroundColor: '#5A67D8', borderRadius: 8, paddingVertical: 12, alignItems: 'center', marginVertical: 20 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  orContinue: { textAlign: 'center', color: '#A0AEC0' },
  socialContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 20 },
  icon: { width: 40, height: 40, marginHorizontal: 10 },
  register: { textAlign: 'center', color: '#5A67D8', marginTop: 20 },
});
