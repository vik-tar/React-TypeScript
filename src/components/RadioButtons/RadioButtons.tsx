import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../../redux/store";
import {setSelectedOption} from "../../redux/slices/selectionSlice";

const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.selection.selectedOption);

  return (
    <div className="flex flex-col space-y-2">
      {['Option A', 'Option B', 'Option C'].map(option => (
        <label key={option} className="flex items-center">
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => dispatch(setSelectedOption(option))}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
