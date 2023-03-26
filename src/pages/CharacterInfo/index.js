import React from "react";
import { useParams } from "react-router";
import useCharacter from "../../graphql/hooks/useCharacter";

export default function CharacterInfo() {
  const { id } = useParams();
  const { data , loading } = useCharacter(id);

  return (
    <>
      <div>{data?.character.name}</div>
    </>
  )
}