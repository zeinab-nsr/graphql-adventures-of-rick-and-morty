import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles/styles.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

export default function CharactersList() {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  return (
    <>
      {loading && <div>loading...</div>}
      {!loading && data && 
        <section className="characters-list">
          {data.characters.results.map((character) => (
            <div key={character.id} >
              <img src={character.image} alt="avatar" />
              <h2>{character.name}</h2>
            </div>)
          )}
        </section>
      }
    </>
  )
}