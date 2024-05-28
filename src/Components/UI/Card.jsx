import { useCart } from "../Contexts/CartContext";


export const Card = ({ item }) => {

    const { addToCart } = useCart()

  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md border border-gray-200 dark:border-gray-700 ">
      <a href="#">
        <img className="p-4 rounded-t-lg w-1/2 mx-auto" src={item.image} alt="product image" />
      </a>
      <div className="px-4 pb-4">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900  ">{item.title}</h5>
        </a>
        <div className="flex items-center mt-2 mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ">{item.rating.rate} stars from {item.rating.count} reviews</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 ">${item.price}</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            onClick={() => addToCart(item)}>
                Add to cart
            </button>
        </div>
      </div>
    </div>
  );
};