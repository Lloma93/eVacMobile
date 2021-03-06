import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import AuthService from '../../services/auth';
import { useEffect } from 'react';

export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    //zera a mensagem de erro sempre que o cara digitar algo
    errorMessage && setErrorMessage('');
  }, [userName, password]);

  handleNavigateToRegisterPage = () => {
    navigation.navigate('RegisterPage');
  };

  handleLogin = async () => {
    //Checa se o usuário digitou todos os campos
    if (userName && password) {
      // Chamar abaixo seu serviço de login com os campos corretos
      /*const response = await AuthService.login({
      user: userName,
      pass: password,
    });

    if (response)*/ //descomentar para checar se o login está correto com a resposta da api

      navigation.navigate('Home');
    } else {
      setErrorMessage('Favor preencher todos os campos!!');
    }
  };

  return (
    <>
      <LinearGradient
        colors={['#0094D4', '#00D4AA']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      />
      <View style={styles.container}>
        <StatusBar backgroundColor="#72D6DA" />
        <Image style={styles.logo} source={require('../../images/logo.png')} />
        <Text style={styles.title}>eVAC</Text>

        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="CPF"
          placeholderTextColor={'white'}
        />

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
          placeholderTextColor={'white'}
        />

        {errorMessage !== '' && (
          <View style={styles.errorMessageContent}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        )}

        <RectButton style={styles.logginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </RectButton>

        <Text style={styles.forgetPass}>Esqueci minha senha</Text>

        <RectButton
          style={styles.registerButton}
          borderless={true}
          onPress={handleNavigateToRegisterPage}
        >
          <View style={styles.registerButtonBorder}>
            <Text style={styles.buttonText}>CRIAR CONTA</Text>
          </View>
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#304698',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 260,
    height: 43,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    color: 'white',
    backgroundColor: '#ffffffaa',
  },
  logginButton: {
    width: 200,
    height: 50,
    borderRadius: 6,
    marginTop: 20,
    backgroundColor: '#1A54AE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    width: 200,
    height: 43,
    borderRadius: 6,
    margin: 12,
  },
  registerButtonBorder: {
    width: '100%',
    height: '100%',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 6,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgetPass: {
    color: 'white',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  errorMessageContent: {
    width: 260,
    height: 43,
    margin: 12,
    borderColor: '#dd0000',
    borderWidth: 2,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: '#dd0000',
    fontWeight: 'bold',
  },
});
