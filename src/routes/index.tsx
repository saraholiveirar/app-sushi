// qual rota mostrar para o usuário

import React from "react";

import { View, ActivityIndicator } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes(){
    const isAuthenticated = false; //saber se o usuário está logado ou não
    const loading = false; //para saber se está carregando

    //ActivityIndicator é o spinner que roda quando fizer o login

    if(loading){
        return(
            <View style={{ 
                flex:1, 
                backgroundColor: '#1d1d2e', 
                justifyContent: 'center', 
                alignItems: 'center'
                }}
            >
                <ActivityIndicator size={60} color="#fff"/>
            </View>
        )
    }



    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/> //Se caso o usuário estiver logado, aparecer uma pag, caso não, aparece outra pag
    )
}

export default Routes;