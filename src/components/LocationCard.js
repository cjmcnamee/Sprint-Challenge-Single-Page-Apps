import React from 'react'
import styled from 'styled-components';

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <div>
      <h1>{name}</h1>
      <p>{type} - {dimension}</p>
      <button>{residents.length}</button>
    </div>
  );
}
