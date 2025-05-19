import { createContext, ReactNode } from "react"

interface ThemeProviderProps{
    children: ReactNode
}

interface ColorScheme {
    background: string
    surface: string
    primary: string
    primaryDark: string
    primaryLight: string
    text: string
    textSecondary: string
    border: string
    success: string
    error: string

}

interface ThemeContextProps {
    fontFamily: Record<string, Record<string, string>>
    colorScheme: {
        dark: ColorScheme
        light: ColorScheme
    }

}

const themeConfig: ThemeContextProps ={
    fontFamily: {
        rubik: {
            normal: "Rubik_400Regular",
            medium: "Rubik_500Medium",
            bold: "Rubik_700Bold",
        }
    },
    colorScheme:  {
        light: {
          background: '#FFFDF7',
          surface: '#FFF6E5',
          primary: '#D9822B',
          primaryDark: '#B1611C',
          primaryLight: "#F9C89A",
          text: '#3D2C1E',
          textSecondary: '#7A6A58',
          border: '#E0D4C2',
          success: '#5BBE72',
          error: '#D9534F',
        },
        dark: {
          background: '#1E1A16',
          surface: '#2B241F',
          primary: '#F3A03C',
          primaryDark: '#D9822B',
          primaryLight: "#CAAA6E",
          text: '#F5F0EA',
          textSecondary: '#C3B7A8',
          border: '#3B332D',
          success: '#70D88B',
          error: '#FF6B6B',
        },
    } 
}
export const ThemeContext = createContext<ThemeContextProps>(themeConfig)

export const ThemeProvider = ({children}: ThemeProviderProps) => {

    return(
        <ThemeContext.Provider value={themeConfig}>
            {children}
        </ThemeContext.Provider>
    )
}
