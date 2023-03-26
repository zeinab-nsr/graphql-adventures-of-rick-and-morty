import React from "react";
import useCharacters from "../../graphql/hooks/useCharacters";
import "./styles/styles.css";

export default function CharactersList() {
  const { data , loading } = useCharacters();
  return (
    <>
      {loading && <div>loading...</div>}
      {!loading && data && 
        <section className="characters-list">
          {data.characters.results.map((character) => (
            <div className="list-item" key={character.id} >
              <img src={character.image} alt="avatar" />
              <h2>{character.name}</h2>
            </div>)
          )}
        </section>
      }
    </>
  )
}