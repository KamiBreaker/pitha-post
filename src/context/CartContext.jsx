import { createContext, useContext, useReducer } from 'react';

const initialState = {
  items: [],
  isOpen: false,
  step: 'cart',   // 'cart' | 'form' | 'review' | 'confirmation'
  customer: { name: '', phone: '', area: '', address: '' },
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id
              ? { ...i, quantity: i.quantity + (action.quantity ?? 1) }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id:           action.product.id,
            name:         action.product.name,
            purchaseType: action.product.purchaseType,  // 'monthly' | 'one-time'
            category:     action.product.category,
            price:        action.product.price,
            quantity:     action.quantity ?? 1,
          },
        ],
      };
    }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };

    case 'UPDATE_QTY':
      if (action.quantity < 1)
        return { ...state, items: state.items.filter((i) => i.id !== action.id) };
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: action.quantity } : i
        ),
      };

    case 'SET_CUSTOMER':
      return { ...state, customer: { ...state.customer, ...action.fields } };

    case 'SET_STEP':
      return { ...state, step: action.step };

    case 'OPEN':
      return { ...state, isOpen: true };

    case 'CLOSE':
      return { ...state, isOpen: false };

    case 'CLEAR':
      return { ...initialState };

    default:
      return state;
  }
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const total     = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);

  const ctx = {
    items:       state.items,
    isOpen:      state.isOpen,
    step:        state.step,
    customer:    state.customer,
    total,
    itemCount,
    addItem:     (product, quantity = 1) => dispatch({ type: 'ADD_ITEM', product, quantity }),
    removeItem:  (id)                    => dispatch({ type: 'REMOVE_ITEM', id }),
    updateQty:   (id, quantity)          => dispatch({ type: 'UPDATE_QTY', id, quantity }),
    setCustomer: (fields)                => dispatch({ type: 'SET_CUSTOMER', fields }),
    setStep:     (step)                  => dispatch({ type: 'SET_STEP', step }),
    openCart:    ()                      => dispatch({ type: 'OPEN' }),
    closeCart:   ()                      => dispatch({ type: 'CLOSE' }),
    clearCart:   ()                      => dispatch({ type: 'CLEAR' }),
  };

  return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
