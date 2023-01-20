import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import product from "sanity_e-ushki/schemas/product";
import { useStateContext } from "~/context/StateContext";
import { urlFor } from "~/lib/client";

import { Button, ItemCount } from "~/components";

const Cart = () => {
  // const cartRef = userRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  return (
    <div className="w-[100vw] bg-black bg-opacity-50 fixed z-[100] duration-500 right-0 top-0 text-black">
      <div className="h-screen w-2/4 bg-white  float-right px-8 py-4 relative duration-300">
        <div className="flex items-center">
          <button
            type="button"
            className="flex items-center space-x-2 text-lg font-medium"
            onClick={() => setShowCart(false)}
          >
            <AiOutlineLeft className="text-black" />
            <span className="ml-[10px] text-black">Ваш кошик</span>
          </button>
          <span className="ml-[10px] text-secondary">
            ({totalQuantities} товарів)
          </span>
        </div>
        {cartItems.length < 1 && (
          <div className="text-center space-y-2">
            <div className="items-center">
              <AiOutlineShopping className="mx-auto" size={150} />
            </div>
            <div className="space-y-2 flex flex-col">
              <h3 className="text-xl font-semibold">
                Наразі Ваш кошик ще пустий :(
              </h3>
              <Link href="/">
                <Button className="" onClick={() => setShowCart(false)}>
                  Продовжити покупки
                </Button>
              </Link>
            </div>
          </div>
        )}

        <div className="mt-4 max-h-[70vh] space-y-2">
          {cartItems.length >= 1
            && cartItems.map((item) => (
              <div className="w-full flex space-x-2" key={item._id}>
                <div className="border rounded-3 w-[128px] h-[128px] flex items-center justify-center">
                  <img
                    src={urlFor(item?.image[0])}
                    className="object-scale-down w-[128px] p-2"
                  />
                </div>
                <div className="space-y-2 flex flex-col w-full">
                  <div className="flex items-center">
                    <h5>{item.name}</h5>
                    <h4 className="ml-auto">{item.price}₴</h4>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col mt-auto space-y-8">
                      <ItemCount
                        className={"w-[120px]"}
                        qty={item.quantity}
                        incQty={() => toggleCartItemQuantity(item._id, "inc")}
                        decQty={() => toggleCartItemQuantity(item._id, "dec")}
                      />
                    </div>
                    <div className="mt-auto ml-auto">
                      <TiDeleteOutline
                        onClick={() => onRemove(item)}
                        className="remove-item"
                      />
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
              <h3 className="font-bold ">{totalPrice}₴</h3>
            </div>
            <div className="btn-container">
              <Button type="button" className="" onClick="">
                Оформити замовлення
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
