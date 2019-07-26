import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        console.log(response.data.results)
        setEpisodes(response.data.results)
      })
      .catch(error => {
        console.log(error)
      });
  }, [])

  return <section className='episode-list grid-view'>
    <h2 className='flexH2'>
      {episodes.map(item => (
        <EpisodeCard key={item.id} name={item.name} airDate={item.air_date} episode={item.episode} characters={item.characters}/>
      ))}
    </h2>
  </section>
}
