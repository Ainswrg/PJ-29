import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<any> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const toggleTheme = () => {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: toggleTheme,
        }),
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
