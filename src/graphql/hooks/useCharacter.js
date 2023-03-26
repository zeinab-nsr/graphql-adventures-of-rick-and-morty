import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../queries";

const useCharacter = (id) => {
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id
    }
  });

  return {
    data,
    loading,
    error
  }
}

export default useCharacter;
