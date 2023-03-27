import React from "react";
import { Link } from "react-router-dom";
import useCharacters from "../../graphql/hooks/useCharacters";
import "./styles/styles.css";

export default function CharactersList() {
  const { data , loading } = useCharacters();

  if (loading) return;

  return (
    <>
      {data && 
        <section className="characters-list">
          {data.characters.results.map(({ id, image, name }) => (
            <Link to={`${id}`} key={id} >
              <div className="list-item" >
                <img src={image} alt="avatar" />
                <h2>{name}</h2>
              </div>
            </Link>
            )
          )}
        </section>
      }
    </>
  )
}
