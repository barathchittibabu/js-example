"import React from "react";
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

function CitySearch() {
  const CITY_SEARCH = gql`
    query citySearch {
      city {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(CITY_SEARCH, {
    pollInterval: 500,
  });

  if (loading)
    return (
      <>
        <input
          type="text"
          className="form-input"
          placeholder="City"
          defaultValue="Loading..."
        />
      </>
    );
  if (error)
    return (
      <input
        type="text"
        className="form-input"
        placeholder="City"
        defaultValue="Not Found..!"
      />
    );
  const location = [];

  data.city.map((citys, index) => {
    return location.push({ id: index, name: citys.name });
  });

  return <AutoComplete suggestions={location} key={location.id} />;
}

function CitySearchComponent() {
  return (
    <ApolloProvider client={client}>
      <CitySearch />
    </ApolloProvider>
  );
}

export default CitySearchComponent;"