import React from 'react'
import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 450px;
  border: 1px solid darkgray;
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PadDiv = styled.div`
  padding: 20px;
`;

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <CardDiv>
      <PadDiv>
        <h1>{name}</h1>
        <p className="grayBoy">{type} - {dimension}</p>
      </PadDiv>
        <button width='100%'>Residents: {residents.length}</button>
    </CardDiv>
  );
}
