import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";

import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { useTheme } from "./theme/useTheme";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О Сайте</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync />} />
                    <Route path={"/about"} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
