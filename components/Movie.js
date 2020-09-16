import React from 'react';


const Movie = ({title, synopsis, ratings}) => {
  return (
    <div>
      <h4>{ title }</h4>
      <p>{ synopsis }</p>
      <p>{ ratings }</p>

    </div>
  )
}


export default Movie;

