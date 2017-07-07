import React from 'react';
import './PersonCard.css';

const PersonCard = ({peopleInfo}) => {
  console.log('p', peopleInfo);
  return (
    <div className="card">
      <h1>Name: {peopleInfo.name}</h1>
      <p>Hometown: {peopleInfo.homeworld}</p>
      <p>Species: {peopleInfo.species}</p>
      <p>Language: {peopleInfo.language}</p>
      <p>Population: {peopleInfo.population}</p>
    </div>
  )
}

export default PersonCard;