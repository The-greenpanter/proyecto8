import { createContext, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <Context.Provider value={{ user, setUser, isDarkMode, toggleDarkMode }}>
            {children}
        </Context.Provider>
    );
};