//resolver - query 에 대한 작업

import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    //name이라는 쿼리를 보냈을때
    //name: () => "soma"
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
}

export default resolvers;