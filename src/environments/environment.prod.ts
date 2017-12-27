export const environment = {
  production: true,
  }, 
  api: {
    baseUrl: 'https://api.themoviedb.org/3',
    language: 'en-US',
    popularMOVIES: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/movie/popular"
    },
    nowPlayingMOVIES: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/movie/now_playing"
    },
    topRatedMOVIES: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/movie/top_rated"
    },
    upcomingMOVIES: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/movie/upcoming"
    },
    detailMOVIE: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/movie/{MOVIE_ID}"
    },
    creditsMOVIE: {
      contentType: "application/json",
      method: "GET",
      timeout: 30000,
      uri: "/movie/{MOVIE_ID}/credits"
    },
    similarMOVIE: { 
      contentType: "application/json", 
      method: "GET", 
      timeout: 30000, 
      uri: "/movie/{TV_ID}/similar" 
    }, 
    recommendationsMOVIE: {
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
    },
    detailTV: { 
      contentType: "application/json", 
      method: "GET", 
      timeout: 30000, 
      uri: "/tv/{TV_ID}" 
    }, 
    creditsTV: { 
      contentType: "application/json", 
      method: "GET", 
      timeout: 30000, 
      uri: "/tv/{TV_ID}/credits" 
    }, 
    similarTV: { 
      contentType: "application/json", 
      method: "GET", 
      timeout: 30000, 
      uri: "/tv/{TV_ID}/similar" 
    }, 
    recommendationsTV: { 
      contentType: "application/json", 
      method: "GET", 
      timeout: 30000, 
      uri: "/tv/{TV_ID}/recommendations" 
    },
    search: { 
      contentType: "application/json", 
      method: "GET", 
      timeout: 30000, 
      uri: "/search/multi" 
    }  
  }
};
