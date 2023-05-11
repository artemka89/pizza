
import { PizzasContainer } from "../Pizzas/PizzasContainer";
import { CategoriesContainer } from "../PizzasCategories/CategoriesContainer";
import { SortContainer } from "../SortPizzas/SortContainer";

 export const Home = () => {
    return (
        <div className="container">
            <div className="filtration">
                <CategoriesContainer />
                <SortContainer />
            </div>
            <PizzasContainer />
        </div>
    );
};
