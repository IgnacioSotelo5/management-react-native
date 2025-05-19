import { useTheme } from "@/hooks/useTheme";
import { Text, TextProps } from "react-native";

interface ThemedTextProps extends TextProps {
  className?: string;
  variant?: "primary" | "secondary"
}

export function ThemedText({ className = "", style, variant = "primary", ...props }: ThemedTextProps) {
  const { colorScheme, currentColorScheme } = useTheme();
  const theme = colorScheme[currentColorScheme] || {};

  //Verificamos si la clase contiene un peso de fuente
  //y lo extraemos
  const weightClass = className.match(/font-(medium|bold)/);
  const weight = weightClass?.[1] ?? ""

  //Si tenemos un peso de fuente, mapeamos a la clase que matchea con
  //las fuentes especificadas en el tailwind config
  const fontFamily = weight ? `font-rubik-${weight}` : "font-rubik"

  //limpiamos la clase font-medium o font-bold del className
  //para evitar duplicados y evitar que se aplique el peso de fuente de tailwind
  const cleanedClassName = className.replace(/\bfont-(medium|bold)\b/, "")

  //Combinamos la clase de fuente con el resto de las clases
  const classNames = `${fontFamily} ${cleanedClassName}`.replace(/\s+/g, ' ').trim()
  
  const textColor = variant === "primary" ? theme.text : theme.textSecondary  

  return (
    <Text 
    className={classNames} 
    style={[{ color: textColor }, style]} 
    {...props} 
    />
  )
}


