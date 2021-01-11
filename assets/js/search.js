import React from "react";
import ReactDOM from "react-dom";
import { CatalogueSearch } from "./components/CatalogueSearch.js";
import { CatalogueResults } from "./components/CatalogueResults.js";

console.log("qui");

if (document.getElementById("search-root")) {
  console.log("quo");
  ReactDOM.render(
    <React.StrictMode>
      <CatalogueSearch />
    </React.StrictMode>,
    document.getElementById("search-root")
  );
}

if (document.getElementById("catalogue-root")) {
  console.log("qua");
  ReactDOM.render(
    <React.StrictMode>
      <CatalogueResults />
    </React.StrictMode>,
    document.getElementById("catalogue-root")
  );
}
