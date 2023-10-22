import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";

import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { className } from "../shared/lib/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={className("app", {}, [theme])}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О Сайте</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/about"} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
