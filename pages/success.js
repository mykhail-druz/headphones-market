import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "~/context/StateContext";
import { Button } from "~/components";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="w-full mt-[70px] text-center h-[80vh] justify-center">
      <div className="w-1/3 flex flex-col items-center mx-auto h-full space-y-2">
        <span className="rounded-full bg-green-500 p-9 text-white mt-[100px]">
          <BsBagCheckFill className="w-[75px] h-[75px]" />
        </span>
        <h2 className="text-3xl font-extrabold">Дякую за вашу покупку!</h2>
        <p className="text-xl font-semibold">Ми надіслали чек на вашу почту.</p>
        <p className="font-medium">
          Якщо є якись запитання:
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>

        <Button link="/">Продовжити Шопінг</Button>
      </div>
    </div>
  );
};

export default Success;
