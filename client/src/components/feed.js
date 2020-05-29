import React , {useEffect, useState} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';



const FOOD_QUERY = gql`
  query FoodQuery($q: String!) {
    food(q: $q) {
      q,
      hits{
        recipe{
          uri,
          label,
          image,
          ingredients{
            text
          }
        }
      }
    }
  }
`;

const Feed = (props) => {

    console.log(props.match.params);
    
    
    return (
        <div className="container">
           
        </div>
    )
}

export default Feed;