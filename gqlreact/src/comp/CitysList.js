


//---------this is used for print citys name in ul--list--------//
//--------------------------------------------------------------//
//--------------------------------------------------------------//

import React from 'react';
import './CitysList.css';
import { useQuery,gql } from '@apollo/client'

const GET_CITY = gql`
    query citys {
        city {
        id
        name
        is_connected_city
        }
    }
`;

export default function CitysList(){
    const {loading, error, data} = useQuery(GET_CITY);

    console.log({error,loading,data});

    if(loading) return <div>Spinner...</div>;

    if(error) return <div>something went wrong</div>;

    return <div className='CitysList'>
        {data.city.map(citys => {
            return <div>
                <ul>
                    <li>{citys.name}</li>
                </ul>
            </div>;
        })}
    </div>;
}
//-----------------------------------------------------------//
//-----------------------------------------------------------//


//------------------------------------------------------------//
//---------------          hook         ----------------------//
//------------------------------------------------------------//

// import React from 'react';
// import { useCitys } from '../hook_comp/useCitys';
// import './CitysList.css';


// export default function CitysList(){
//     const {error, loading ,data } = useCitys();

//     if(loading) return <div>Spinning...</div>;

//     if(error) return <div>something went wrong</div>;

//     return <div className='CitysList'>
//         {data.city.map(citys => {
//             return <div>
//                 <ul>
//                     <li>{citys.name}</li>
//                 </ul>
//             </div>;
//         })}
//     </div>;
// }


//-------------------------------------------------------------//