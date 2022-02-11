import "./App.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Detail from "./pages/Details";
import SearchImage from "./pages/SearchResult";

import { Route, useRoute } from "wouter";

import { ImageContextProvider } from "./context/ImageContext";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  const [match] = useRoute("/image/:id");

  return (
    <>
      <ImageContextProvider>
        {!match && <Header query={query} setQuery={setQuery} />}
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
