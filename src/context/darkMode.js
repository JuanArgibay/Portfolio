import { createContext, useState } from'react';

export const DarkContext = createContext();

// eslint-disable-next-line react/prop-types
export const DarkProviderComponent = ({children}) => {

    const [darkMode, setDarkMode ] = useState('light');

    return <DarkContext.Provider
        value={{
            darkMode,
            setDarkMode
        }}>
        {children}
    </DarkContext.Provider>;
}