import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Home, Cart, CartEmpty } from "./components";

import "./App.scss";
import { FullPizza } from "./components/FullPizza/FullPizza";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/pizza/:id" element={<FullPizza />} />
                    <Route path="*" element={<CartEmpty />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
