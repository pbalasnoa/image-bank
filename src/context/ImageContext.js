import { createContext, useState } from "react";

const Context = createContext({});

export function ImageContextProvider({ children }) {
  const [images, setImages] = useState([]);

  return (
    <Context.Provider value={{ images, setImages }}>
      {children}
    </Context.Provider>
  );
}
export default Context;
