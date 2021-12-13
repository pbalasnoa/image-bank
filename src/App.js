import "./App.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Detail from "./pages/Details";
import SearchImage from "./pages/SearchResult";

import { Route, useRoute } from "wouter";

import { ImageContextProvider } from "./context/ImageContext";
import { useState } from "react";

import { useLocation } from "wouter";

function App() {
  const [query, setQuery] = useState("");

  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  const [match] = useRoute("/image/:id");

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
        {!match && (
          <Header
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            query={query}
          />
        )}
        <Route to="/" component={Home} />
        <Route path="/search/:query" component={SearchImage}></Route>
        <Route path="/search/topic/:id" component={SearchImage} />
        <Route
          path="/search/collection/:idCollection"
          component={SearchImage}
        />

        <Route path="/image/:id" component={Detail} />
      </ImageContextProvider>
    </>
  );
}

export default App;
