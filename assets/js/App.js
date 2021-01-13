import React, { useRef } from 'react';
import { CatalogueSearch } from './components/CatalogueSearch.js';
import { CatalogueResults } from './components/CatalogueResults.js';

// TODO: refactor this with something like CustomElementConnector
export const App = () => {
  const catalogueSearchElements = useRef([]);
  const catalogueResultsElements = useRef([]);
  catalogueSearchElements.current = Array.from(document.getElementsByTagName('catalogue-search'));
  catalogueResultsElements.current = Array.from(document.getElementsByTagName('catalogue-results'));
  return (
    <>
      {catalogueSearchElements.current.map((el, i) => (
        <CatalogueSearch ref={el} key={i} />
      ))}
      {catalogueResultsElements.current.map((el, i) => (
        <CatalogueResults ref={el} key={i} />
      ))}
    </>
  );
};
