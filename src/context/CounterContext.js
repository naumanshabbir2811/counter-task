import React from "react";

const CreateCounterStateContext = React.createContext(undefined);
const CreateCounterDispatchContext = React.createContext(undefined);

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const handleSetCount = count => {
    setCount(count);
  };
  return (
    <CreateCounterStateContext.Provider value={count}>
      <CreateCounterDispatchContext.Provider value={{ handleSetCount }}>
        {children}
      </CreateCounterDispatchContext.Provider>
    </CreateCounterStateContext.Provider>
  );
};

const useCreateCounterStateContext = () => {
  const context = React.useContext(CreateCounterStateContext);
  if (context === undefined) {
    throw Error("Error happen in state");
  }
  return context;
};
const useCreateCounterDispatchContext = () => {
  const context = React.useContext(CreateCounterDispatchContext);
  if (context === undefined) {
    throw Error("Error happen in state");
  }
  return context;
};
const useCounterContext = () => {
  return [useCreateCounterStateContext(), useCreateCounterDispatchContext()];
};
export { CounterContextProvider, useCounterContext };
