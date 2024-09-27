# Flash Cards

## About

Allows users to quiz themselves against a set of Koine greek terms

## Dev

- This is a copy of the main repo `Flashcards`

- When copying the repo from `Flashcards` these are the variables/ constants that need to be updated to match the data the flashcard expects:
-     The data. Make sure that the type matches
-     The base route
-     The local storage key

- Run: `npm run start` to run in dev

## Production

Make sure that the base path is set to match the path in `shrood.app`. The base path is located in the constants dir.
Run: `npm run build` to build for production. Load the dist folder wherever the app is wished to render.
