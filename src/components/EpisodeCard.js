import React from 'react'
import styled from 'styled-components';

export default function EpisodeCard ({name, airDate, episode, characters}) {

  return (
    <div>
      <h1>{name}</h1>
      <div>{airDate} - {episode}</div>
      <div>Number of Characters: {characters.length}</div>
    </div>
  );
}
