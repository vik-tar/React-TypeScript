import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../../redux/store";
import {setNotes} from "../../redux/slices/selectionSlice";

const Notes: React.FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.selection.notes);

  return (
    <div className="space-y-4">
      <textarea
        value={notes}
        onChange={e => dispatch(setNotes(e.target.value))}
        placeholder="Enter your notes here"
        className="border p-2 w-full"
      />
    </div>
  );
};

export default Notes;
