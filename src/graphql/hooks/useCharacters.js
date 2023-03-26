import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../queries";

const useCharacters = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  return {
    data,
    loading,
    error
  }
}

export default useCharacters;