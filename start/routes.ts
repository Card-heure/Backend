/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";
import userRoutes from "./routes/user";
import profileRoutes from "./routes/profil";

Route.group(() => {
  Route.get("/", async ({response}) => {
    return response.json("Working.");
  });
  userRoutes()

  Route.group(() => {
    profileRoutes()
  })
    .prefix("user")
    .middleware("auth:api")

  /*Route.group(() => {
    Route.get("/", "ProfilesController.get");
    Route.post("/", "ProfilesController.store");
  })
    .prefix("profile")
    .middleware("auth:api");

  Route.group(() => {
    Route.get("/", "GendersController.index");
  })
    .prefix("genders")
    .middleware("auth:api");

  Route.group(() => {
    Route.get("/artists", "SpotifyController.artists");
    Route.get("/tracks", "SpotifyController.tracks");
    Route.get("/track-by-name", "SpotifyController.trackByName");
  })
    .prefix("spotify")
    .middleware("auth:api");

  Route.group(() => {
    /!* potential matches *!/
    Route.get("/", "MatchesController.get");

    /!* mark match *!/
    Route.post("/mutual", "MatchesController.mutualMatch");

    /!* get mutual match history *!/
    Route.get("/history", "MatchesController.history");
  })
    .prefix("matches")
    .middleware("auth:api");
*/
})


