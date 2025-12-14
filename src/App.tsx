import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SideNavBar} from "./components/SideNavBar/SideNavBar";
import {About} from "./pages/About/About";
import {Films} from "./pages/Films/Films";
import styles from './App.module.scss';
import {useRef} from "react";

function App() {
    const mainRef = useRef<HTMLDivElement>(null);

    const handleSkipToContent = () => {
        mainRef.current?.focus();
    };

    return (
        <BrowserRouter>
            <div className={styles.container}>
                <SideNavBar onSkip={handleSkipToContent}/>
                <div role="main" aria-label="Main content" ref={mainRef} tabIndex={-1}>
                    <Routes>
                        <Route path="/" element={<About/>}/>
                        <Route path="/films" element={<Films/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
