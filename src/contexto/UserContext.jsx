﻿import React, {createContext, useState} from 'react';
import axios from 'axios';

export const ContextoUser = createContext();

export default function UserProvider({children}) {
  const [usuarios, setUsuarios] = useState([]);
  const [atualizacao, setAtualizacao] = useState({});
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
      .then(respFetch => respFetch.json())
      .then(respJson => {
        setUsuarios(respJson);
        // console.log('passou no getUsuarios', respJson);
      })
      .catch(erro => console.warn(erro));
  }

  function gravarDados() {
    console.log('gravar dados', url + id);
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
        .then(resp => atualizaListaUsuarioEditado(resp))
        .catch(erro => console.log(erro));
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
        .then(resp => atualizaListaUsuarioNovo(resp))
        .catch(erro => console.log(erro));
    }
  }

  function atualizaListaUsuarioEditado(response) {
    console.log(response);
    const {id: updatedUserId} = response.data;
    const updatedUsers = usuarios.map(user =>
      user.id === updatedUserId
        ? {
            ...user,
            nome,
            email,
            senha,
            username,
            endereco,
            cidade,
            estado,
          }
        : user,
    );
    setUsuarios(updatedUsers);

    const usuarioAtualizado = {
      nome,
      email,
      senha,
      username,
      endereco,
      cidade,
      estado,
    };
    setAtualizacao(usuarioAtualizado);
  }

  function atualizaListaUsuarioNovo(response) {
    console.log('atualizaListaUsuarioNovo', response.data);
    const {
      id: newUserId,
      nome: newUserName,
      email: newUserEmail,
      senha: newUserSenha,
      username: newUserUsername,
      endereco: newUserEndereco,
      cidade: newUserCidade,
      estado: newUserEstado,
    } = response.data;

    const newUser = {
      id: newUserId,
      nome: newUserName,
      email: newUserEmail,
      senha: newUserSenha,
      username: newUserUsername,
      endereco: newUserEndereco,
      cidade: newUserCidade,
      estado: newUserEstado,
    };

    setUsuarios([...usuarios, newUser]);
  }

  function apagarUsuario(cod) {
    axios
      .delete(url + cod)
      .then(() => {
        setUsuarios(usuarios.filter(item => item.id !== cod));
      })
      .catch(erro => console.log(erro));
  }

  function resetUsuario() {
    setUsuarioLogado(null);
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
      }}>
      {children}
    </ContextoUser.Provider>
  );
}
