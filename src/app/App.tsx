import { Link } from "react-router-dom";
import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { className } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={className("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О Сайте</Link>

            <AppRouter />
        </div>
    );
};

export default App;
