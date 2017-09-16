export const environment = {
  production: true,
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  },
  api: {
    apiKey: "",
    baseUrl: 'https://api.themoviedb.org/3',
    language: 'en-US',
    popular: {
      contentType: "application/json",
      method: "GET",
      timeout: "30000",
      uri: "/movie/popular"
    },
    popularDetail: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/movie/{MOVIE_ID}"
    },
    popularCredits: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/movie/{MOVIE_ID}/credits"
    },
    popularRecommendation: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/movie/{MOVIE_ID}/recommendations"
    },
    searchMovie: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/search/movie"
    },
    popularTV: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/tv/popular"
    },
    topRatedTV: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/tv/top_rated"
    },
    airingTodayTV: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/tv/airing_today"
    },
    onTheAirTV: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/tv/on_the_air"
    }
  }
};
