import { createContext, useState } from'react';

export const DarkContext = createContext();

// eslint-disable-next-line react/prop-types
export const DarkProviderComponent = ({children}) => {

    const [darkMode, setDarkMode ] = useState('light');
    const [lang, setLang] = useState('es');

    return <DarkContext.Provider
        value={{
            darkMode,
            setDarkMode,
            lang,
            setLang
        }}>
        {children}
    </DarkContext.Provider>;
}