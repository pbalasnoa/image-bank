import "./App.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Detail from "./pages/Details";
import SearchImage from "./pages/SearchResult";

import { Route } from "wouter";

import { ImageContextProvider } from "./context/ImageContext";
import { useState } from "react";

import { useLocation } from "wouter";

function App() {
  const [query, setQuery] = useState("");

  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${query}`);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <ImageContextProvider>
        <div>
          <Header
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            query={query}
          />
          <Route to="/" component={Home} />
          <Route path="/search/:query" component={SearchImage} />
        </div>
        <Route path="/image/:id" component={Detail} />
      </ImageContextProvider>
    </>
  );
}

export default App;
