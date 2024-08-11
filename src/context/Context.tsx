// Context.tsx
import React, { createContext, useState, ReactNode } from 'react';

type UserType = {
    username: string;
    name: string;
    phone: string;
};

type ContextType = {
    user: UserType | null;
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export const Context = createContext<ContextType>({
    user: null,
    setUser: () => { },
});

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserType | null>(null);

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
};
