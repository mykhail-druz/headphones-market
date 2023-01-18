import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  Shopping,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "~/context/StateContext";
import { urlFor } from "~/lib/client";
import product from "sanity_e-ushki/schemas/product";
import ItemCount from "../ItemCount/itemCount";

const Cart = () => {
  //const cartRef = userRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    <div className="cart-wrapper tw-text-black">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft className="tw-text-black" />
          <span className="heading">Ваш кошик</span>
          <span className="cart-num-items">({totalQuantities} товарів)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <div className="tw-items-center">
              <AiOutlineShopping className="tw-mx-auto" size={150} />
            </div>
            <h3>Наразі Ваш кошик ще пустий :(</h3>
            <Link href="/">
              <button
                type="button"
                className="btn"
                onClick={() => setShowCart(false)}
              >
                Продовжити покупки
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="tw-border tw-cursor-pointer rounded-3 tw-object-scale-down tw-w-24 tw-h-24 lg:tw-w-32 lg:tw-h-32 tw-p-2"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price}₴</h4>
                  </div>
                  <div className="flex bottom">
                    <div className="tw-flex tw-flex-col tw-mt-auto tw-w-full tw-space-y-8">
                      <div className="tw-border tw-flex tw-justify-between tw-px-2 tw-items-center tw-w-1/3">
                        <button
                          className="tw-text-2xl"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          -
                        </button>
                        <p className="tw-text-xl tw-border-separate">
                          {item.quantity}
                        </p>
                        <button
                          className="tw-text-2xl"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Разом:</h3>
              <h3 className="tw-font-bold ">{totalPrice}₴</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick="">
                Оформити замовлення
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
