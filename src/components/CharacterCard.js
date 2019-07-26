import React from 'react';
import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 450px;
  border: 1px solid darkgray;
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextDiv = styled.div`
  padding: 20px;
`;

export default function CharacterCard ({image, name, species, status, origin, location, episode}) {
  return (
        <CardDiv>
          <img width="100%" src={image} />
          <TextDiv>
            <h1>{name}</h1>
            <div className="grayBoy">{species} {status}</div>
            <div>Location: {location}</div>
            <div>Origin: {origin}</div>
          </TextDiv>
          <button width="100%">episodes</button>
        </CardDiv>
  )
}
