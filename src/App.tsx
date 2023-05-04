import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Home, Cart, FullPizza, CartEmpty } from "./components";

import "./App.scss";

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
