import "./App.css";

import Home from "./pages/Home";
import Detail from "./pages/Details";
import SearchImage from "./pages/SearchResult";

import { Route } from "wouter";
import Context from "./context/StaticContext";
import { ImageContextProvider } from "./context/ImageContext";

function App() {
  return (
    <Context.Provider value={{ name: "pao", suscribe: true }}>
      <>
        <ImageContextProvider>
          <Route to="/" component={Home} />
          <Route path="/search/:query" component={SearchImage} />
          <Route path="/image/:id" component={Detail} />
        </ImageContextProvider>
      </>
    </Context.Provider>
  );
}

export default App;
