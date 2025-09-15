import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  items: [], // { id, name, price, image, quantity }
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case "INCREMENT": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };
    }
    case "CLEAR_CART": {
      return initialState;
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  // Load cart from localStorage if available
  const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
    try {
      const stored = localStorage.getItem("munamii_cart");
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return init;
  });

  // Save cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("munamii_cart", JSON.stringify(state));
    } catch (e) {}
  }, [state]);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
