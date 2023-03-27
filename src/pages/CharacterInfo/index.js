import React from "react";
import { useParams } from "react-router";
import useCharacter from "../../graphql/hooks/useCharacter";
import './styles/styles.css';

export default function CharacterInfo() {
  const { id } = useParams();
  const { data , loading, error } = useCharacter(id);

  if (loading) return;

  if (error) {
    return <div className="error">Something went wrong...</div>;
  }

  const { image, name, gender, species, status } = data?.character || {};

  return (
    <section className="character-info-container">
      <div className="character-info-card">
        <figure className="character-info-row">
          <img src={image} alt="avatar" />
        </figure>
        <section className="character-info-row">
          <table>
            <tr>
              <th>Name:</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>gender:</th>
              <td>{gender}</td>
            </tr>
            <tr>
              <th>species:</th>
              <td>{species}</td>
            </tr>
            <tr>
              <th>status:</th>
              <td>{status}</td>
            </tr>
          </table>
        </section>
      </div>
    </section>
  )
}