import { CategoriesPage } from "./src/Components/Categories"
import App from './src/App';
import Cart from './src/Components/Cart'

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "categories",
        element: <CategoriesPage />,
    },
    {
        path: "cart",
        element: <Cart />
    }
]
export default routes