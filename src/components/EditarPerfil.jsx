import { View, Text, TextInput, Button } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ContextoUser } from '../contexto/UserContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function EditarPerfil(props) {
    const { id, nome, email, senha, username, endereco, cidade, estado, setId, setNome, setEmail, setSenha, setUsername, setEndereco, setCidade, setEstado, gravarDados, usuarioLogado, setUsuarioLogado } = useContext(ContextoUser);

    useEffect(() => {

        const rotadoProps = props.route.params.item;

        if (rotadoProps && rotadoProps.id) {
            setId(props.route.params.item.id.toString());
            setNome(props.route.params.item.nome);
            setEmail(props.route.params.item.email);
            setSenha(props.route.params.item.senha);
            setUsername(props.route.params.item.username);
            setEndereco(props.route.params.item.endereco);
            setCidade(props.route.params.item.cidade);
            setEstado(props.route.params.item.estado);
            console.log("setou id");
        }

    }, []);

    return (
        <GestureHandlerRootView>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 5,
                }}
                editable={false}
                value={id}
                onChangeText={setId}
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'black',
                    borderWidth: 1,
                    margin: 5,
                }}
                placeholder='Nome:'
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 5,
                }}
                placeholder='Email:'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 5,
                }}
                placeholder='Senha:'
                value={senha}
                onChangeText={setSenha}
                keyboardType='default'
                secureTextEntry={true}
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 5,
                }}
                placeholder='Username:'
                value={username}
                onChangeText={setUsername}
                keyboardType='default'
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 5,
                }}
                placeholder='Endereço:'
                value={endereco}
                onChangeText={setEndereco}
                keyboardType='default'
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 5,
                }}
                placeholder='Cidade:'
                value={cidade}
                onChangeText={setCidade}
                keyboardType='default'
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin: 5,
                }}
                placeholder='Estado:'
                value={estado}
                onChangeText={setEstado}
                keyboardType='default'
            />
            <Button
                title="Cancelar"
                color={'#32123f'}
                onPress={() => props.navigation.goBack()} />
            <Button
                title="Gravar"
                color="#32123f"
                onPress={() => {
                    gravarDados();
                    props.navigation.goBack()
                }} />
        </GestureHandlerRootView>
    )
}
