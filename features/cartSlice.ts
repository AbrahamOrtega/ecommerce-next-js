import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductExtendModel from "@/interfaces/ProductExtendModel";


interface CartState {
  products: ProductExtendModel[];
  stock: number[];
}

const initialState: CartState = {
  products: [],
  stock: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{product: ProductExtendModel, stock: number}>) => {
      if(state.products.some(item => item.id === action.payload.product.id)) {
        state.products.map((item) => {
          if (item.id === action.payload.product.id) {
            state.stock[state.products.indexOf(item)] += action.payload.stock;
          }
        });
        return;
      }
      state.products.push(action.payload.product);
      state.stock.push(action.payload.stock);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products.map((item) => { 
        if (item.id === action.payload) {
          state.products.splice(state.products.indexOf(item), 1);
          state.stock.splice(state.products.indexOf(item), 1);
        }
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;