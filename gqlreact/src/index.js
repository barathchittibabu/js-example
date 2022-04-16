import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {ApolloClient,ApolloProvider,InMemoryCache} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";

const client = new ApolloClient({
  uri:'https://dcore.fr8.in/v1/graphql',
  Cache:new InMemoryCache()
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider  client={client}>
      <App/>
      </ApolloProvider>,
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// reportWebVitals();