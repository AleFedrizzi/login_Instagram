import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor='#FFF' translucent={false} />

          <Image 
            source={require('./src/assets/logo1.png')}
            style={styles.logo}
          />

          <TextInput 
          placeholder='celular, username ou email'
          style={styles.input}
          />
          <TextInput 
          placeholder='Sua senha'
          style={styles.input}
          />

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookContainer}>
            <FontAwesome5 name='facebook' size={24} color='#399FFF' />
            <Text style={styles.facebookText}>Continue como Alê Fedrizzi</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{ marginHorizontal: '3%'}}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUnText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpButton}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>


        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
  marginTop: Platform.OS === 'android' ? '15%' : '25%',
  marginBottom: Platform.OS === 'android' ? '15%' : '15%',
  },
  input:{
    backgroundColor: '#F4F3F3',
    width: '85%',
    height: 42,
    marginBottom: 15,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  forgotContainer:{
    width: '85%',
    alignItems: 'flex-end',
  },
  forgotText:{
    color: '#399FFF'
  },
  loginButton:{
    width: '85%',
    marginTop: '10%',
    backgroundColor: '#399FFF',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  loginText:{
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16
  },
  facebookContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
  },
  facebookText:{
    color: '#399FFF',
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor:{
    marginTop: '10%',
    flexDirection: 'row',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divisorLine:{
    width: '42%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },
  signUpContainer:{
    flexDirection: 'row',
    marginTop: '10%',
  },
  signUnText:{
    color: '#C4C4C4',
    paddingRight: 5
  },
  signUpButton:{
    color: '#399FFF',
    fontWeight: '600'
  }
});
