import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ContextoUser = createContext();

export default function UserProvider({ children }) {
    const [usuarios, setUsuarios] = useState([]);
    const [atualizacao, setAtualizacao] = useState([{}]);
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [username, setUsername] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const [usuarioLogado, setUsuarioLogado] = useState('');


    const url = 'https://usuarios-api-two.vercel.app/usuarios/';

    function buscarUsuarios() {
        fetch(url)
            .then((respFetch) => respFetch.json())
            .then((respJson) => {
                setUsuarios(respJson);
                console.log("passou no getUsuarios", respJson);
            })
            .catch((erro) => console.warn(erro));
    }

    function gravarDados() {
        console.log("gravar dados", url + id);
        if (id) {
            axios
                .put(url + id, {
                    nome,
                    email,
                    senha,
                    username,
                    endereco,
                    cidade,
                    estado,
                })
                .then((resp) => atualizaListaUsuarioEditado(resp))
                .catch((erro) => console.log(erro));
        } else {
            axios
                .post(url, {
                    nome,
                    email,
                    senha,
                    username,
                    endereco,
                    cidade,
                    estado,
                })
                .then((resp) => atualizaListaUsuarioNovo(resp))
                .catch((erro) => console.log(erro));
        }
    }

    function atualizaListaUsuarioEditado(resp) {
        if (resp.status == 202) {
            console.log(resp.data, "edit");
            const index = usuarios.findIndex(item => item.id == id);
            let users = usuarios;

            users[index] = nome;
            users[index] = email;
            users[index] = senha;
            users[index] = username;
            users[index] = endereco;
            users[index] = cidade;
            users[index] = estado;
            setUsuarios(users);

            let atualizacao = usuarios;
            atualizacao.nome = nome;
            atualizacao.email = email;
            atualizacao.senha = senha;
            atualizacao.username = username;
            atualizacao.endereco = endereco;
            atualizacao.cidade = cidade;
            atualizacao.estado = estado;

            setUsuarioLogado(atualizacao);
            setAtualizacao(atualizacao);
        }
    }

    function atualizaListaUsuarioNovo(response) {
        console.log("atualizaListaUsuarioNovo", response.data);
        let {
            id,
            nome,
            email,
            senha,
            username,
            endereco,
            cidade,
            estado,
        } = response.data;

        let obj = {
            id: "id",
            nome: "nome",
            email: "email",
            senha: "senha",
            username: "username",
            endereco: "endereco",
            cidade: "cidade",
            estado: "estado"
        };
        let users = usuarios;
        users.push(obj);
        setUsuarios(users);

        let atualizacao = usuarios;
        atualizacao.nome = nome;
        atualizacao.email = email;
        atualizacao.senha = senha;
        atualizaçao.username = username;
        atualizacao.endereco = endereco;
        atualizacao.cidade = cidade;
        atualizacao.estado = estado;
        setAtualizacao(atualizacao);
    }

    function apagarUsuario(cod) {
        axios.delete(url + cod).then(() => {
            setUsuarios(usuarios.filter(item => item.id !== cod));
        }).catch((erro) => console.log(erro));
    }

    function resetUsuario() {
        setUsuarioLogado('');
    }

    return (
        <ContextoUser.Provider
            value={{
                nome,
                email,
                senha,
                username,
                endereco,
                cidade,
                estado,
                setId,
                setNome,
                setEmail,
                setSenha,
                setUsername,
                setEndereco,
                setCidade,
                setEstado,
                gravarDados,
                usuarios,
                setUsuarios,
                buscarUsuarios,
                apagarUsuario,
                atualizacao,
                resetUsuario,
                setUsuarioLogado,
                usuarioLogado,
            }}
        >
            {children}
        </ContextoUser.Provider>
    );
}
