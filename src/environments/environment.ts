// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
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
      timeout: 30000,
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
    }
  }
};
