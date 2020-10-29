const API_KEY = "eb8ba0a881d77dfb687cbaf46459ee4e";

export default {
  fetchTrending: `trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNowPlaying: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchMovies: `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  fetchGenres: `genre/movie/list?api_key=${API_KEY}&language=en-US`,
};
