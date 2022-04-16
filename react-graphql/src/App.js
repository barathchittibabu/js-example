import React, {useState} from 'react' 
import { useQuery,gql} from "@apollo/client"; 
// import { AutoComplete } from 'antd'; 
// import Complete from "./components/citysearch"; 
 
  
const CitySearch = gql` 
query myquery($search:String){  
  city(where:{_and:[  
    {name:{_ilike:$search}},  
    {is_connected_city:{_eq: "true"}}  
  ]})  
  {  
    id  
    name  
    is_connected_city  
  }  
} 
`; 
  const SearchingCity = ()=> { 
  const [state, setState] = useState('') 
  const { loading, error, data } = useQuery( 
    CitySearch, 
    { 
      variables:{ 
        search: %${state}% 
      }
    } 
    ); 
 
  const handlechange = (e)=>{ 
     setState(e) 
  } 
  
 
 if (loading) return <p>Loading...</p>; 
 if (error) return <p>Error...</p>; 
 const options = [ 
  { 
    value : data.city.map((cities)=> <p key={cities.id}> {cities.name} </p>) 
  } 
] 
 
 return( 
    <AutoComplete 
    style={{ width: 200, lineHeight: AutoComplete }} 
    options = {options} 
    placeholder="search city" 
    onSearch={handlechange}
    /> 
    )  
  }

 
  const App = () => { 
    return ( 
      <div> 
       <h1>Search City:</h1> 
       <SearchingCity /> 
       {/* <Complete />  */} 
      </div> 
    ); 
}


export default App;