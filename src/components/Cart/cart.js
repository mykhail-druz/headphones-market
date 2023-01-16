import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, Shopping} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '~/context/StateContext';
import { urlFor } from '~/lib/client';

const Cart = () => {
    //const cartRef = userRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();
    
  return (
        <div className="cart-wrapper">
            <div className="cart-container">
                <button
                type="button"
                className="cart-heading"
                onClick={() => setShowCart(false)}>
                    <AiOutlineLeft className="z-index-10"/>
                    <span className="heading">Your cart</span>
                    <span className="cart-num-items">({totalQuantities} товарів)</span>
                </button>
            </div>
        </div>
    )
}

export default Cart;
