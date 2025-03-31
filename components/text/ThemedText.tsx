import { useTheme } from "@/hooks/useTheme";
import { Text, TextProps } from "react-native";

interface ThemedTextProps extends TextProps {
  className?: string;
}

export function ThemedText({ className = "", style, ...props }: ThemedTextProps) {
  const { fontFamilies, colorScheme, currentColorScheme } = useTheme();
  const theme = colorScheme[currentColorScheme] || {};

  const weightClass = className.match(/font-(thin|light|normal|medium|semibold|bold)/);
  const weight = weightClass ? weightClass[1] : "normal";

  const fontFamilyClass = className.match(/font-(quicksand|inter)/);
  const fontFamily = fontFamilyClass ? fontFamilyClass[1] : "quicksand"; // Default es quicksand

  const font = fontFamilies[fontFamily]?.[weight] || fontFamilies.quicksand.normal;
  

  return <Text className={className} style={[{ fontFamily: font, color: theme?.color }, style]} {...props} />;
}
