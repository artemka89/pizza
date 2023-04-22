import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Pages/Home/Home";
import Cart from "./components/content/Cart/Cart";

import "./App.scss";


function App() {         

    return (
        <BrowserRouter>
            <div className="App">                
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>                
            </div>
        </BrowserRouter>
    );
}

export default App;
