import { createContext, useContext, useReducer } from "react";
import faker from "faker";   // Generate massive amounts of fake (but realistic) data for testing and development
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99); //seed() method is used to initialize the random number generator.

const Context = ({ children }) => {
  const products = [...Array(50)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
console.log('products',products)
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,   
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
