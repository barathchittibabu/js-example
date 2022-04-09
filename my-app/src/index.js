import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
// import Counter from './counterClass';
// import {One} from './counterFun';
import App from './regForm';
// import SearchCityFunc from './reagistrationgraphql';
// import Sign from './Login';
// import {State_con} from './hook';
// import {EgState} from './hook_component/useState';
// import {EgEffect} from './hook_component/useEffect';
// import App from './App'
// import {Egcontext_2} from './hook_component/useContext';
// import {Egcontext_3} from './hook_component/useContext';


// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql
// } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "https://48p1r2roz4.sse.codesandbox.io",
//   cache: new InMemoryCache()
// });

// function ExchangeRates() {
//   const { loading, error, data } = useQuery(gql`
//     {
//       rates(currency: "USD") {
//         currency
//         rate
//       }
//     }
//   `);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ currency, rate }) => (
//     <div key={currency}>
//       <p>
//         {currency}: {rate}
//       </p>
//     </div>
//   ));
// }

// function App() {
//   return (
//     <div>
//       <h2>My first Apollo app 🚀</h2>
//       <ExchangeRates />
//     </div>
//   );
// }



ReactDOM.render(
<App />,
document.getElementById('root'));
