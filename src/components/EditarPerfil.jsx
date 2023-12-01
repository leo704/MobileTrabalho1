import { View, Text, TextInput, Button } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ContextoUser } from '../contexto/UserContext'



export default function EditarPerfil(props) {
    const { setId, setNome, setEmail, setSenha, setUsername, setEndereco, setCidade, setEstado, gravarDados, usuarioLogado, setUsuarioLogado } = useContext(ContextoUser);

    const { id, nome, email, senha, username, endereco, cidade, estado } = props.route.params.usuarioLogado;

    useEffect(() => {
        setId(id.toString());
        setNome(nome);
        setEmail(email);
        setSenha(senha);
        setUsername(username);
        setEndereco(endereco);
        setCidade(cidade);
        setEstado(estado);
        console.log("setou id");
    }, []);

    return (
        <View>
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
        </View>
    )
}
