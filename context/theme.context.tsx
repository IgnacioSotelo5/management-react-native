import { createContext, ReactNode } from "react"

interface ThemeProviderProps{
    children: ReactNode
}

interface ColorScheme {
    backgroundColor: string
    color: string
}

interface ThemeContextProps {
    fontFamilies: Record<string, Record<string, string>>
    colorScheme: {
        dark: ColorScheme
        light: ColorScheme
    }

}

const themeConfig: ThemeContextProps ={
    fontFamilies: {
        quicksand: {
            light: "Quicksand-Light",
            normal: "Quicksand-Regular",
            medium: "Quicksand-Medium",
            semibold: "Quicksand-SemiBold",
            bold: "Quicksand-Bold",
        },
        inter: {
            light: "Inter-Light",
            normal: "Inter-Regular",
            medium: "Inter-Medium",
            semibold: "Inter-SemiBold",
            bold: "Inter-Bold",
        }
    },
    colorScheme:  {
        dark: {
            backgroundColor: '#020617',
            color: '#fff',
        },
        light: {
            backgroundColor: '#f5f5f5',
            color: '#000'
        }
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
