import  {createContext, useContext} from "react";

export const ThemeContext = createContext({
    themeMode: "light",  //String Expected
    darkTheme: () => {},  //functionality nahi likhi jaati bass bata diya jaata hai ki aap ek function ho ishki functoinality App.jsx me likhte hai
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}