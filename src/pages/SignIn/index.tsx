// tela de login

import React, { useState, useContext } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput, 
    TouchableOpacity
} from 'react-native';


import { AuthContext } from '../../contexts/AuthContext'

const image1 = require('../../assets/logo.png');


export default function SignIn(){
    const { signIn } = useContext(AuthContext)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(){
        
        if(email === '' || password === ''){
            return;
        }

        await signIn({ email, password})
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={image1}
                />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Digite seu e-mail"
                    style={styles.input} 
                    placeholderTextColor="#f0f0f0"
                    value={email}
                    onChangeText={setEmail}
                    />

                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input} 
                    placeholderTextColor="#f0f0f0"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>    
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bdbebd'
    },
    logo:{
        marginBottom: 40
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 34,
        paddingHorizontal: 14,
    },
    input:{
        width:'95%',
        height: 40,
        backgroundColor: '#101026',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#fff',
    },
    button:{
        width:'95%',
        height: 40,
        backgroundColor: '#da571d',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101026'
    }
})