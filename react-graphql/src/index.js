import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import App from './App'; 
 
 
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider 
} from "@apollo/client"; 
 
const client = new ApolloClient({ 
   uri:'https://knowing-owl-29.hasura.app/v1/graphql', 
  cache: new InMemoryCache(), 
  headers:{"x-hasura-admin-secret":"LcsAjzYmvbCoEq1xUM87ifI9o5YsLWNkcdfNlF3enT3rHnriJtelRzHprDHCTv5M"} 
}); 
 
 
ReactDOM.render( 
  <ApolloProvider client={client}> 
    <App /> 
  </ApolloProvider>, 
  document.getElementById('root') 
);

