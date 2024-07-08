import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../../redux/store";
import {generateDiscountCode, setDiscountCode} from "../../redux/slices/selectionSlice";

const DiscountCode: React.FC = () => {
  const dispatch = useDispatch();
  const discountCode = useSelector((state: RootState) => state.selection.discountCode);
  const [input, setInput] = useState('');

  const validateCode = (code: string) => code === 'DISCOUNT2024';

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter discount code"
        className="border p-2 w-full"
      />
      <button
        onClick={() => {
          if (validateCode(input)) {
            dispatch(setDiscountCode(input));
          } else {
            alert('Invalid code');
          }
        }}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Apply Code
      </button>
      <button
        onClick={() => dispatch(generateDiscountCode())}
        className="bg-green-500 text-white p-2 rounded"
      >
        Generate Code
      </button>
      {discountCode && <p className="mt-2">Discount Code: {discountCode}</p>}
    </div>
  );
};

export default DiscountCode;
