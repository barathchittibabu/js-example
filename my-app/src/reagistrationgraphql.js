import React from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://dcore.fr8.in/v1/graphql',
    cache: new InMemoryCache()
  });

  function SearchCity(){
      const SEARCH_CITY=gql`
      query city($cityName: String!) {
        city(where: {_and: [{name: {_ilike: $cityName}}, {is_connected_city: {_eq: true}}]}) {
          id
          name
          is_connected_city
        }
      }
      `;

      const {loading , error , data}= useQuery(SEARCH_CITY,{
          pollInterval:500,
        });
      
        if (loading) return <input defaultValue={'Loading...'}/>; 
        if (error) return <input defaultValue={'Error...'}/>; 
        const option = [ 
         { 
           value : data.city.map((cities)=> <p key={cities.id}> {cities.name} </p>) 
         } 
       ] 
      
        return <Autocomplete
        className="form-control"
        type="text"
        options={option}
        />;

  }

  function SearchCityFunc() {
  return (
    <ApolloProvider client={client}>
      <SearchCity/>
    </ApolloProvider>
  );
}

export default SearchCityFunc;