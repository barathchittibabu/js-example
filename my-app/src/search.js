import React, { useState } from "react";
import {gql,useLazyQuery} from "@apollo/client";

const GET_CITY_LOCATION= gql`
query getcitylocation($cityName: String) {
    city(where: {_and: [{name: {_ilike: $cityName}}, {is_connected_city: {_eq: true}}]}) {
      id
      name
      is_connected_city
    }
  }`

  
export default function Search(){
    const [city,setCity] = useState("");

    const [getLocations, {loading,error,data}] = useLazyQuery(GET_CITY_LOCATION,{
        variables:{
            city
        }
    });

    console.log({
        loading,
        error,
        data,
    });

    return(
        <div>
            <input value={city} onChange={(e) => setCity(e.target.value)}/>,
            <button onClick={() => getLocations() }>search</button>
            {loading && <div>Spinner...</div>}
            {error && <div>Something went Wrong.</div>}
            {data && (
                <ul>
                    {data.city.map((citys) =>{
                        return<li>{citys.name}</li>
                    })}
                </ul>
            )}
        </div>
    );
};