import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import AutoComplete from "./AutoComplete";

const client = new ApolloClient({
  uri: "https://dcore.fr8.in/v1/graphql",
  cache: new InMemoryCache(),
});

function SearchCity() {
  const CITY_SEARCH = gql`
    query citys{
      city {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(CITY_SEARCH);

  if (loading)
    return (
      <div style={{color:"orange"}}>loading...
      </div>
    );
  if (error)
    return (<>Please enter the Correct value...</>);

  const dataValue = [];

  data.city.map((citys) => {
    return dataValue.push({ id:citys.id , name:citys.name });
  });

  return <AutoComplete suggestions={dataValue}/>;
}

function CitySearchComponent(){
  return (
    <ApolloProvider client={client}>
      <SearchCity />
    </ApolloProvider>
  );
}

export default CitySearchComponent;