import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { IProductProps } from '../lib/types';
import { sampleData } from '../config/samples';

interface ProductsState {
  money: number;
  selectedProduct: number;
  products: IProductProps[];
}

const initialState: ProductsState = {
  money: 0,
  selectedProduct: 0,
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action: PayloadAction<IProductProps[]>) => {
      state.products = { ...sampleData, ...action.payload };
    },
    SET_MONEY: (state, action: PayloadAction<number>) => {
      state.money += action.payload;
    },
    SET_SELECTED_PRODUCT: (state, action: PayloadAction<number>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { SET_PRODUCTS, SET_MONEY, SET_SELECTED_PRODUCT } =
  productsSlice.actions;

export const getProducts = (state: RootState) => state.products.products;
export const getInsertedMoney = (state: RootState) => state.products.money;

export default productsSlice.reducer;
