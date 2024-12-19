import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import add_icon from "../Assets/add_icon.png"; // Add Icon
import remove_icon from "../Assets/remove_icon.png"; // Remove Icon
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

const CartItems = () => {
  const { products } = useContext(ShopContext);
  const { cartItems, addToCart, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      {/* Header */}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Products in Cart */}
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format-main cartitems-format">
                {/* Product Image */}
                <img
                  className="cartitems-product-icon"
                  src={backend_url + e.image}
                  alt={e.name}
                />

                {/* Product Title */}
                <p className="cartitems-product-title">{e.name}</p>

                {/* Price */}
                <p>{currency}{e.new_price}</p>

                {/* Quantity with Add/Remove Buttons */}
                <div className="cartitems-quantity-section">
                  <img
                    src={remove_icon}
                    alt="Remove"
                    className="cartitems-action-icon"
                    onClick={() => removeFromCart(e.id)}
                  />
                  <span className="cartitems-quantity">{cartItems[e.id]}</span>
                  <img
                    src={add_icon}
                    alt="Add"
                    className="cartitems-action-icon"
                    onClick={() => addToCart(e.id)}
                  />
                </div>

                {/* Total */}
                <p>{currency}{e.new_price * cartItems[e.id]}</p>

                {/* Remove Button */}
                <img
                  onClick={() => removeFromCart(e.id)}
                  className="cartitems-remove-icon"
                  src={cross_icon}
                  alt="Remove Item"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Totals */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{currency}{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code */}
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
