import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import Cart from "./components/content/Cart/Cart";
import FullPizza from "./components/content/Pizzas/FullPizza/FullPizza";

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

                    </Routes>                
            </div>
        </BrowserRouter>
    );
}

export default App;
