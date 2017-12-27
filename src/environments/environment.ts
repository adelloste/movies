// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: { 
    apiKey: "AIzaSyDmk09PxPbTpUu_rhfMQY2mT0cLRyfLwQc", 
    authDomain: "movies-33523.firebaseapp.com", 
    databaseURL: "https://movies-33523.firebaseio.com", 
    projectId: "movies-33523", 
    storageBucket: "movies-33523.appspot.com", 
    messagingSenderId: "58316878085" 
  }, 
  api: {
    apiKey: "2764fa87647fd7536e839ea8826eb796",
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
