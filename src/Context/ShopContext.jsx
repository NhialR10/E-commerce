import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);

const getDefualtCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [CartItem, setCartItems] = useState(getDefualtCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const RemoveFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in CartItem) {
      if (CartItem[item] > 0) {
        let itemInfo = all_product.find(
          (Product) => Product.id === Number(item)
        );

        totalAmount += itemInfo.new_price * CartItem[item];
      }
    }
    return totalAmount;
  };
  const contextValue = {
    getTotalCartAmount,
    all_product,
    CartItem,
    addToCart,
    RemoveFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
