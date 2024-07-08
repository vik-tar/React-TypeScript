import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectionState {
  selectedOption: string;
  discountCode: string;
  notes: string;
}

const initialState: SelectionState = {
  selectedOption: '',
  discountCode: '',
  notes: '',
};

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    setSelectedOption(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    },
    setDiscountCode(state, action: PayloadAction<string>) {
      state.discountCode = action.payload;
    },
    setNotes(state, action: PayloadAction<string>) {
      state.notes = action.payload;
    },
    generateDiscountCode(state) {
      state.discountCode = 'NEWCODE123';
    },
  },
});

export const { setSelectedOption, setDiscountCode, setNotes, generateDiscountCode } = selectionSlice.actions;

export default selectionSlice.reducer;
