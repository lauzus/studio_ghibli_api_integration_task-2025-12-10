import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SideNavBar} from "./components/SideNavBar/SideNavBar";
import {About} from "./pages/About";
import {Films} from "./pages/Films";

function App() {
    return (
        <BrowserRouter>
            <SideNavBar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/films" element={<Films />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
