import React, { createContext, useState } from 'react'

export const ContextoUser = createContext();

export default function UserProvider({ children }) {

    const [usuarios, setUsuarios] = useState([
        { id: 1, name: 'maria', senha: '1234' },
        { id: 2, name: 'joao', senha: '5678' },
        { id: 3, name: 'pedro@email.com', senha: '5555' },
    ]);

    return (
        <ContextoUser.Provider value={[usuarios, setUsuarios]}>
            {children}
        </ContextoUser.Provider>
    )
}
