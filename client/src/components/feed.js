import React , { useState, Fragment} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Items from './items';


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

    let {q}= props.match.params;
  
    return (
      <Fragment> 
        <Query query={FOOD_QUERY} variables={{q}}>

           {({loading, error, data}) => {

             if(loading) return (
               <div className="loadercenter">
                 <i className="fas fa-sync fa-spin fa-5x" />
               </div>
             )

             if (error) console.log(error);

             let food = data.food.hits;
          
             return (
                <div className='d-flex flex-wrap mt-5 feed'>
                     {food.map( foods => (
                   
                   <Items key={foods.recipe.uri} label={foods.recipe.label} image={foods.recipe.image} ingredients={foods.recipe.ingredients} />
               ))}
                </div>
             )
             
             
           }}
            
          
          

        </Query>     
      </Fragment>
    )
}

export default Feed;