import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SideNavBar} from "./components/SideNavBar/SideNavBar";
import {About} from "./pages/About/About";
import {Films} from "./pages/Films/Films";
import styles from './App.module.scss';

function App() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <SideNavBar />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/films" element={<Films />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
