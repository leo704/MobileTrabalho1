import React, { createContext, useState } from 'react';

const CarrinhoContext = createContext();

export const ContextoCarrinho = createContext({});

export const CarrinhoProvider = ({ children }) => {
    const [itensCarrinho, setItensCarrinho] = useState([]);

    function adicionarCarrinho(item) {
        setItensCarrinho((prevItensCarrinho) => [...prevItensCarrinho, item]);
    }

    return (
        <CarrinhoContext.Provider value={{ itensCarrinho, adicionarCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};
