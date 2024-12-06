export type ThemeConfig = {
  [key: string]: string;
};

export const lightTheme: ThemeConfig = {
  background: "#ffffff",
  color: "#000000",
  buttonBackground: "#007bff",
  buttonColor: "#ffffff",
  buttonHoverBackground: "#0056b3",
};

export const darkTheme: ThemeConfig = {
  background: "#000000",
  color: "#ffffff",
  buttonBackground: "#444444",
  buttonColor: "#ffffff",
  buttonHoverBackground: "#222222",
};
