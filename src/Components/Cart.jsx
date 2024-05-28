
import { useCart } from "../Components/Contexts/CartContext";
import NavBar from "./UI/Navbar";
const Cart = () => {
    const { cartItems, removeFromCart, checkOut } = useCart();
    return (
        <div>
            <NavBar />
            <h1 className="mb-4 mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
                Your Cart
            </h1>
            <div className="grid  gap-4">
                <div className="sidebar p-4 border border-black container mx-auto">
                    <h2 className="text-xl font-bold mb-2 text-center">
                        Total Price
                    </h2>
                    <p className="text-2xl font-bold text-center">
                        ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                    </p>
                    <div className="flex justify-center mt-4">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                            onClick={checkOut}>
                                Check Out
                        </button>
                    </div>
                </div>
                <div className="container mx-auto text-center">
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} className="list underline text-2xl border border-black">
                            {item.title} - ${item.price}
                            <br />
                            <img src={item.image} alt={item.title} className="w-1/5 h-1/5 mx-auto"/>
                            <br />
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                            onClick={() => removeFromCart(item)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Cart