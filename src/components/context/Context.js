import React, { createContext, useState } from "react";

function useLocalStorageState(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export const AppContext = createContext();

export const Context = (props) => {
  const [cart, setCart] = useLocalStorageState("cartItems", []);

  const addCart = (parcel) => {
    const exist = cart.find((item) => item.id === parcel.id);
    if (!exist) {
      setCart([...cart, { ...parcel }]);
      alert(`${parcel.head} added to cart`);
    } else {
      alert("Item Already In Cart");
    }
  };

  const onIncrease = (parcel) => {
    const exist = cart.find((item) => item.id === parcel.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === parcel.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    }
  };

  const onDecrease = (parcel) => {
    const exist = cart.find((item) => item.id === parcel.id);
    if (exist) {
      if (exist.qty === 1) return;
      setCart(
        cart.map((item) =>
          item.id === parcel.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const onRemove = (parcel) => {
    if (window.confirm("Are you sure you want to remove this item")) {
      setCart(cart.filter((item) => item.id !== parcel.id));
    }
  };

  return (
    <AppContext.Provider
      value={{ cart, onRemove, addCart, onIncrease, onDecrease }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
