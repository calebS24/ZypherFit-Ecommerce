import React, { createContext, useEffect, useState } from "react";
import { backend_url } from "../App";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const isBackendEnabled = process.env.REACT_APP_ENABLE_BACKEND === "true";
  const [products, setProducts] = useState([]);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    if (!isBackendEnabled) {
      return;
    }

    const fetchInitialData = async () => {
      try {
        const productResponse = await fetch(`${backend_url}/allproducts`);
        if (!productResponse.ok) {
          throw new Error(`Products request failed with status ${productResponse.status}`);
        }
        const productData = await productResponse.json();
        setProducts(productData);
      } catch (error) {
        console.error("Unable to load products from backend. Rendering home page without product data.", error);
        setProducts([]);
      }

      if (localStorage.getItem("auth-token")) {
        try {
          const cartResponse = await fetch(`${backend_url}/getcart`, {
            method: "POST",
            headers: {
              Accept: "application/form-data",
              "auth-token": `${localStorage.getItem("auth-token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(),
          });

          if (!cartResponse.ok) {
            throw new Error(`Cart request failed with status ${cartResponse.status}`);
          }

          const cartData = await cartResponse.json();
          setCartItems(cartData);
        } catch (error) {
          console.error("Unable to load cart from backend.", error);
        }
      }
    };

    fetchInitialData();
  }, [isBackendEnabled]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = products.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.new_price;
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        try {
          let itemInfo = products.find((product) => product.id === Number(item));
          totalItem += itemInfo ? cartItems[item] : 0;
        } catch (error) {}
      }
    }
    return totalItem;
  };

  const addToCart = async (itemId) => {
    if (!localStorage.getItem("auth-token")) {
      alert("Please Login");
      return;
    }

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    if (!isBackendEnabled) {
      return;
    }

    try {
      const response = await fetch(`${backend_url}/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      });

      if (!response.ok) {
        throw new Error(`Add-to-cart failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Unable to sync add-to-cart with backend.", error);
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (localStorage.getItem("auth-token") && isBackendEnabled) {
      try {
        const response = await fetch(`${backend_url}/removefromcart`, {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: itemId }),
        });

        if (!response.ok) {
          throw new Error(`Remove-from-cart failed with status ${response.status}`);
        }
      } catch (error) {
        console.error("Unable to sync remove-from-cart with backend.", error);
      }
    }
  };

  const contextValue = {
    products,
    getTotalCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
