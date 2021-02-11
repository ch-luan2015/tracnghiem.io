import React, { ReactNode, useState, createContext } from "react";

export const StoreContext = createContext({});

interface StoreProps {
  children: ReactNode;
}

const StoreProvider = ({ children }: StoreProps) => {
  // các em đã vào nhà kho
  const teamMembersNames = ["John", "Mary", "Jason", "David"];
  const todoListInitia = {
    do1: "hello",
    do2: "hi",
  };
  const [sharing, setSharing] = useState([]);
  const [help, setHelp] = useState([]);
  const [pairing, setPairing] = useState(teamMembersNames);

  const [todoList, setTodo] = useState(todoListInitia);
  const [count, setCount] = useState(0);

  const store = {
    sharing: [sharing, setSharing],
    help: [help, setHelp],
    pairing: [pairing, setPairing],
    todoList: { todoList, setTodo },
    count: { count, setCount },
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
export default StoreProvider;
