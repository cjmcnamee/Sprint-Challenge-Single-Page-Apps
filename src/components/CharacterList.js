import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.log(error)
      });
  }, [])

  return <section className='character-list grid-view'>

      <h2>
      {characters.map(item => (
          <CharacterCard key={item.id} image={item.image} name={item.name} species={item.species} status={item.status} origin={item.origin.name} location={item.location.name} episode={item.episode}/>
      ))}
      </h2>
    </section>
}
