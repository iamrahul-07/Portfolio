import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const [darkMode, setDarkMode]=useState(false)

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[darkMode]);

    const themeToggle=()=>setDarkMode(prev=>!prev);

    return(
        <ThemeContext.Provider value={{darkMode, themeToggle}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme=()=>useContext(ThemeContext);