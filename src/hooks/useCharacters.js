import { useQuery, gql } from '@apollo/client'


const GET_CHARACTERS = gql
`query {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      
      ships {
        name
        home_port
        image
      }
      id
    }
  }`;

export const useCharacters = () => {
    const { data,error,loading} = useQuery(GET_CHARACTERS);
    // console.log(data);
    // console.log(error);
    // console.log(loading);

    return {
        data,
        error,
        loading,
       
    };
}