import { useQuery,gql } from "@apollo/client";


const GET_CITY = gql`
    query citys {
        city {
        id
        name
        is_connected_city
        }
    }
    `;

    export const useCitys = () => {
        const {error, loading, data} = useQuery(GET_CITY);
        return{
            error,
            data,
            loading,
        };
    };