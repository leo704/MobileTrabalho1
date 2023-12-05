import React, { createContext, useState, useEffect } from 'react';

export const ProdContext = createContext({});

export default function ProdProvider({ children }) {
    const [produtos, setProdutos] = useState([]);

    const url = 'https://dummyjson.com/products';

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setProdutos(data.products);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <ProdContext.Provider value={{ produtos }}>
            {children}
        </ProdContext.Provider>
    );
}
