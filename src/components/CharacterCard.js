import React from 'react';
import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 400px;
  border: 2px solid gray;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function CharacterCard ({image, name, species, status, origin, location, episode}) {
  return (
      <CardDiv>
        <img width="100%" src={image} />
        <h1>{name}</h1>
        <div>{species} {status}</div>
        <div>Location: {location}</div>
        <div>Origin: {origin}</div>
        <button>episodes</button>
      </CardDiv>
  )
}
