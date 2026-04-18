'use client';

import { createContext, useContext, useReducer, useCallback, ReactNode } from 'react';

export type CartItem = {
  id: string;
  name: string;
  sku: string;
  price: number;
  qty: number;
};

type State = {
  items: CartItem[];
  isOpen: boolean;
};

type Action =
  | { type: 'ADD'; item: Omit<CartItem, 'qty'> }
  | { type: 'REMOVE'; id: string }
  | { type: 'SET_QTY'; id: string; qty: number }
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'CLEAR' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((i) => i.id === action.item.id);
      return {
        ...state,
        isOpen: true,
        items: existing
          ? state.items.map((i) =>
              i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
            )
          : [...state.items, { ...action.item, qty: 1 }],
      };
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case 'SET_QTY':
      return {
        ...state,
        items:
          action.qty <= 0
            ? state.items.filter((i) => i.id !== action.id)
            : state.items.map((i) =>
                i.id === action.id ? { ...i, qty: action.qty } : i
              ),
      };
    case 'OPEN':
      return { ...state, isOpen: true };
    case 'CLOSE':
      return { ...state, isOpen: false };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'qty'>) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false });

  const addItem = useCallback(
    (item: Omit<CartItem, 'qty'>) => dispatch({ type: 'ADD', item }),
    []
  );
  const removeItem = useCallback(
    (id: string) => dispatch({ type: 'REMOVE', id }),
    []
  );
  const setQty = useCallback(
    (id: string, qty: number) => dispatch({ type: 'SET_QTY', id, qty }),
    []
  );
  const openCart = useCallback(() => dispatch({ type: 'OPEN' }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE' }), []);
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  const totalItems = state.items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        setQty,
        openCart,
        closeCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
