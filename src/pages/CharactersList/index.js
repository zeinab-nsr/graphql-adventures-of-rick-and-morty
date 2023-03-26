import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={`${character.id}`} key={character.id} >
              <div className="list-item" >
                <img src={character.image} alt="avatar" />
                <h2>{character.name}</h2>
              </div>
            </Link>
            )
          )}
        </section>
      }
    </>
  )
}