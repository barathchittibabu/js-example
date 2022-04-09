import React from "react";
import TextField from '@material-ui/core/TextField';
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
      query city($search: String) {
        city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}) {
          id
          name
          is_connected_city
        }
      }
      `;

      const {loading , error , data}= useQuery(SEARCH_CITY,{
          pollInterval:500,
        });
      
      if(loading)
      return(
          <>
          <input
           type="text"
           placeholder="Enter Your City"
           defaultValue={'Spinning...'}
          />
          </>
      );
      if(error)
      return(
          <>
          <input
          type="text"
          placehlder="Enter Your City"
          defaultValue={'please enter the correct value'}
          />
          </>
      );

      const location = [];

      data.city.map((citys, index) => {
        return location.push({ id: index, name: citys.name });
      });

      return(
          <div className="form">
                    <label>Select your City:</label>
                    <Autocomplete
                    suggestions={location} key={location.id}
                    className="form-control"
                    type="text"
                    name="list"
                    />
                    </div>
      )
    

  }

  function SearchCityFunc() {
  return (
    <ApolloProvider client={client}>
      <SearchCity />
    </ApolloProvider>
  );
}

export default SearchCityFunc;


// import React from "react";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql,
// } from "@apollo/client";
// import AutoComplete from "./AutoComplete";

// const client = new ApolloClient({
//   uri: "https://dcore.fr8.in/v1/graphql",
//   cache: new InMemoryCache(),
// });

// function CitySearch() {
//   const CITY_SEARCH = gql`
//     query citySearch {
//       city {
//         id
//         name
//       }
//     }
//   `;

//   const { loading, error, data } = useQuery(CITY_SEARCH, {
//     pollInterval: 500,
//   });

//   if (loading)
//     return (
//       <>
//         <input
//           type="text"
//           className="form-input"
//           placeholder="City"
//           defaultValue="Loading..."
//         />
//       </>
//     );
//   if (error)
//     return (
//       <input
//         type="text"
//         className="form-input"
//         placeholder="City"
//         defaultValue="Not Found..!"
//       />
//     );
//   const location = [];

//   data.city.map((citys, index) => {
//     return location.push({ id: index, name: citys.name });
//   });

//   return <AutoComplete suggestions={location} key={location.id} />;
// }

// function CitySearchComponent() {
//   return (
//     <ApolloProvider client={client}>
//       <CitySearch />
//     </ApolloProvider>
//   );
// }

// export default CitySearchComponent;