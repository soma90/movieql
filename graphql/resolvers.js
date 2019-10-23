//resolver - query 에 대한 작업

import { getMovies } from "./db";

const resolvers = {
  Query: {
    //name이라는 쿼리를 보냈을때
    //name: () => "soma"
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  }
}

export default resolvers;