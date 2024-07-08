import React from 'react';
import RadioButtons from "./components/RadioButtons/RadioButtons";
import DiscountCode from "./components/DiscountCode/DiscountCode";
import Notes from "./components/Notes/Notes";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Feature Demo</h1>
      <div>
        <h2 className="text-xl font-semibold">Radio Selection</h2>
        <RadioButtons />
      </div>
      <div>
        <h2 className="text-xl font-semibold">Discount Code</h2>
        <DiscountCode />
      </div>
      <div>
        <h2 className="text-xl font-semibold">Notes</h2>
        <Notes />
      </div>
    </div>
  );
};

export default App;
